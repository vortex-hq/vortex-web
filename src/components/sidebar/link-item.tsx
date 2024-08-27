import * as NextLink from 'next/link';
import { type Link } from '.';
import LinkTooltip from './link-tooltip';

interface LinkProps extends Link {
  path: string | undefined;
}

export default function Link({ path, href, icon: Icon, name }: LinkProps) {
  const active = path === path;
  return (
    <NextLink.default
      className='flex w-full h-fit justify-center group'
      key={href}
      href={href}
      data-active={path === href}
    >
      <LinkTooltip content={name}>
        <div
          role='link'
          className='p-2 hover:bg-secondary group-data-[active=true]:bg-secondary group-data-[active=true]:hover:bg-secondary/60 transition-colors duration-200 w-full mx-3 flex justify-center rounded-md'
        >
          <Icon size={28} weight={path === href ? 'fill' : 'regular'} />
        </div>
      </LinkTooltip>
    </NextLink.default>
  );
}
