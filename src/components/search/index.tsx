'use client';

// import { SearchRequest } from '@/api';
import useResultStore from '@/lib/zustand/result-store';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState<string>('');
  const { addResults } = useResultStore();
  const { data: results } = useQuery({
    queryKey: ['search', query],
    queryFn: handleQuery,
    enabled: query.length > 2,
  });
  // const req = new SearchRequest();
  async function handleQuery() {
    const response = await fetch(
      `http://127.0.0.1:8000/search?q=${query}&type=song`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    const data = await response.json();
    addResults(data['Song']['data']);
    return response;
  }

  return (
    <div className='flex w-96 gap-2 items-center border-2 rounded-lg py-1.5 p-2 focus-within:ring-accent focus-within:ring-2 ring-offset-2 ring-offset-background'>
      <MagnifyingGlass
        size={20}
        className='text-muted-foreground'
        weight='regular'
      />
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search'
        className='bg-background focus:outline-none placeholder:text-muted-foreground text-sm font-medium'
      />
    </div>
  );
}
