import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProfileSection from '../components/ProfileSection.jsx'

const services = [
  {
    name: 'Frequency Memory',
    status: '利用可能',
    accent: 'navy',
    href: 'https://frequency-memory-web.pages.dev',
    description: '六感覚占術タロット × AI対話で、今の流れをそっと読み解く場所。'
  },
  {
    name: '個別鑑定',
    status: '利用可能',
    accent: 'green',
    href: 'https://frequency-memory-web.pages.dev/#personal-reading',
    description: '久保寺 承太郎が直接カードを引き、相談内容に合わせて丁寧に読みます。'
  },
  {
    name: '周波数調整 整体セラピー',
    status: '準備中',
    accent: 'muted',
    href: null,
    description: '身体と感覚の調整を扱うサービスです。詳細は決まり次第ご案内します。'
  },
  {
    name: 'カウンセリング',
    status: '準備中',
    accent: 'muted',
    href: null,
    description: '心の整理と対話のためのサービスです。詳細は決まり次第ご案内します。'
  },
  {
    name: '業務改善サービス',
    status: '準備中',
    accent: 'muted',
    href: null,
    description: '勤務表作成補助アプリなど、現場の負担を軽くする仕組みを準備中です。'
  }
]

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-kuboji-mist text-kuboji-ink">
      <Header />

      <main>
        <section className="relative">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[-80px] h-[340px] w-[340px] rounded-full bg-kuboji-gold/12 blur-3xl" />
            <div className="absolute right-[-160px] top-[140px] h-[420px] w-[420px] rounded-full bg-kuboji-green/12 blur-3xl" />
            <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-kuboji-navy/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-kuboji-gold">
                  kuboji-lab.com
                </p>
                <h1 className="mt-5 text-[2.45rem] font-semibold leading-[1.18] tracking-[-0.03em] text-kuboji-ink sm:text-6xl">
                  周波数で、世界の揺らぎを整える。
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  久保寺 承太郎が提供するサービスの案内です。Frequency Memory、個別鑑定、今後展開するケア領域・業務改善サービスをここに集約していきます。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#services"
                    className="rounded-2xl bg-kuboji-ink px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-kuboji-navy"
                  >
                    サービスを見る
                  </a>
                  <a
                    href="#profile"
                    className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-center text-sm font-semibold text-kuboji-ink transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    プロフィールへ
                  </a>
                </div>
              </div>

              <div className="rounded-[2.25rem] border border-white/80 bg-white/60 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.10)] backdrop-blur-md">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-kuboji-navy via-kuboji-green to-kuboji-gold p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                    Portfolio Hub
                  </p>
                  <div className="mt-16 text-3xl font-semibold leading-tight">
                    久保寺 承太郎
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/78">
                    占術対話、個別鑑定、ケア領域、業務改善サービスをつなぐ入口。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 px-5 py-10 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-kuboji-gold">
                Services
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-kuboji-ink sm:text-3xl">
                サービス一覧
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                現在利用できるサービスと、準備中のサービスをまとめています。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
          <ProfileSection />
        </div>

        <section id="links" className="scroll-mt-24 px-5 py-10 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-kuboji-gold">
              Links
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-kuboji-ink sm:text-3xl">
              お知らせ / note / SNS
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
                <div className="font-semibold text-kuboji-ink">note</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">ラブジオメトリー等へのリンクを後で設定します。</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
                <div className="font-semibold text-kuboji-ink">X / Instagram</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">SNSリンクは確認後に設定します。</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5">
                <div className="font-semibold text-kuboji-ink">お知らせ</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">公開後の更新情報を掲載します。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 py-10 pb-16 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/80 bg-kuboji-ink p-6 text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-kuboji-gold">
              Contact
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              お問い合わせ
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/78">
              公式LINE・メール問い合わせは準備中です。公開前に連絡先を確認して設定します。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
