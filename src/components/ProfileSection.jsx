export default function ProfileSection() {
  return (
    <section id="profile" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-kuboji-gold" translate="no">
              Profile
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-kuboji-ink sm:text-3xl">
              久保寺 承太郎について
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              久保寺 承太郎は、Frequency Memoryをはじめ、六感覚占術タロットと個別鑑定を案内する事業ブランドです。
            </p>
            <p>
              カードを通じて、今の流れや心の反応を静かに読み解くサービスを提供しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
