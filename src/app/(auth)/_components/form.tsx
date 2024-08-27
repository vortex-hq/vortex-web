import Logo from '@/components/ui/logo';
import { ReactNode } from 'react';

interface HeaderProps {
	text: string;
}
function Header({ text }: HeaderProps) {
	return (
		<header className='flex flex-col mb-6 items-start'>
			<Logo />
			<h2 className='text-lg font-semibold'>{text}</h2>
		</header>
	);
}

interface WrapperProps {
	children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
	return (
		<div className='flex flex-col gap-4 w-80 shadow-lg rounded-lg'>
			{children}
		</div>
	);
}

export { Header, Wrapper };

