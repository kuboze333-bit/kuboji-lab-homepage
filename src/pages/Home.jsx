import Footer from '../components/Footer.jsx'
import ProfileSection from '../components/ProfileSection.jsx'

const CONTACT_EMAIL = 'contact@kuboji-lab.com'

const serviceCards = [
  {
    title: 'Shift Assist OS',
    label: '勤務表作成支援',
    description: '勤務表作成の負担を減らすための業務支援ツールです。まずは病棟勤務表の自動作成から準備しています。',
    href: '/#/shift-assist',
    button: '詳しく見る'
  }
]

const futureThemes = [
  '勤務表・配置表などの定型作業を軽くするツール',
  '現場のルールを整理し、確認漏れを減らす補助ツール',
  '小規模事業者や管理者向けの業務効率化アプリ'
]

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a className="text-sm font-semibold tracking-tight text-slate-950" href="#top">
          kuboji-lab.com
        </a>
        <nav className="hidden items-center gap-5 text-xs font-semibold text-slate-600 sm:flex" aria-label="ページ内メニュー">
          <a className="transition hover:text-blue-700" href="#services">サービス</a>
          <a className="transition hover:text-blue-700" href="#about">概要</a>
          <a className="transition hover:text-blue-700" href="#contact">お問い合わせ</a>
        </nav>
        <a className="rounded-full bg-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-800" href="#contact">
          お問い合わせ
        </a>
      </div>
    </header>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700" translate="no">
      {children}
    </p>
  )
}

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <main>
        <section className="px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionLabel>Business Efficiency Hub</SectionLabel>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                現場の定型業務を、もっと軽くする。
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                kuboji-lab.comは、勤務表作成をはじめとした現場の定型業務を支援する業務効率化アプリの案内サイトです。
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                まずは、条件の多い勤務表づくりを支援するShift Assist OSから公開準備を進めています。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="rounded-2xl bg-blue-700 px-6 py-4 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800" href="/#/shift-assist">
                  Shift Assist OSを見る
                </a>
                <a className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:border-blue-400 hover:text-blue-700" href="#contact">
                  お問い合わせ
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-5 text-sm text-slate-300">
                  <span>kuboji-lab.com</span>
                  <span>Efficiency Apps</span>
                </div>
                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl bg-blue-600 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">Current</div>
                    <div className="mt-3 text-2xl font-semibold">Shift Assist OS</div>
                    <div className="mt-2 text-sm leading-6 text-blue-50">勤務表作成支援</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Next</div>
                    <div className="mt-3 text-xl font-semibold">業務効率化アプリ群</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">現場の反復作業を支える小さなSaaSを順次準備</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">提供予定サービス</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {serviceCards.map((service) => (
                <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">{service.label}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{service.description}</p>
                  <a className="mt-6 inline-flex rounded-2xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800" href={service.href}>
                    {service.button}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">今後の方向性</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {futureThemes.map((theme) => (
                <div key={theme} className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <ProfileSection />
          </div>
        </div>

        <section id="contact" className="px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">お問い合わせ</h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              サービスに関するお問い合わせは、以下のメールアドレスまでお願いいたします。
            </p>
            <a className="mt-6 inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-blue-400 hover:text-blue-700" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
