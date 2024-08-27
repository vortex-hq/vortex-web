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
import { SignUpForm, signUpFormSchema } from '@/lib/schemas/auth';
import { signIn } from '@/utils/supabase/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Header, Wrapper } from '../_components/form';

export default function SignUpPage() {
	const signUpForm = useForm<SignUpForm>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			email: '',
			password: '',
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
			<Wrapper>
				<Form {...signUpForm}>
					<form
						id='sign-up-form'
						onSubmit={signUpForm.handleSubmit(handleSignIn)}
						className='space-y-3'
					>
						<Header text='Dive Deep, the Vortex Awaits.' />
						<FormField
							control={signUpForm.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder='Enter your name' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={signUpForm.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<Input placeholder='Enter your e-mail' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={signUpForm.control}
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
						<Button
							form='sign-up-form'
							disabled={loading}
							type='submit'
							className='w-full mt-4'
							size='sm'
							variant='accent'
						>
							Sign Up
						</Button>
					</form>
				</Form>
			</Wrapper>
		</main>
	);
}
