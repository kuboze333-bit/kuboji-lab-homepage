export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-[0.14em] text-kuboji-ink">
              久保寺 承太郎
            </div>
            <div className="mt-2 text-xs text-slate-500">
              kuboji-lab.com
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-500">
            <span>特定商取引法に基づく表記：準備中</span>
            <span>プライバシーポリシー：準備中</span>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          © 2026 久保寺 承太郎. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
