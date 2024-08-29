'use client';

import useResultStore from '@/lib/zustand/result-store';
import ResultItem from './result-item';

export default function Results() {
  const { results } = useResultStore();
  return (
    <section className='grid grid-flow-col h-full mt-2 px-2 gap-2 w-full pe-10 overflow-x-scroll'>
      {results?.results?.map((res) => {
        return (
          <ResultItem
            id={res.id}
            key={res.id}
            type={res.type}
            image={res.image[res.image.length - 1].url}
            name={res.name}
            sub={res.artists.primary[0].name}
          />
        );
      })}
    </section>
  );
}
