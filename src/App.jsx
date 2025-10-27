import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Hero from "./components/Hero";
import JobSubmit from "./components/JobSubmit";
import StatsOverview from "./components/StatsOverview";
import JobsTable from "./components/JobsTable";

function simulateWorkerAssignment(priority) {
  const workers = ["alpha", "bravo", "charlie", "delta", "echo"];
  const index = Math.max(0, Math.min(workers.length - 1, Math.floor((priority - 1) / 2)));
  return workers[index + Math.floor(Math.random() * (workers.length - index))] || "alpha";
}

export default function App() {
  const [jobs, setJobs] = useState([]);

  const stats = useMemo(() => {
    return jobs.reduce(
      (acc, j) => {
        acc[j.status] = (acc[j.status] || 0) + 1;
        return acc;
      },
      { queued: 0, running: 0, completed: 0, failed: 0 }
    );
  }, [jobs]);

  const handleSubmit = useCallback((job) => {
    const now = Date.now();
    const withMeta = {
      ...job,
      createdAt: now,
      status: "queued",
      worker: null,
      durationMs: null,
    };

    setJobs((prev) => [withMeta, ...prev]);

    const scheduleDelay = Math.max(200, 1200 - job.priority * 100);

    setTimeout(() => {
      const worker = simulateWorkerAssignment(job.priority);
      setJobs((prev) =>
        prev.map((j) =>
          j.id === job.id ? { ...j, status: "running", startedAt: Date.now(), worker } : j
        )
      );

      const runTime = 1000 + Math.random() * (job.priority <= 2 ? 1200 : 2500);
      setTimeout(() => {
        const failed = Math.random() < (job.priority <= 2 ? 0.05 : job.priority >= 8 ? 0.15 : 0.1);
        setJobs((prev) =>
          prev.map((j) =>
            j.id === job.id
              ? {
                  ...j,
                  status: failed ? "failed" : "completed",
                  finishedAt: Date.now(),
                  durationMs: Date.now() - (j.startedAt ?? Date.now()),
                }
              : j
          )
        );
      }, runTime);
    }, scheduleDelay);
  }, []);

  const tickRef = useRef(null);
  useEffect(() => {
    tickRef.current = setInterval(() => {
      setJobs((prev) =>
        prev.map((j) =>
          j.status === "running" && j.startedAt
            ? { ...j, durationMs: Date.now() - j.startedAt }
            : j
        )
      );
    }, 300);
    return () => clearInterval(tickRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <StatsOverview stats={stats} />
        <div id="submit">
          <JobSubmit onSubmit={handleSubmit} />
        </div>
        <JobsTable jobs={jobs} />

        <section className="text-xs text-slate-500">
          Connect this UI to your backend with:
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>POST /jobs to enqueue</li>
            <li>GET /jobs and GET /stats to fetch</li>
            <li>WebSocket /ws for real-time updates</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
