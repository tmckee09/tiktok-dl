import { useState } from "react";
import { Download, Sparkles, Clock } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook into RapidAPI call here
    console.log("Download:", url);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-black">
      {/* ─────────────────── Top Nav */}
      <header className="w-full flex justify-center gap-6 py-4 sticky top-0 z-30 backdrop-blur-md bg-black/60 shadow-lg">
        <button className="px-6 py-2 rounded-full border border-white font-semibold hover:bg-white/10 active:scale-95 transition">
          Download Video
        </button>
        <button className="px-6 py-2 rounded-full border border-white font-semibold hover:bg-white/10 active:scale-95 transition">
          About
        </button>
      </header>

      {/* ─────────────────── Hero */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">
          🎵 TikTok Downloader
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex flex-col sm:flex-row gap-4"
        >
          <input
            type="url"
            required
            placeholder="Paste your TikTok link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-4 rounded-lg text-black focus:ring-4 focus:ring-pink-500/50 outline-none"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 px-8 py-3 rounded-lg font-semibold shadow-lg border border-white/20 flex items-center gap-2"
          >
            <span className="flex items-center gap-2">
              <Download size={18} />
              <span>Download</span>
            </span>
          </button>
        </form>
      </main>

      {/* ─── Decorative divider */}
      <svg
        className="w-full text-white"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M0 0h1440v120H0z" />
      </svg>

      {/* ─────────────────── Info Section */}
      <section className="bg-white text-black w-full py-16 px-6 shadow-inner">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Sparkles size={48} className="text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Watermark</h3>
            <p className="text-gray-600">
              Crystal‑clear videos saved without the annoying TikTok logo.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Clock size={48} className="text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-gray-600">
              Lightning‑quick downloads powered by our optimized API.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Download size={48} className="text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
            <p className="text-gray-600">
              No sign‑ups, no paywalls — just paste, click, save.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-center">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg">
            <li>Copy the link to a public TikTok video.</li>
            <li>
              Paste it into the box above and press <strong>Download</strong>.
            </li>
            <li>We fetch the video via our API in seconds.</li>
            <li>Enjoy your watermark‑free video offline or repost anywhere.</li>
          </ol>
          <p className="text-center text-sm text-gray-500">
            Need help? Ping us in Discord.
          </p>
        </div>
      </section>
    </div>
  );
}
