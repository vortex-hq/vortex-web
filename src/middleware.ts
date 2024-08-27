import { updateSession } from '@/utils/supabase/middleware';
import { createClient } from '@/utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	const supabase = createClient();
	const user = await supabase.auth.getUser();
	const { pathname } = request.nextUrl;

	if (pathname === '/login' || pathname === '/sign-up') {
		// if the user is already authenticated and try to reach an auth page
		if (user && user.data?.user) {
			const url = new URL('/', request.url);
			return NextResponse.redirect(url);
		}
		return await updateSession(request);
	}

	// not authenticated user
	if (!user || !user.data.user) {
		const url = new URL('/login', request.url);
		return NextResponse.redirect(url);
	}

	return await updateSession(request);
}

export const config = {
	matcher:
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
};
