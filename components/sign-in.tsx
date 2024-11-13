
import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { Chrome } from 'lucide-react'

export default function SignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <Button
        type="submit"
        className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white"
      >
        <Chrome className="mr-2 h-4 w-4" />
        Sign in with Google
      </Button>
    </form>
  )
}