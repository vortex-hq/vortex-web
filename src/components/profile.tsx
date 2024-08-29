import { UserRequest } from '@/api';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { session } from '@/utils/supabase/auth';

export default async function Profile() {
  const token = await session();
  if (!token) return;
  const req = new UserRequest(token);
  const profile = await req.getProfile();

  return (
    <Avatar className='select-none'>
      <AvatarFallback>{profile.display_name[0]}</AvatarFallback>
      <AvatarImage src={profile.picture!} />
    </Avatar>
  );
}
