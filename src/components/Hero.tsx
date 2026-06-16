import { Award } from "./Award";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-px gold-line" />
      <div className="container-page relative py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-narrow text-center">
          <p className="eyebrow justify-center text-gold">
            ASSIGN CAREER AGENT
          </p>
          <h1 className="mt-4 font-serif text-3xl font-black leading-[1.3] tracking-tight sm:text-4xl lg:text-5xl">
            若手ハイエンドの
            <br className="sm:hidden" />
            <span className="text-gold">転職エージェント</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-navy-200 sm:text-base">
            ナショナルクライアントからメガベンチャー、急成長スタートアップまで。
            <br className="hidden sm:block" />
            あなたのキャリアプランに合わせて、最適な一社をご提案します。
          </p>

          <div className="mt-8 flex items-start justify-center gap-4 sm:gap-10">
            <Award top="ハイクラス転職" main="20代・30代の支持率" />
            <Award top="キャリア相談" main="満足度の高いサービス" />
            <Award top="提案力" main="若手ハイエンド領域" />
          </div>

          <div className="mt-9 flex flex-col items-center gap-3">
            <a href="#form" className="btn-primary text-lg">
              無料でキャリア相談に申込む
            </a>
            <span className="text-xs text-navy-300">
              簡単60秒 / 登録・相談はすべて無料
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
