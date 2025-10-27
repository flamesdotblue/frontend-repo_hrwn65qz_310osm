import { Rocket, Server, Activity } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white grid place-items-center shadow-lg">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Distributed Job Scheduling System</h1>
            <p className="text-xs text-slate-500">Scalable, fault-tolerant task orchestration</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Server className="h-4 w-4" /> Workers</div>
          <div className="flex items-center gap-2"><Activity className="h-4 w-4" /> Live Metrics</div>
        </nav>
      </div>
    </header>
  );
}
