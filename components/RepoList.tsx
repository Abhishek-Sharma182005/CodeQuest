"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function RepoList() {
  const { data: session } = useSession();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!session?.accessToken) return;  // ✅ Now TypeScript will not complain

    const fetchRepos = async () => {
      const res = await fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });

      const data = await res.json();
      setRepos(data);
    };

    fetchRepos();
  }, [session]);

  if (!session) {
    return <p>Please log in with GitHub to see your repositories.</p>;
  }

  return (
    <div>
      <h2>Your GitHub Repositories</h2>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
