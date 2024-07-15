import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';

import Providers from '@/app/Providers';

import '@/styles/reset.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Cony',
  description: 'Cony',
};

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
