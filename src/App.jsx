import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import JobSubmit from "./components/JobSubmit";
import StatsOverview from "./components/StatsOverview";
import JobsTable from "./components/JobsTable";

function simulateWorkerAssignment(priority) {
  const workers = ["alpha", "bravo", "charlie", "delta", "echo"];
  // Higher priority tends to pick faster workers
  const index = Math.max(0, Math.min(workers.length - 1, Math.floor((priority - 1) / 2)));
  return workers[index + Math.floor(Math.random() * (workers.length - index))] || "alpha";
}

export default function App() {
  const [jobs, setJobs] = useState([]);

  // Derived live stats
  const stats = useMemo(() => {
    return jobs.reduce(
      (acc, j) => {
        acc[j.status] = (acc[j.status] || 0) + 1;
        return acc;
      },
      { queued: 0, running: 0, completed: 0, failed: 0 }
    );
  }, [jobs]);

  // Handle job submission: push to queue and simulate lifecycle
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

    // Simulate scheduling delay based on priority
    const scheduleDelay = Math.max(200, 1200 - job.priority * 100);

    setTimeout(() => {
      const worker = simulateWorkerAssignment(job.priority);
      setJobs((prev) =>
        prev.map((j) =>
          j.id === job.id ? { ...j, status: "running", startedAt: Date.now(), worker } : j
        )
      );

      // Simulate execution time and potential failure
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

  // Update live durations for running jobs
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <StatsOverview stats={stats} />
        <JobSubmit onSubmit={handleSubmit} />
        <JobsTable jobs={jobs} />

        <section className="text-xs text-slate-500">
          This UI demonstrates the control plane for a distributed scheduler with priority
          queueing, live state, and historical visibility. Connect it to your FastAPI + Redis +
          MongoDB backend to power real workloads.
        </section>
      </main>
    </div>
  );
}
