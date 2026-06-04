import Footer from '../components/Footer.jsx'
import ProfileSection from '../components/ProfileSection.jsx'

const CONTACT_EMAIL = 'contact@kuboji-lab.com'

const problems = [
  '電子カルテへの手入力が非効率で、毎月まとまった時間が奪われている',
  '夜勤リーダー・新人配置など、守るべきルールが多くて気を抜けない',
  '公休・有給の消化管理が煩雑で、抜け漏れが怖い',
  '特定スタッフに希望が偏り、調整に毎回悩まされる',
  '退職・異動・新規加入のたびに、組み直しが大変'
]

const wardTypes = [
  '精神病棟入院基本料の病棟（15対1・18対1・20対1）—— 看護配置に加え、月平均夜勤72時間への対応を予定',
  '精神科救急・急性期・療養・認知症治療などの病棟 —— 常時配置の基準への対応を予定'
]

const steps = [
  {
    title: '登録する',
    text: '導入時には、スタッフと守りたい条件を登録します。話しかけて伝える流れも確認いただける予定です。'
  },
  {
    title: '生成する',
    text: '設定した条件をもとに、勤務表生成の流れと出力イメージを確認できる設計を予定しています。'
  },
  {
    title: '確定する',
    text: '画面で確認して微調整し、確定。そのまま出力できる導線を予定しています。'
  }
]

const plans = [
  {
    name: '無料トライアル',
    price: '予定：14日間',
    detail: '受付準備中 / 全機能のお試しを予定'
  },
  {
    name: '個人プラン',
    price: '予定：月額 1,200円',
    detail: 'お一人・1病棟から'
  },
  {
    name: '病棟プラン',
    price: '予定：月額 4,800円',
    detail: '1病棟・複数名 / すべての機能'
  },
  {
    name: '病院プラン',
    price: '予定：月額 29,800円',
    detail: '全病棟・管理ダッシュボード・優先サポート'
  }
]

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a className="text-sm font-semibold tracking-tight text-slate-950" href="/#/shift-assist">
          Shift Assist OS
        </a>
        <nav className="hidden items-center gap-5 text-xs font-semibold text-slate-600 sm:flex" aria-label="ページ内メニュー">
          <a className="transition hover:text-blue-700" href="#features">特徴</a>
          <a className="transition hover:text-blue-700" href="#pricing">料金</a>
          <a className="transition hover:text-blue-700" href="#contact">お問い合わせ</a>
        </nav>
        <a className="rounded-full bg-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-800" href="#contact">
          相談する
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

function PreparationNotice({ compact = false }) {
  return (
    <div className={`rounded-2xl border border-blue-200 bg-blue-50 ${compact ? 'p-4' : 'p-5'} text-blue-950`}>
      <p className="text-sm font-semibold">現在、無料トライアルは準備中です</p>
      <p className="mt-2 text-sm leading-7 text-blue-900/80">
        Shift Assist OS は現在開発中です。導入希望・事前相談はお問い合わせよりご連絡ください。
      </p>
    </div>
  )
}

export default function ShiftAssistPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(22,163,74,0.10),transparent_36%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <PreparationNotice />
              <div className="mt-8">
                <SectionLabel>Business Efficiency SaaS</SectionLabel>
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-6xl">
                勤務表作成を、もう一人で抱えない。
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-slate-800 sm:text-2xl">
                話しかけるだけで、勤務表が完成する。
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                精神科病棟の勤務表づくりは、毎月くり返される静かな重労働です。夜勤のリーダー配置、新人の組み合わせ、希望休の調整、公休と有給の消化、そして配置基準。頭の中で何枚もの条件を同時に並べながら、電子カルテのカレンダーに一マスずつ手で入力していく——その作業に、月に数時間から十数時間が消えていきます。
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                <strong className="font-semibold text-slate-950">Shift Assist OS は、その時間を取り戻すためのツールです。</strong>「夜勤は月5回まで」「山田さんは新人だから一人にしない」——ふだんの言葉で条件を伝えるだけ。あとはシステムが、すべての制約を満たした勤務表を組み上げる流れを予定しています。師長の仕事は、確認して微調整するだけになる設計です。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="rounded-2xl bg-blue-700 px-6 py-4 text-center text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800" href="#contact">
                  導入について問い合わせる
                </a>
                <a className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-700" href="#contact">
                  お問い合わせ
                </a>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                無料トライアルの受付は準備中です。導入のご相談はお問い合わせください。
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-slate-300">
                  <span>Shift Assist OS</span>
                  <span>Schedule Preview</span>
                </div>
                <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs text-slate-300">
                  {['月', '火', '水', '木', '金', '土', '日'].map((day) => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-7 gap-2">
                  {Array.from({ length: 28 }).map((_, index) => (
                    <div key={index} className={`h-10 rounded-lg ${index % 5 === 0 ? 'bg-green-400/80' : index % 4 === 0 ? 'bg-blue-400/80' : 'bg-white/10'}`} />
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-white/10 p-4 text-sm leading-7 text-slate-100">
                  条件チェック：夜勤回数、リーダー配置、新人組み合わせ、公休・有給の確認機能を予定。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Problems</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              こんな悩みを、まるごと引き受けます
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {problems.map((problem) => (
                <div key={problem} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm">
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionLabel>Accuracy</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                なぜ「正確」だと言い切れるのか
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                シフト作成は、実は数学的にとても難しい問題です。だからこそ Shift Assist OS は、AI と専用の計算エンジンを役割分担させる設計です。
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <h3 className="font-semibold text-blue-950">AIは、あなたの言葉を理解する「受付」</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">日本語の条件を、システムが扱えるルールに翻訳します。</p>
                </div>
                <div className="rounded-2xl bg-green-50 p-5">
                  <h3 className="font-semibold text-green-950">計算エンジンは、最適な組み合わせを導く「頭脳」</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">すべての制約を満たす組み合わせを数学的に導き出す設計です。</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                この仕組みにより、「一見正しそうに見えるけれど、実は夜勤回数が超過している」といったもっともらしい間違いを避け、守るべき配置を確認できる導線を予定しています。
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionLabel>Field Knowledge</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                精神科の現場を、知っているからつくれる
              </h2>
              <h3 className="mt-6 text-lg font-semibold text-slate-950">病棟タイプを選ぶだけで、配置基準に対応</h3>
              <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                精神科の病棟は、算定する診療報酬によって配置基準の考え方が変わります。Shift Assist OS は病棟タイプを選ぶだけで、その病棟に必要な基準だけを自動で適用できる設計を予定しています。
              </p>
              <div className="mt-5 grid gap-3">
                {wardTypes.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                基準のプリセットは追加費用なしで利用でき、診療報酬の改定にも追従できる設計を目指しています。
              </p>
              <h3 className="mt-7 text-lg font-semibold text-slate-950">働き方の変化にも、設定ひとつで</h3>
              <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                連続勤務の上限や勤務間インターバルなど、これからの労働環境で求められる配慮にも対応できる設計です。法令の変化が来ても、設定変更で対応しやすい仕組みを予定しています。
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionLabel>Privacy by Design</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              個人情報を、預からないという安心
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Shift Assist OS は、スタッフの氏名をサーバーに保存しない設計を予定しています。管理は番号と役割（リーダー可・新人など）だけで行い、お名前の表示が必要な場合も、それはお使いの端末の中だけで完結する形を想定しています。
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              「職員の名前を外部に預けるのは不安」——その声に、設計そのものでお応えします。患者情報も一切扱いません。
            </p>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              使い方は、3ステップ
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              複雑な設定画面と格闘しなくても使えるように、導入時に確認しやすい画面設計を予定しています。
            </p>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              料金
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              以下は公開予定の価格案です。無料トライアルの受付は現在準備中です。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => (
                <div key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{plan.name}</h3>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-blue-700">{plan.price}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{plan.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-slate-100 p-5 text-sm leading-8 text-slate-700">
              価格・提供内容は正式公開時に変更される場合があります。導入前の条件確認はお問い合わせください。
            </p>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/70 sm:p-10">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              現在、無料トライアルは準備中です
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
              勤務表に費やしていた時間を、患者さんとスタッフのために使う時間へ。Shift Assist OS は、その最初の一歩を支えるために開発を進めています。
            </p>
            <PreparationNotice compact />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-2xl bg-blue-600 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-blue-300/40 transition hover:-translate-y-0.5 hover:bg-blue-500" href="#contact">
                導入について問い合わせる
              </a>
              <a className="rounded-2xl border border-white/30 px-6 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10" href="#contact">
                お問い合わせ
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              無料トライアルの受付は準備中です。導入のご相談はお問い合わせください。
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
          <ProfileSection />
        </div>

        <section id="contact" className="scroll-mt-24 px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              お問い合わせ
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              現在、無料トライアル受付の準備中です。導入希望・事前相談は以下のメールアドレスまでお願いいたします。
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-flex rounded-2xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-100"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
