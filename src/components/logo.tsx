import LeadingDark from '@/assets/brand/dark.svg';
import Icon from '@/assets/brand/vortex-icon.svg';
import Image from 'next/image';

export default function Logo() {
  return (
    <h1 className='flex gap-2 items-center mb-4 shrink-0'>
      <Image src={Icon} alt='Icon' className='w-8 h-8' />
      <Image src={LeadingDark} alt='Vortex' className='w-24' />
    </h1>
  );
}
