import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const CONTACT_EMAIL = 'contact@kuboji-lab.com'

const legalPages = {
  'specified-commercial-transactions': {
    eyebrow: 'Legal',
    title: '特定商取引法に基づく表記',
    lead: 'Frequency Memoryの販売・提供に関する表示です。',
    sections: [
      {
        heading: '販売者名',
        body: ['久保木 良之（屋号：久保寺 承太郎）']
      },
      {
        heading: '運営サイト',
        body: ['kuboji-lab.com']
      },
      {
        heading: 'サービス名',
        body: ['Frequency Memory']
      },
      {
        heading: '販売価格',
        body: ['商品価格一覧ページに記載しています。']
      },
      {
        heading: '商品代金以外の必要料金',
        body: ['インターネット接続料金、通信料金等はお客様の負担となります。']
      },
      {
        heading: '支払方法',
        body: ['クレジットカード決済', '決済方法は導入状況により変更される場合があります。']
      },
      {
        heading: 'サービス提供時期',
        body: ['決済完了後、各商品ページまたはサービス画面の案内に従って提供します。']
      },
      {
        heading: '返品・キャンセル',
        body: [
          'デジタルサービスの性質上、決済完了後のお客様都合による返金・キャンセルは原則としてお受けできません。',
          'ただし、当方の不具合によりサービスが提供されなかった場合は、個別に確認のうえ対応します。'
        ]
      },
      {
        heading: '表現および商品に関する注意',
        body: [
          '本サービスは占術・内省支援を目的としたサービスであり、医療・法律・投資等の専門判断の代替ではありません。',
          '鑑定結果や将来の出来事を保証するものではありません。'
        ]
      },
      {
        heading: '問い合わせ先',
        body: [CONTACT_EMAIL]
      }
    ]
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'プライバシーポリシー',
    lead: 'kuboji-lab.comおよびFrequency Memoryにおける個人情報の取り扱いについて定めます。',
    sections: [
      {
        heading: '取得する情報',
        body: [
          'メールアドレス',
          '決済に必要な情報',
          'サービス利用履歴',
          '問い合わせ内容',
          '鑑定または対話に入力された相談内容'
        ]
      },
      {
        heading: '利用目的',
        body: [
          'サービス提供',
          '本人確認',
          '決済管理',
          '問い合わせ対応',
          '不正利用防止',
          'サービス改善'
        ]
      },
      {
        heading: '第三者提供',
        body: ['法令に基づく場合を除き、本人の同意なく第三者へ提供しません。']
      },
      {
        heading: '外部サービス',
        body: ['決済、認証、データ管理等に外部サービスを利用する場合があります。']
      },
      {
        heading: '安全管理',
        body: ['取得した情報は適切に管理します。']
      },
      {
        heading: '問い合わせ窓口',
        body: [CONTACT_EMAIL]
      }
    ]
  },
  'terms-refund': {
    eyebrow: 'Terms',
    title: '利用規約・返金/キャンセル規定',
    lead: 'Frequency Memoryの利用条件および返金・キャンセルに関する規定です。',
    sections: [
      {
        heading: 'サービス内容',
        body: ['Frequency Memoryは、六感覚占術タロット × AI対話による占術・内省支援サービスです。']
      },
      {
        heading: '専門判断について',
        body: ['本サービスは、医療・法律・投資判断の代替ではありません。']
      },
      {
        heading: '結果の保証について',
        body: ['鑑定結果や未来の出来事を保証するものではありません。']
      },
      {
        heading: '利用者の責任',
        body: ['ユーザーは、提供内容を参考情報として受け取り、自己責任で利用するものとします。']
      },
      {
        heading: '禁止事項',
        body: ['他者を傷つける内容、不正利用、システム妨害、その他運営が不適切と判断する行為を禁止します。']
      },
      {
        heading: '返金・キャンセル',
        body: [
          '決済完了後の返金は原則としてお受けできません。',
          'サービス未提供など運営側の不具合がある場合は、個別に確認のうえ対応します。'
        ]
      },
      {
        heading: '内容変更',
        body: ['仕様・価格・提供内容は必要に応じて変更される場合があります。']
      }
    ]
  },
  disclaimer: {
    eyebrow: 'Disclaimer',
    title: '免責事項',
    lead: 'Frequency Memoryおよび個別鑑定のご利用にあたっての注意事項です。',
    sections: [
      {
        heading: 'サービスの位置づけ',
        body: ['Frequency Memoryおよび個別鑑定は、占術・内省・自己理解を目的としたサービスです。']
      },
      {
        heading: '専門判断について',
        body: ['提供される内容は、医療、法律、投資、その他専門的判断の代替ではありません。']
      },
      {
        heading: '結果について',
        body: ['鑑定結果や将来の出来事、特定の成果を保証するものではありません。']
      },
      {
        heading: '最終判断について',
        body: ['利用者は、提供内容を参考情報として受け取り、最終的な判断はご自身の責任で行うものとします。']
      }
    ]
  },
  pricing: {
    eyebrow: 'Pricing',
    title: '商品価格一覧',
    lead: 'fincode申請前時点で掲載する有料商品の価格一覧です。',
    sections: [
      {
        heading: 'FM Standard',
        body: ['Standard（1回）：150円', 'Standard 3回券：400円', 'Standard 5回券：600円', '初回限定Standard：75円']
      },
      {
        heading: 'FM Deep Session',
        body: ['Deep Session（1回）：300円', 'Deep 3回券：800円', 'Deep 5回券：1,200円']
      },
      {
        heading: '個別鑑定',
        body: ['個別鑑定①：3,800円', '個別鑑定②：8,000円']
      }
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'お問い合わせ',
    lead: 'サービスに関するお問い合わせは、以下のメールアドレスまでお願いいたします。',
    sections: [
      {
        heading: 'メール',
        body: [CONTACT_EMAIL]
      }
    ]
  }
}

function LegalSection({ heading, body }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5">
      <h2 className="text-base font-semibold text-kuboji-ink">{heading}</h2>
      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
        {body.map((line) => (
          line === CONTACT_EMAIL ? (
            <p key={line}>
              <a className="font-semibold text-kuboji-navy underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
          ) : (
            <p key={line}>{line}</p>
          )
        ))}
      </div>
    </section>
  )
}

export default function LegalPage({ slug }) {
  const page = legalPages[slug] || legalPages['specified-commercial-transactions']

  return (
    <div className="min-h-screen overflow-hidden bg-kuboji-mist text-kuboji-ink">
      <Header />

      <main className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <a className="text-sm font-semibold text-kuboji-navy underline underline-offset-4" href="/">
            トップへ戻る
          </a>

          <div className="mt-8 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-kuboji-gold" translate="no">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-kuboji-ink sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              {page.lead}
            </p>

            <div className="mt-8 grid gap-4">
              {page.sections.map((section) => (
                <LegalSection key={section.heading} {...section} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
