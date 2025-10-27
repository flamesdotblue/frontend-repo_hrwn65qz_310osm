import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-content-center shadow-lg">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-slate-800">Vibe Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#get-started"
                className="rounded-md px-3 py-2 text-white bg-slate-900 hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
