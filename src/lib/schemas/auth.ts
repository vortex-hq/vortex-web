import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().email({ message: 'E-mail must be valid.' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters long.' }),
});

export type LoginForm = z.infer<typeof loginFormSchema>;

export const signUpFormSchema = z.object({
	email: z.string().email({ message: 'E-mail must be valid.' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters long.' }),
	name: z.string().min(4, 'Name must be at least 4 characters long.'),
});

export type SignUpForm = z.infer<typeof signUpFormSchema>;
