import { ConsultForm } from "./ConsultForm";

export function FormSection() {
  return (
    <section id="form" className="relative bg-navy-900 py-14 text-white sm:py-20">
      <div className="bg-grid absolute inset-0" />
      <div className="container-page relative">
        <div className="mx-auto max-w-narrow text-center">
          <p className="eyebrow justify-center text-gold">FREE CAREER COUNSELING</p>
          <h2 className="mt-3 font-serif text-2xl font-black leading-tight sm:text-3xl">
            無料・簡単60秒
            <br className="sm:hidden" />
            キャリア相談
          </h2>
          <p className="mt-3 text-sm text-navy-200">
            いくつかの質問に答えるだけ。あなたに合った求人をご提案します。
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-narrow">
          <ConsultForm />
        </div>
      </div>
    </section>
  );
}
