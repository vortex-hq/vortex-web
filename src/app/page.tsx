import { createClient } from '@/utils/supabase/server';

export default async function Home() {
	const supabase = createClient();
	const { data: session } = await supabase.auth.getSession();
	console.log(session);

	const response = await fetch('https://vortex-server.shuttleapp.rs', {
		method: 'GET',
		headers: {
			authorization: `Bearer ${session.session?.access_token}`,
		},
	});

	const data = await response.text();
	console.log('data', data);
	return <main className=''>this page must be protected</main>;
}
