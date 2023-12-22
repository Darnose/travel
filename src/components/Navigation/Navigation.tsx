import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navigation = () => {
  const session = useSession();

  console.log(session)

  return (
    <div>
      Navigation
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/login" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/login">SignIn</Link>
      )}
    </div>
  )
}

export default Navigation;