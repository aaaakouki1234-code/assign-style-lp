# NGM Personal LP

個人事業主・フリーランス向けの伴走型 Web 制作サービス LP。

- **Framework**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **CMS**: [microCMS](https://microcms.io/)
- **Source**: GitHub
- **Hosting (本番)**: Vercel
- **Hosting (ミラー)**: Cloudflare Pages（`@cloudflare/next-on-pages` 経由）

> 構成・セクション順序のリファレンスは社内の `webLP` を参考にしていますが、コピー・配色・コンポーネントはすべてこの LP 用に新規実装しています。

---

## 1. ローカル開発

```bash
# 1. 依存をインストール
npm install

# 2. 環境変数を用意（microCMS が未設定でも fallback コンテンツで起動可能）
cp .env.example .env.local
# .env.local を編集

# 3. 開発サーバー
npm run dev
# -> http://localhost:3000
```

`MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` が未設定の場合、`src/lib/fallback.ts` の内容で表示されます。デザイン確認だけならこのままで OK。

---

## 2. microCMS の API スキーマ

下記 9 つの API を microCMS 管理画面から作成してください。型は `src/types/content.ts` と一致させています。

### 2-1. オブジェクト形式 API

| API ID | 用途 |
| --- | --- |
| `site` | サイト全体の設定（ブランド名・電話番号・住所など） |
| `hero` | ファーストビュー |
| `ceo` | 代表メッセージ |

#### `site` (object)

| フィールド ID | 種類 | 必須 |
| --- | --- | --- |
| `brandName` | テキスト | ✓ |
| `tagline` | テキスト | ✓ |
| `phone` | テキスト | ✓ |
| `hours` | テキスト | ✓ |
| `hqAddress` | テキスト | ✓ |
| `branchAddress` | テキスト |  |
| `copyright` | テキスト | ✓ |
| `contactUrl` | テキスト | ✓ |

#### `hero` (object)

| フィールド ID | 種類 | 必須 |
| --- | --- | --- |
| `eyebrow` | テキスト | ✓ |
| `catch` | テキストエリア | ✓ |
| `sub` | テキストエリア | ✓ |
| `ctaText` | テキスト | ✓ |
| `ctaUrl` | テキスト | ✓ |
| `bgImage` | 画像 |  |

#### `ceo` (object)

| フィールド ID | 種類 | 必須 |
| --- | --- | --- |
| `name` | テキスト | ✓ |
| `title` | テキスト | ✓ |
| `body` | テキストエリア | ✓ |
| `photo` | 画像 |  |

### 2-2. リスト形式 API

| API ID | 用途 |
| --- | --- |
| `problems` | 課題セクション |
| `features` | 強みセクション |
| `flow` | 制作の流れ |
| `pricing` | 料金プラン |
| `testimonials` | お客様の声 |
| `faqs` | FAQ |

#### `problems`

| ID | 種類 |
| --- | --- |
| `label` | テキスト |

#### `features`

| ID | 種類 |
| --- | --- |
| `title` | テキスト |
| `body` | テキストエリア |
| `icon` | 画像（任意） |

#### `flow`

| ID | 種類 |
| --- | --- |
| `step` | 数字 |
| `title` | テキスト |
| `body` | テキストエリア |

#### `pricing`

| ID | 種類 |
| --- | --- |
| `name` | テキスト |
| `price` | テキスト |
| `unit` | テキスト |
| `highlights` | 複数選択 or 繰り返し（テキスト） |
| `recommended` | 真偽値 |

#### `testimonials`

| ID | 種類 |
| --- | --- |
| `name` | テキスト |
| `role` | テキスト |
| `comment` | テキストエリア |
| `avatar` | 画像（任意） |

#### `faqs`

| ID | 種類 |
| --- | --- |
| `question` | テキスト |
| `answer` | テキストエリア |

> どの API も `id` フィールドは microCMS が自動採番するものをそのまま使えます。

---

## 3. 環境変数

| 変数名 | 必須 | 用途 |
| --- | --- | --- |
| `MICROCMS_SERVICE_DOMAIN` | ◯ | microCMS サブドメイン |
| `MICROCMS_API_KEY` | ◯ | microCMS Read API Key |
| `REVALIDATE_SECRET` | ◯ | microCMS Webhook → /api/revalidate の共有シークレット |
| `NEXT_PUBLIC_SITE_URL` | 推奨 | 公開ドメイン（OG / sitemap で使用） |

CI/CD 用の追加 secrets:

| 変数名 | 用途 |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Pages: Edit 権限を持つ API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |

---

## 4. デプロイ

### 4-1. Vercel（本番）

1. GitHub リポジトリを Vercel に Import。
2. Framework Preset: **Next.js**（自動検出）。
3. Environment Variables に `MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` / `REVALIDATE_SECRET` / `NEXT_PUBLIC_SITE_URL` を設定。
4. Production Branch: `main`。Deploy 押下で完了。

### 4-2. Cloudflare Pages（ミラー）

GitHub Actions（`.github/workflows/deploy-cloudflare.yml`）が `main` への push でビルド + デプロイを実行します。

事前準備:

1. Cloudflare ダッシュボードで Pages プロジェクト `ngm-personal-lp` を作成（"Direct Upload" でも OK。最初の deploy 時に自動作成されます）。
2. GitHub リポジトリの **Settings → Secrets and variables → Actions** に以下を登録:
   - `CLOUDFLARE_API_TOKEN` … Pages: Edit + Account: Read 権限
   - `CLOUDFLARE_ACCOUNT_ID`
   - `MICROCMS_SERVICE_DOMAIN`
   - `MICROCMS_API_KEY`
   - `REVALIDATE_SECRET`
   - `NEXT_PUBLIC_SITE_URL`
3. `git push origin main` でワークフローが走ることを確認。

ローカルから手動でデプロイする場合:

```bash
npm run pages:build       # @cloudflare/next-on-pages でビルド
npx wrangler login
npm run pages:deploy
```

> Next.js App Router を Cloudflare Pages で動かすには `nodejs_compat` 互換フラグが必要です（`wrangler.toml` で設定済み）。Pages プロジェクト側でも **Settings → Functions → Compatibility flags** に `nodejs_compat` を追加してください。

---

## 5. microCMS Webhook（ISR 再生成）

microCMS 側 → **API 設定 → Webhook** で以下を設定:

| 項目 | 値 |
| --- | --- |
| URL | `https://<your-vercel-domain>/api/revalidate` |
| Method | POST |
| Header | `x-microcms-signature: <REVALIDATE_SECRET と同じ値>` |
| 発火タイミング | 全 API の編集・公開・削除 |

ヘッダーが使えないプランの場合は URL に `?secret=<REVALIDATE_SECRET>` を付与しても可（実装側で両方受け取ります）。

これで microCMS 上でコンテンツを更新すると、対応するキャッシュタグが失効し、次のアクセスで最新内容が表示されます。

> Cloudflare Pages 側でも同じ Webhook を設定する場合は、`https://<cf-pages-domain>/api/revalidate` を別の Webhook として登録してください（Vercel 用と Cloudflare 用、二本走らせるのが推奨）。

---

## 6. ディレクトリ構成

```
.
├── .github/workflows/deploy-cloudflare.yml   # CF Pages ミラーデプロイ
├── public/                                    # 画像・favicon を置く
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                # トップ（LP 本体）
│   │   ├── thanks/page.tsx         # フォーム送信完了
│   │   ├── api/
│   │   │   ├── contact/route.ts    # 問い合わせ受信スタブ
│   │   │   └── revalidate/route.ts # microCMS Webhook 受信
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── globals.css
│   ├── components/                 # LP 各セクション
│   ├── lib/
│   │   ├── microcms.ts             # SDK ラッパー（fallback 安全）
│   │   ├── content.ts              # 全 API を一括 fetch
│   │   └── fallback.ts             # microCMS 未設定時の既定値
│   └── types/content.ts
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── vercel.json
├── wrangler.toml
└── package.json
```

---

## 7. 問い合わせフォームの実送信

`src/app/api/contact/route.ts` は受信スタブです。本番では下記いずれかに差し替えてください:

- [Resend](https://resend.com/) で `from`/`to` 設定 + `react-email` のメール本文
- SendGrid Web API
- Slack Incoming Webhook（社内通知のみで足りる場合）
- Cloudflare Pages 上では Cloudflare Email Routing + Workers の組み合わせも可

ファイルアップロードや reCAPTCHA を加える場合は、フォームを Server Component → Client Component に分割してください。

---

## 8. Lint / Format

```bash
npm run lint
```

ESLint は `eslint-config-next` をそのまま使用。Prettier は導入していないので必要に応じて追加してください。
