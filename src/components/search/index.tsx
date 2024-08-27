'use client';

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

export default function Search() {
  return (
    <div className='flex w-96 gap-2 items-center border-2 rounded-lg py-1.5 p-2 focus-within:ring-accent focus-within:ring-2 ring-offset-2 ring-offset-background'>
      <MagnifyingGlass
        size={20}
        className='text-muted-foreground'
        weight='regular'
      />
      <input
        placeholder='Search'
        className='bg-background focus:outline-none placeholder:text-muted-foreground text-sm font-medium'
      />
    </div>
  );
}
