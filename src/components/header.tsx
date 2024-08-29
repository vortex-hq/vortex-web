import Profile from '@/components/profile';
import Search from '@/components/search';

export default function Header() {
  return (
    <header className='w-full flex justify-end'>
      <div className='flex gap-4 items-center'>
        <Search />
        <Profile />
      </div>
    </header>
  );
}
