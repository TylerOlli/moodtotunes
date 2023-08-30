import "./stream.css";

interface Track {
  title: string;
  id: number;
}

interface StreamProps {
  tracks: Track[];
}

export default function Stream({ tracks }: StreamProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        {tracks.map((track: Track) => (
          <div className="track" key={track.id}>
            {track.title}
          </div>
        ))}
      </div>
    </main>
  );
}