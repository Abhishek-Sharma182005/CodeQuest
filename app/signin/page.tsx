"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInPage() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {session ? (
        <>
          <p>Welcome, {session.user?.name}! Your email is: {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <p>Please sign in</p>
          <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </>
      )}
    </div>
  )
}
