import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook into RapidAPI call here
    console.log("Download:", url);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* ─────────────────── Header */}
      <header className="w-full flex justify-center gap-4 py-4 backdrop-blur-md bg-white/5 shadow-lg sticky top-0 z-30">
        <button className="px-6 py-2 rounded-full font-semibold shadow-lg bg-white/10 hover:bg-white/20 transition">
          Download Video
        </button>
        <button className="px-6 py-2 rounded-full font-semibold shadow-lg bg-white/10 hover:bg-white/20 transition">
          About
        </button>
      </header>

      {/* ─────────────────── Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* TikTok Logo Accent */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          🎵 TikTok Downloader
        </h1>
        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col sm:flex-row gap-4"
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
            className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Download
          </button>
        </form>
      </main>

      {/* ─────────────────── Info Section */}
      <section className="bg-white text-black px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-center">How it Works</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Copy the link to a public TikTok video.</li>
            <li>Paste it into the box above and click <strong>Download</strong>.</li>
            <li>Wait a moment while we fetch the video via our API.</li>
            <li>Your video will download with no watermark. Enjoy!</li>
          </ol>
          <p className="text-center text-sm text-gray-600">
            Need help? Ping us in Discord.
          </p>
        </div>
      </section>
    </div>
  );
}
