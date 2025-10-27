import { useState } from "react";
import { Send, Flag } from "lucide-react";

const priorities = [
  { label: "High", value: 1, color: "bg-red-500" },
  { label: "Medium", value: 5, color: "bg-amber-500" },
  { label: "Low", value: 9, color: "bg-emerald-500" },
];

export default function JobSubmit({ onSubmit }) {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(priorities[1].value);
  const [payload, setPayload] = useState("{\n  \"action\": \"render_video\",\n  \"params\": { \"resolution\": \"1080p\" }\n}");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate JSON
      const parsed = JSON.parse(payload);
      const job = {
        id: crypto.randomUUID(),
        name: name || `Job-${Math.floor(Math.random() * 10000)}`,
        priority: Number(priority),
        payload: parsed,
      };

      onSubmit?.(job);

      setName("");
      setPriority(priorities[1].value);
      setPayload("{\n  \"action\": \"render_video\",\n  \"params\": { \"resolution\": \"1080p\" }\n}");
    } catch (err) {
      alert("Invalid JSON payload. Please fix and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold tracking-tight">Submit a Job</h2>
        <div className="text-xs text-slate-500">Priority queue + retry & failover</div>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-700">Job Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Video Transcode #245"
            className="w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
          />

          <label className="block text-sm font-medium text-slate-700 mt-3">Priority</label>
          <div className="grid grid-cols-3 gap-2">
            {priorities.map((p) => (
              <button
                type="button"
                key={p.value}
                onClick={() => setPriority(p.value)}
                className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
                  Number(priority) === p.value
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} />
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-700">JSON Payload</label>
          <textarea
            rows={6}
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            className="w-full rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 font-mono text-sm"
          />
        </div>

        <div className="md:col-span-2 flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Flag className="h-4 w-4" />
            High priority may preempt low priority jobs
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2.5 shadow hover:bg-indigo-700 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {loading ? "Submitting..." : "Submit Job"}
          </button>
        </div>
      </form>
    </section>
  );
}
