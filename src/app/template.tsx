import Header from '@/components/header';
import { ReactNode } from 'react';

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <div className='h-full w-full flex flex-col gap-2 rounded-lg bg-background p-2'>
      <Header />
      <main className='flex-1 h-full shrink-0'>{children}</main>
    </div>
  );
}
