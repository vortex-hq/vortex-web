import { headers } from 'next/headers';

export function pathname(): string | undefined {
  const headersList = headers();
  return headersList
    .get('referer')
    ?.replace(new RegExp(`https?://${headersList.get('host')}`), '');
}
