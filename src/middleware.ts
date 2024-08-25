import { updateSession } from '@/utils/supabase/middleware';
import { createClient } from '@/utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	const supabase = createClient();
	const user = await supabase.auth.getUser();
	const { pathname } = request.nextUrl;
	console.log('here');

	if (pathname === '/login' || pathname === '/sign-up') {
		return await updateSession(request);
	}

	if (!user || !user.data.user) {
		const url = new URL('/login', request.url);
		return NextResponse.redirect(url);
	}

	return await updateSession(request);
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
};
