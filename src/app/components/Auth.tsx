"use client";

import sdk from "../lib/spotify-sdk/ClientInstance";
import { useSession, signOut, signIn } from "next-auth/react";
import SpotifySearch from "./SpotifySearch";

export default function Home() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return (
      <div>
        <button onClick={() => signIn("spotify")}>Sign in with Spotify</button>
      </div>
    );
  }

  return (
    <div>
      <p>Logged in as {session.data.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
      <SpotifySearch sdk={sdk} />
    </div>
  );
}