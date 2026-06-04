import Footer from '../components/Footer.jsx'

const CONTACT_EMAIL = 'contact@kuboji-lab.com'

const legalPages = {
  'specified-commercial-transactions': {
    eyebrow: 'Legal',
    title: '特定商取引法に基づく表記',
    lead: 'Shift Assist OSの販売・提供に関する表示です。',
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
        body: ['Shift Assist OS']
      },
      {
        heading: '販売価格',
        body: ['料金一覧ページに記載しています。']
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
        body: ['決済完了後、各サービス画面または当方の案内に従って提供します。']
      },
      {
        heading: '返品・キャンセル',
        body: [
          'デジタルサービスの性質上、決済完了後のお客様都合による返金・キャンセルは原則としてお受けできません。',
          'ただし、当方の不具合によりサービスが提供されなかった場合は、個別に確認のうえ対応します。'
        ]
      },
      {
        heading: 'サービスに関する注意',
        body: [
          '本サービスは勤務表作成を支援する業務効率化ツールです。',
          '各事業所に適用される法令、就業規則、労務管理上の最終確認は利用者または所属組織の責任で行うものとします。'
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
    lead: 'kuboji-lab.comおよびShift Assist OSにおける個人情報等の取り扱いについて定めます。',
    sections: [
      {
        heading: '取得する情報',
        body: [
          'メールアドレス',
          '決済に必要な情報',
          'サービス利用履歴',
          '問い合わせ内容',
          'サービス利用時に入力された設定情報'
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
        heading: 'スタッフ氏名等の取り扱い',
        body: ['サービス設計上、スタッフの氏名をサーバーに保存しない運用を前提とします。必要な表示は利用者端末内で管理します。']
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
    lead: 'Shift Assist OSの利用条件および返金・キャンセルに関する規定です。',
    sections: [
      {
        heading: 'サービス内容',
        body: ['Shift Assist OSは、勤務表作成を支援する業務効率化サービスです。']
      },
      {
        heading: '利用上の確認事項',
        body: ['本サービスが生成する勤務表は業務支援のための案であり、最終確認と運用判断は利用者または所属組織が行うものとします。']
      },
      {
        heading: '禁止事項',
        body: ['不正利用、システム妨害、第三者の権利を侵害する行為、その他運営が不適切と判断する行為を禁止します。']
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
    lead: 'Shift Assist OSのご利用にあたっての注意事項です。',
    sections: [
      {
        heading: 'サービスの位置づけ',
        body: ['本サービスは勤務表作成を支援する業務効率化ツールです。']
      },
      {
        heading: '最終確認について',
        body: ['生成された勤務表は、配置基準、就業規則、雇用契約、労務管理上の条件等を利用者側で確認したうえで運用してください。']
      },
      {
        heading: '専門判断について',
        body: ['本サービスは、法律、労務、医療、会計その他専門的判断の代替ではありません。']
      },
      {
        heading: '成果について',
        body: ['導入による特定の成果、業務削減時間、収益改善等を保証するものではありません。']
      }
    ]
  },
  pricing: {
    eyebrow: 'Pricing',
    title: '料金一覧',
    lead: 'Shift Assist OSの料金一覧です。',
    sections: [
      {
        heading: '無料トライアル',
        body: ['14日間：全機能をお試しいただけます。']
      },
      {
        heading: '個人プラン',
        body: ['月額 1,200円：お一人・1病棟から。']
      },
      {
        heading: '病棟プラン',
        body: ['月額 4,800円：1病棟・複数名で利用できます。']
      },
      {
        heading: '病院プラン',
        body: ['月額 29,800円：全病棟、管理ダッシュボード、優先サポートに対応します。']
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
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-950">{heading}</h2>
      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
        {body.map((line) => (
          line === CONTACT_EMAIL ? (
            <p key={line}>
              <a className="font-semibold text-blue-700 underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
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
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a className="text-sm font-semibold text-slate-950" href="/">
            Shift Assist OS
          </a>
          <a className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700" href="/">
            トップへ戻る
          </a>
        </div>
      </header>

      <main className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700" translate="no">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
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
