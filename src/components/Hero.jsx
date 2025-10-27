import Spline from '@splinetool/react-spline';
import { ArrowRight, Server, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[600px] overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 text-white px-3 py-1 text-xs font-medium shadow">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Live Orchestration Dashboard
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Distributed Job Scheduling System
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-700 max-w-2xl">
            Queue, run, and monitor jobs in real time. Priority-aware scheduling, fault tolerance,
            and a delightful developer experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#submit"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-md hover:bg-slate-800"
            >
              Submit a Job
              <ArrowRight size={18} />
            </a>
            <div className="hidden sm:inline-flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur px-4 py-3 text-sm font-medium ring-1 ring-slate-200 shadow">
              <Server size={16} className="text-slate-700" />
              <span className="text-slate-700">FastAPI Backend</span>
              <span className="mx-1 text-slate-400">•</span>
              <Activity size={16} className="text-slate-700" />
              <span className="text-slate-700">WebSocket Live Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
