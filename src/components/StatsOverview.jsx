import { Activity, CheckCircle2, Clock, XCircle } from "lucide-react";

export default function StatsOverview({ stats }) {
  const cards = [
    {
      label: "Queued",
      value: stats.queued,
      icon: Clock,
      bg: "bg-amber-50",
      ring: "ring-amber-200",
      dot: "bg-amber-500",
    },
    {
      label: "Running",
      value: stats.running,
      icon: Activity,
      bg: "bg-blue-50",
      ring: "ring-blue-200",
      dot: "bg-blue-500",
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      bg: "bg-emerald-50",
      ring: "ring-emerald-200",
      dot: "bg-emerald-500",
    },
    {
      label: "Failed",
      value: stats.failed,
      icon: XCircle,
      bg: "bg-rose-50",
      ring: "ring-rose-200",
      dot: "bg-rose-500",
    },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map(({ label, value, icon: Icon, bg, ring, dot }) => (
        <div
          key={label}
          className={`rounded-2xl border border-slate-200 p-4 sm:p-5 ${bg} ring-1 ${ring}`}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">{label}</div>
            <div className="h-8 w-8 rounded-xl bg-white grid place-items-center border border-slate-200">
              <Icon className="h-4 w-4 text-slate-600" />
            </div>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div className="text-2xl font-semibold tabular-nums">{value}</div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className={`h-2 w-2 rounded-full ${dot}`} />
              live
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
