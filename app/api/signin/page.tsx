"use client";  // 👈 Add this at the top

import { useSession } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();  // 👈 Avoid destructuring if it's undefined
  if (!session) {
    return <p>Please sign in</p>;
  }

  return <p>Welcome, {session.user?.name}!</p>;
}
