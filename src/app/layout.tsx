import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "若手ハイエンドの転職エージェント | ASSIGN",
  description:
    "ナショナルクライアントからメガベンチャー・急成長スタートアップまで1200社以上。あなたのキャリアプランに合わせて最適な企業をご紹介します。無料・簡単60秒のキャリア相談を受付中。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ASSIGN",
    title: "若手ハイエンドの転職エージェント | ASSIGN",
    description:
      "1200社以上からキャリアプランに合わせてご紹介。無料・簡単60秒のキャリア相談。",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0C1B33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
