'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Icons } from './icons';
import { Button } from './ui/button';
import { Provider } from '@supabase/supabase-js';

export default function SignInProvider() {
  const supabase = createClientComponentClient()

  const onClickHandler = async (provider: Provider) => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
    debugger
  }
  return (
    <div className="grid grid-cols-2 gap-6">
      <Button variant="outline" onClick={()=> onClickHandler('github')}>
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </Button>
      <Button variant="outline" onClick={()=> onClickHandler('google')} disabled>
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
}
