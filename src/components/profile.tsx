import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { currentUser } from '@/utils/supabase/auth';

export default async function Profile() {
  const user = await currentUser();

  return (
    <Avatar>
      <AvatarFallback></AvatarFallback>
      <AvatarImage />
    </Avatar>
  );
}
