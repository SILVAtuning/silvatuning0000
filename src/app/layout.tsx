import type { Metadata } from "next";
import NextConfig from "../../next.config";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Noto_Sans_JP } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CustomAppBar from "./_component/AppBar";
import FooterContent from "./_component/FooterContent";
import theme from './theme';
import Box from '@mui/material/Box';
import Analytics from "@/app/_component/Analytics";
import "@/styles/_application.scss";

const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

const basePath = NextConfig.basePath;
process.env.BASE_PATH = basePath ? basePath : "";

const metadataTemplate = {
  title: process.env.NEXT_PUBLIC_REACT_APP_SITE_NAME || "Home",
  description: "SILVA(シルヴァ)のホームページ兼ポートフォリオサイトです。VOCALOID, UTAU, CeVIOをはじめとした音声合成ソフトの調声をメインで依頼受付しております。",
  keywords: ["ボカロ", "ボカロ調声", "VOCALOID", "UTAU", "CeVIO", "SynthV", "SILVA", "調整", "調声", "調教", "ボーカロイド"],
  homepageUrl: "https://silvatuning.github.io/silvatuning0000/"
}

export const metadata: Metadata = {
  title: metadataTemplate.title,
  description: metadataTemplate.description,
  applicationName: metadataTemplate.title,
  authors: [{
    name: "SILVA",
    url: metadataTemplate.homepageUrl,
  }],
  generator: "Next.js",
  keywords: metadataTemplate.keywords,
  robots: "index, follow",
  manifest: metadataTemplate.homepageUrl + "manifest.json",
  openGraph: {
    url: metadataTemplate.homepageUrl,
    type: "website",
    title: metadataTemplate.title,
    description: metadataTemplate.description,
  },
  twitter: {
    creator: "@SILVAVACHAN",
    site: "@SILVAVACHAN",
    card: "summary_large_image",
    description: metadataTemplate.description
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* GA4のスクリプト */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-5CV9XZMTD4`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5CV9XZMTD4', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>
      </head>
      <body className={`${notoSansJp.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CustomAppBar />
            {children}
            <Box
              component="footer"
              sx={{
                pb: 3,
                mx: 0,
                mt: 'auto',
                backgroundColor: "rgb(66, 66, 66)"
              }}
            >
              <FooterContent />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
      </body>
    </html>
  );
}
