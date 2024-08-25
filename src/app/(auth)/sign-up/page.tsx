'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignUpForm, signUpFormSchema } from '@/lib/schemas/auth';
import { signIn } from '@/utils/supabase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

export default function SignUpPage() {
	const signUpForm = useForm<SignUpForm>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			email: '',
			password: '',
			username: '',
			name: '',
		},
	});
	const [loading, startTransition] = useTransition();

	function handleSignIn(values: SignUpForm) {
		startTransition(async () => {
			await signIn(values);
		});
	}

	return (
		<main className='flex w-full items-center justify-center h-screen'>
			<Form {...signUpForm}>
				<form
					id='sign-up-form'
					onSubmit={signUpForm.handleSubmit(handleSignIn)}
					className='space-y-4 w-72 flex flex-col'
				>
					<FormField
						control={signUpForm.control}
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
						control={signUpForm.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Username' {...field} />
								</FormControl>
								<FormDescription>
									This is your account&apos;s unique indentifier.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={signUpForm.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Name' {...field} />
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={signUpForm.control}
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
						form='sign-up-form'
						disabled={loading}
						// onClick={handleClick}
						type='submit'
						className='self-end'
						size='sm'
					>
						sign up
					</Button>
				</form>
			</Form>
		</main>
	);
}
