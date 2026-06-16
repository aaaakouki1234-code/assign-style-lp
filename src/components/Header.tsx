import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/60 bg-paper/90 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between sm:h-16">
        <a href="#top" className="text-lg sm:text-xl" aria-label="ASSIGN">
          <Logo />
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-bold text-navy-500 sm:inline">
            若手ハイエンドの転職エージェント
          </span>
          <a href="#form" className="btn-nav">
            無料相談
          </a>
        </div>
      </div>
    </header>
  );
}
