import { Rocket, Shield, Star, Zap } from 'lucide-react'

const features = [
  {
    title: 'Blazing Fast',
    description:
      'Optimized build pipeline and smart caching so you can ship at the speed of thought.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Beautiful by Default',
    description:
      'Thoughtful design system with polished components, typography, and spacing.',
    icon: Star,
    color: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Secure Foundations',
    description:
      'Best practices baked in. Accessibility, security, and performance out of the box.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'AI-Ready',
    description:
      'Built to integrate with intelligent agents and workflows that amplify your work.',
    icon: Rocket,
    color: 'from-sky-500 to-blue-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything you need to move fast
          </h2>
          <p className="mt-3 text-slate-600">
            Powerful primitives and delightful details help you deliver polished products without the busywork.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon, color }) => (
            <div
              key={title}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white shadow`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
