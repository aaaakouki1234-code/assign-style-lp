const GROUPS: { title: string; note: string; items: string[] }[] = [
  {
    title: "ナショナルクライアント",
    note: "誰もが知る大手・優良企業",
    items: ["大手総合商社", "電機メーカー", "通信インフラ", "総合金融", "大手不動産", "グローバル製造"],
  },
  {
    title: "上場企業・メガベンチャー",
    note: "成長市場をリードする企業",
    items: ["ITメガベンチャー", "SaaS上場企業", "Web／広告", "ゲーム／エンタメ", "ECプラットフォーム", "人材／HR Tech"],
  },
  {
    title: "急成長スタートアップ",
    note: "次代をつくる注目企業",
    items: ["AIスタートアップ", "FinTech", "DX支援", "ヘルステック", "シリーズB／C", "ユニコーン候補"],
  },
];

function Chip({ label }: { label: string }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-lg border border-navy-100 bg-white px-2 text-center text-xs font-bold text-navy-600 shadow-sm">
      {label}
    </div>
  );
}

export function Companies() {
  return (
    <section className="bg-mist py-14 sm:py-20">
      <div className="container-page">
        <div className="text-center">
          <p className="eyebrow justify-center">OUR CLIENTS</p>
          <h2 className="heading mt-3">ご紹介企業例</h2>
          <p className="mt-3 text-sm font-medium text-navy-500 sm:text-base">
            ナショナルクライアントからベンチャーまで
          </p>
          <p className="mx-auto mt-4 max-w-xl font-serif text-lg font-bold leading-relaxed text-navy-900 sm:text-2xl">
            <span className="text-gold-deep">1200社以上</span>から
            <br className="sm:hidden" />
            キャリアプランに合わせてご紹介
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-bold text-gold">
                  {group.title}
                </span>
                <span className="text-xs font-medium text-navy-400">
                  {group.note}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
                {group.items.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-navy-400">
          ※ 掲載はカテゴリのイメージです。実際のご紹介企業は面談時にご案内します。
        </p>
      </div>
    </section>
  );
}
