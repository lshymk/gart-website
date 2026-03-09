import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'G-ART 谷亚 | 高端LED显示屏',
    template: '%s | G-ART 谷亚',
  },
  description:
    'G-ART谷亚专注高端LED显示屏研发、生产与销售，提供室内全彩LED屏、室外LED屏、小间距LED屏等高品质显示产品，致力于为客户提供专业的LED显示解决方案。',
  keywords: [
    'G-ART',
    '谷亚',
    'LED显示屏',
    '室内LED屏',
    '室外LED屏',
    '小间距LED屏',
    '全彩LED屏',
    '高端LED',
    'LED显示解决方案',
  ],
  authors: [{ name: 'G-ART 谷亚' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'G-ART 谷亚 | 高端LED显示屏解决方案',
    description: '专注高端LED显示屏研发、生产与销售，提供专业的LED显示解决方案',
    siteName: 'G-ART 谷亚',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
