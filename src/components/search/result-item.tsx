import { SearchType } from '@/api/search';
import Image from 'next/image';
import Link from 'next/link';

interface ResultItemProps {
  id: string;
  name: string;
  image: string;
  type: SearchType;
  sub: string;
}

export default function ResultItem({
  name,
  image,
  id,
  type,
  sub,
}: ResultItemProps) {
  return (
    <Link
      className='flex flex-col h-fit min-w-52 gap-2'
      draggable={false}
      href={id}
    >
      <Image
        data-type={type}
        className='w-52 h-52 select-none data-[type=song]:rounded data-[type=artist]:rounded-full'
        width={256}
        height={256}
        alt={name}
        src={image}
        draggable={false}
      />
      <div className='flex flex-col select-none'>
        <h3 className='truncate font-semibold text-base leading-snug'>
          {name}
        </h3>
        <span className='text-muted-foreground font-medium text-sm'>{sub}</span>
      </div>
    </Link>
  );
}
