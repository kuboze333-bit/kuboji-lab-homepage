const navItems = [
  { label: 'サービス', href: '#services' },
  { label: 'プロフィール', href: '#profile' },
  { label: 'お知らせ', href: '#links' },
  { label: 'お問い合わせ', href: '#contact' }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="#top" className="group">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-kuboji-gold">
            kuboji-lab.com
          </div>
          <div className="mt-1 text-base font-semibold tracking-[0.08em] text-kuboji-ink">
            久保寺 承太郎
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-kuboji-navy">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#services"
          className="rounded-full border border-kuboji-navy/20 bg-white px-4 py-2 text-xs font-semibold text-kuboji-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          サービスを見る
        </a>
      </div>
    </header>
  )
}
