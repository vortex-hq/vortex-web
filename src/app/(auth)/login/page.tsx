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
import { LoginForm, loginFormSchema } from '@/lib/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
	const loginForm = useForm<LoginForm>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	async function handleSubmit() {}
	return (
		<main className='flex w-full items-center justify-center h-screen'>
			<Form {...loginForm}>
				<form
					onSubmit={loginForm.handleSubmit(handleSubmit)}
					className='space-y-4 w-72 flex flex-col'
				>
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
					<Button type='submit' className='self-end' size='sm'>
						login
					</Button>
				</form>
			</Form>
		</main>
	);
}
