import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ThemeProviders from '@/components/ThemeProvider';
import Header from '@/components/Header';
import '@/styles/globals.css';
import styles from '@/styles/globals.module.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const siteMetadata = {
  locale: 'zh_CN',
  title: '官网',
  description: '王小帅官网',
  siteUrl: 'https://www.baidu.com',
  socialBanner: '/images/social-banner.png',
  analyticsId: '' // e.g. G-XXXXXXX
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: 'website'
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner]
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang={siteMetadata.locale}
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel='apple-touch-icon' sizes='76x76' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' media='(prefers-color-scheme: light)' content='#fff' />
      <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <body className='bg-gray-100 text-black antialiased dark:bg-neutral-950 dark:text-white'>
        <ThemeProviders>
          <Header />
          <main className={`${styles.main} flex justify-center mx-auto px-5 xl:max-w-7xl`}>
            {children}
          </main>
        </ThemeProviders>
        <GoogleAnalytics analyticsId={siteMetadata.analyticsId} />
      </body>
    </html>
  );
};

export default RootLayout;
