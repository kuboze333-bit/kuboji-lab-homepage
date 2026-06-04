const legalLinks = [
  { label: 'トップ', href: '/#/' },
  { label: 'Shift Assist OS', href: '/#/shift-assist' },
  { label: '特定商取引法に基づく表記', href: '/#/legal/specified-commercial-transactions' },
  { label: 'プライバシーポリシー', href: '/#/legal/privacy' },
  { label: '利用規約・返金/キャンセル規定', href: '/#/legal/terms-refund' },
  { label: '免責事項', href: '/#/legal/disclaimer' },
  { label: '料金一覧', href: '/#/legal/pricing' },
  { label: 'お問い合わせ', href: '/#/legal/contact' }
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-600 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-semibold text-slate-900">久保寺 承太郎</div>
          <div className="mt-2" translate="no">kuboji-lab.com</div>
          <div className="mt-2">© 2026 久保寺 承太郎</div>
          <a className="mt-3 inline-block font-medium text-blue-700 transition hover:text-blue-900" href="mailto:contact@kuboji-lab.com">
            contact@kuboji-lab.com
          </a>
        </div>

        <nav className="grid gap-2 sm:grid-cols-2 md:text-right" aria-label="サイト情報・法務・お問い合わせ">
          {legalLinks.map((link) => (
            <a key={link.href} className="transition hover:text-blue-800" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
