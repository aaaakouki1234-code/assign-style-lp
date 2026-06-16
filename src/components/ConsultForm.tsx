"use client";

import { useMemo, useState } from "react";

type ChoiceStep = {
  kind: "choice";
  key: string;
  label: string;
  options: string[];
  columns?: number;
};

type InputStep = {
  kind: "input";
  key: string;
  label: string;
  placeholder: string;
  type?: string;
  inputMode?: "text" | "tel" | "email";
};

type Step = ChoiceStep | InputStep;

const GRAD_YEARS: string[] = (() => {
  const years: string[] = [];
  for (let y = 2026; y >= 2010; y--) years.push(`${y}年`);
  years.push("2009年以前");
  return years;
})();

const STEPS: Step[] = [
  {
    kind: "choice",
    key: "companies",
    label: "経験社数を教えてください",
    options: ["1社", "2社", "3社", "4社", "5社以上"],
  },
  {
    kind: "choice",
    key: "job",
    label: "現在の職種を教えてください",
    columns: 2,
    options: [
      "営業",
      "販売／接客",
      "ITエンジニア",
      "コンサル",
      "企画",
      "事務",
      "マーケター",
      "人事",
      "研究開発",
      "不動産専門職",
      "金融専門職",
      "医療／介護",
      "その他",
    ],
  },
  {
    kind: "choice",
    key: "grad",
    label: "卒業年を教えてください",
    columns: 3,
    options: GRAD_YEARS,
  },
  {
    kind: "input",
    key: "school",
    label: "学校名を教えてください",
    placeholder: "例）東京大学",
  },
  {
    kind: "input",
    key: "current",
    label: "現在の勤務先を教えてください",
    placeholder: "例）株式会社○○",
  },
  {
    kind: "input",
    key: "name",
    label: "お名前を教えてください",
    placeholder: "例）山田 太郎",
  },
  {
    kind: "input",
    key: "email",
    label: "メールアドレスを教えてください",
    placeholder: "例）example@mail.com",
    type: "email",
    inputMode: "email",
  },
  {
    kind: "input",
    key: "tel",
    label: "電話番号を教えてください",
    placeholder: "例）09012345678",
    type: "tel",
    inputMode: "tel",
  },
];

export function ConsultForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const total = STEPS.length;
  const current = STEPS[step];
  const progress = useMemo(
    () => Math.round(((done ? total : step) / total) * 100),
    [step, total, done]
  );

  const isLast = step === total - 1;

  function setAnswer(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    if (isLast) {
      setDone(true);
      return;
    }
    setStep((s) => Math.min(s + 1, total - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function choose(key: string, value: string) {
    setAnswer(key, value);
    // auto-advance on choice
    if (!isLast) setStep((s) => Math.min(s + 1, total - 1));
    else setDone(true);
  }

  const currentValue = answers[current.key] ?? "";
  const canProceed =
    current.kind === "input" ? currentValue.trim().length > 0 : true;

  if (done) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card ring-1 ring-navy-100">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-3xl text-gold-deep">
          ✓
        </div>
        <h3 className="mt-4 font-serif text-xl font-bold text-navy-900">
          ご相談ありがとうございます
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-500">
          ご入力いただいた内容を確認のうえ、担当キャリアアドバイザーより
          <br className="hidden sm:block" />
          ご連絡いたします。今しばらくお待ちください。
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setStep(0);
            setAnswers({});
          }}
          className="mt-6 text-xs font-bold text-gold-deep underline underline-offset-4"
        >
          最初からやり直す
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-navy-100 sm:p-7">
      {/* progress */}
      <div className="flex items-center justify-between text-xs font-bold text-navy-400">
        <span>
          Q{step + 1}
          <span className="text-navy-300"> / {total}</span>
        </span>
        <span className="text-gold-deep">{progress}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-deep transition-all duration-300"
          style={{ width: `${Math.max(progress, 6)}%` }}
        />
      </div>

      {/* question */}
      <h3 className="mt-6 font-serif text-lg font-bold leading-snug text-navy-900 sm:text-xl">
        {current.label}
      </h3>

      <div className="mt-5">
        {current.kind === "choice" ? (
          <div
            className={
              current.columns === 3
                ? "grid grid-cols-3 gap-2"
                : current.columns === 2
                  ? "grid grid-cols-2 gap-2"
                  : "grid grid-cols-1 gap-2"
            }
          >
            {current.options.map((opt) => {
              const active = currentValue === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => choose(current.key, opt)}
                  className={`rounded-lg border px-3 py-3 text-sm font-bold transition ${
                    active
                      ? "border-gold bg-gold/10 text-navy-900"
                      : "border-navy-100 bg-paper text-navy-600 hover:border-gold hover:bg-gold/5"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        ) : (
          <input
            type={current.type ?? "text"}
            inputMode={current.inputMode ?? "text"}
            value={currentValue}
            placeholder={current.placeholder}
            onChange={(e) => setAnswer(current.key, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && canProceed) next();
            }}
            className="w-full rounded-lg border border-navy-200 bg-paper px-4 py-3.5 text-base text-navy-900 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        )}
      </div>

      {/* nav */}
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="rounded-full border border-navy-200 px-5 py-3 text-sm font-bold text-navy-500 transition enabled:hover:border-navy-400 disabled:opacity-40"
        >
          戻る
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!canProceed}
          className="flex-1 rounded-full bg-gradient-to-b from-gold to-gold-deep px-6 py-3 text-sm font-bold text-navy-900 shadow-cta transition enabled:hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLast ? "送信する" : "次へ"}
        </button>
      </div>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-navy-400">
        「送信する」を押すことで
        <a href="#privacy" className="underline">
          個人情報取扱方針
        </a>
        に同意したものとみなします。
      </p>
    </div>
  );
}
