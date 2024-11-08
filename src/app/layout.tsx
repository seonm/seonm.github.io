import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import './global.css';

export const metadata: Metadata = {
  title: '보영&선미 결혼합니다:)',
  description: 'We are getting merried',
};

const notoSans = Noto_Sans_KR({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['300', '500'],
  variable: '--notoSans', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
      </head>
      <body className={`${notoSans.className} bg-gradient-to-b from-blue-100 to-red-300`}>
        <section className='min-h-screen'>{children}</section>
      </body>
    </html>
  );
}
