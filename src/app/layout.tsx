import QueryProvider from '@/components/search/query-provider';
import Sidebar from '@/components/sidebar';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vortex',
  description: 'Look closer, listen to the Vortex.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.className} dark flex overflow-hidden bg-popover h-screen w-screen p-2 gap-2`}
      >
        <QueryProvider>
          <Sidebar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
