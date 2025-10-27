import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-600/20">
              New • AI-powered workflow
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Build beautiful apps faster with Vibe
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Design, develop, and ship in one seamless flow. Crafted with modern tooling and a delightful developer experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-md hover:bg-slate-800"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-slate-900">10x</p>
                <p className="text-xs text-slate-500">Faster Iteration</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="text-xs text-slate-500">AI Assistance</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">∞</p>
                <p className="text-xs text-slate-500">Creative Flow</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
              <div className="aspect-[4/3] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-indigo-50" />
              <div className="p-6">
                <p className="text-sm text-slate-600">
                  A clean canvas for your next big idea. Bring your product to life with elegant components and smart defaults.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
