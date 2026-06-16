import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="privacy" className="bg-navy-950 py-10 text-white">
      <div className="container-page flex flex-col items-center gap-4 text-center">
        <div className="text-xl">
          <Logo light />
        </div>
        <a
          href="#privacy"
          className="text-xs font-medium text-navy-300 underline underline-offset-4 hover:text-gold"
        >
          個人情報取扱方針
        </a>
        <p className="text-[11px] text-navy-400">
          © ASSIGN Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
