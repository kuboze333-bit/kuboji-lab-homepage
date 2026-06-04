export default function ProfileSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700" translate="no">
              About
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950 sm:text-3xl">
              kuboji-lab.comについて
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              kuboji-lab.comは、現場の定型業務を軽くするための業務支援ツールを案内するサイトです。
            </p>
            <p>
              現在は、勤務表作成の負担を減らすためのShift Assist OSを中心に準備しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
