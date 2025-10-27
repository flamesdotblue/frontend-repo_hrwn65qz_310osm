import { BadgeCheck, Clock, Play, XCircle } from "lucide-react";

const StatusBadge = ({ status }) => {
  const map = {
    queued: {
      class: "bg-amber-50 text-amber-700 border-amber-200",
      icon: Clock,
      label: "Queued",
    },
    running: {
      class: "bg-blue-50 text-blue-700 border-blue-200",
      icon: Play,
      label: "Running",
    },
    completed: {
      class: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: BadgeCheck,
      label: "Completed",
    },
    failed: {
      class: "bg-rose-50 text-rose-700 border-rose-200",
      icon: XCircle,
      label: "Failed",
    },
  };
  const cfg = map[status] || map.queued;
  const Icon = cfg.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs border ${cfg.class}`}>
      <Icon className="h-3.5 w-3.5" /> {cfg.label}
    </span>
  );
};

export default function JobsTable({ jobs }) {
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold tracking-tight">Recent Jobs</h2>
        <div className="text-xs text-slate-500">Simulated lifecycle for demo purposes</div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2 pr-4">Job</th>
              <th className="py-2 pr-4">Priority</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Duration</th>
              <th className="py-2 pr-4">Worker</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {jobs.length === 0 ? (
              <tr>
                <td className="py-6 text-slate-500" colSpan={5}>
                  No jobs yet. Submit one to see the lifecycle.
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50/60">
                  <td className="py-3 pr-4">
                    <div className="font-medium text-slate-800">{job.name}</div>
                    <div className="text-xs text-slate-500 font-mono">{job.id.slice(0, 8)}</div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="inline-flex items-center gap-2 text-xs">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          job.priority <= 2
                            ? "bg-red-500"
                            : job.priority <= 6
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                      />
                      {job.priority}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <StatusBadge status={job.status} />
                  </td>
                  <td className="py-3 pr-4 tabular-nums">
                    {job.durationMs != null ? `${(job.durationMs / 1000).toFixed(1)}s` : "—"}
                  </td>
                  <td className="py-3 pr-4 text-slate-600">
                    {job.worker || "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
