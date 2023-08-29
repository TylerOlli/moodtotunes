import Image from 'next/image'

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/moodtotunes-logo.png"
            alt="MoodToTunes Logo"
            width={378}
            height={80}
            priority
        />
      </div>
      <div className="tracklist">
        {
          tracks.map((track, key) => {
              return <div className="track" key={key}>{track.title}</div>;
          })
        }
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          every emotion deserves its anthem&nbsp;
          <code className="font-mono font-bold">moodtotunes</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://developers.soundcloud.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Integration{' '}
            <Image
              src="/soundcloud-logo.png"
              alt="SoundCloud Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  )
}
