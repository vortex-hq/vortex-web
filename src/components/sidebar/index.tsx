import Text from '@/assets/brand/dark.svg';
import { pathname } from '@/utils/pathname';
import { Icon } from '@phosphor-icons/react';
import { HouseSimple } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import * as NextLink from 'next/link';
import Link from './link-item';

export type Link = {
  href: string;
  name: string;
  icon: Icon;
};

const links: Link[] = [
  {
    href: '/',
    name: 'Home',
    icon: HouseSimple,
  },
];

export default async function Sidebar() {
  let path = pathname();

  return (
    <aside className='h-full rounded-lg min-w-fit shrink-0 flex flex-col gap-2'>
      <NextLink.default
        href='/'
        role='heading'
        className='flex items-center gap-1.5 py-4 h-fit bg-background p-2 rounded-lg'
      >
        <Image src={Text} className='h-6 w-16' alt='Vortex' />
      </NextLink.default>
      <nav className='bg-background rounded-lg h-full w-full py-3'>
        {links.map((link) => (
          <Link key={link.href} path={path} {...link} />
        ))}
      </nav>
    </aside>
  );
}
