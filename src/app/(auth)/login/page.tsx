'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginForm, loginFormSchema } from '@/lib/schemas/auth';
import { login } from '@/utils/supabase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Wrapper } from '../_components/form';

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
			<Wrapper>
				<Form {...loginForm}>
					<form
						onSubmit={loginForm.handleSubmit(handleLogin)}
						className='space-y-3'
						id='login-form'
					>
						<Header text='Dare to Listen. Enter the Vortex.' />
						<FormField
							control={loginForm.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
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
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type='password' placeholder='••••••' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
					<Button
						disabled={loading}
						type='submit'
						className='w-full mt-4'
						variant='accent'
						form='login-form'
						size='sm'
					>
						Log in
					</Button>
				</Form>
			</Wrapper>
		</main>
	);
}
