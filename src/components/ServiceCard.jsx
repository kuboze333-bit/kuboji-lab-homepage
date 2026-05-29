export default function ServiceCard({ name, description, status, href, accent = 'navy' }) {
  const isReady = status === '利用可能'

  const accentClass = {
    navy: 'border-kuboji-navy/20 bg-kuboji-navy text-white',
    green: 'border-kuboji-green/20 bg-kuboji-green text-white',
    gold: 'border-kuboji-gold/30 bg-kuboji-gold text-white',
    muted: 'border-slate-200 bg-slate-100 text-slate-500'
  }[accent]

  return (
    <article className="flex min-h-[240px] flex-col rounded-[1.75rem] border border-white/80 bg-white/78 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${isReady ? accentClass : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
          {status}
        </span>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-inner" />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-[0.03em] text-kuboji-ink">
        {name}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
        {description}
      </p>

      {isReady && href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-kuboji-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-kuboji-navy"
        >
          開く
        </a>
      ) : (
        <div className="mt-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-400">
          準備中
        </div>
      )}
    </article>
  )
}
