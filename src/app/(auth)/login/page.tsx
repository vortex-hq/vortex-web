'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Logo from '@/components/ui/logo';
import { LoginForm, loginFormSchema } from '@/lib/schemas/auth';
import { login } from '@/utils/supabase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
	const loginForm = useForm<LoginForm>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const [loading, startTransition] = useTransition();

	function handleLogin(values: LoginForm) {
		startTransition(async () => {
			await login(values);
		});
	}

	return (
		<main className='h-screen w-screen overflow-hidden justify-center items-center flex flex-col'>
			<Form {...loginForm}>
				<form
					onSubmit={loginForm.handleSubmit(handleLogin)}
					className='space-y-4 w-80 flex flex-col shadow-lg rounded-lg'
				>
					<header className='flex flex-col mb-6 items-start'>
						<Logo />
						<h2 className='text-lg font-semibold'>
							Dare to Listen. Enter the Vortex.
						</h2>
					</header>
					<FormField
						control={loginForm.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='E-mail' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={loginForm.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type='password' placeholder='Password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={loading}
						type='submit'
						className='self-end w-full mt-8'
						variant='accent'
						size='sm'
					>
						login
					</Button>
				</form>
			</Form>
		</main>
	);
}
