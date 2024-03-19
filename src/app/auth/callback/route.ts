import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  console.log("test")
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }
  return NextResponse.redirect(requestUrl.origin)
}