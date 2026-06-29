import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 px-4 sm:px-6 lg:px-8 text-white min-h-[60vh]">
      <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">Buy Me a Chai</h1>
      <p className="max-w-2xl text-base sm:text-lg text-slate-200">
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
      </p>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Purple to Blue
      </button>
    </div>
  );
}
