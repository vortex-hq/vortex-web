'use server';

import {
	type LoginForm,
	type SignUpForm,
	loginFormSchema,
	signUpFormSchema,
} from '@/lib/schemas/auth';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function signIn(values: SignUpForm) {
	const fields = signUpFormSchema.safeParse(values);

	if (!fields.success) return;
	const { email, password, name } = fields.data;

	const supabase = createClient();

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				display_name: name,
			},
		},
	});

	if (error) {
		console.error(error);
	} else {
		redirect('/');
	}
}

export async function login(values: LoginForm) {
	const fields = loginFormSchema.safeParse(values);

	if (!fields.success) return;

	const supabase = createClient();

	const { password, email } = fields.data;
	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		console.error(error);
	} else {
		redirect('/');
	}
}
