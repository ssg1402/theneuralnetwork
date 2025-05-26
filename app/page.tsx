export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-[url('/hero-news.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Stay Informed. Stay Ahead.
          </h1>
          <p className="text-xl mt-6 text-brown-100">
            Get AI-powered news summaries on the go. Quick. Smart. Relevant.
          </p>
          <button className="mt-8 px-6 py-3 bg-brown-700 hover:bg-brown-800 text-white rounded-xl shadow-lg transition-all">
            Explore News
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-[#f5f5f5] text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-brown-800">
            Why AI News?
          </h2>
          <p className="mt-6 text-lg">
            In a world flooded with information, our AI-powered platform helps
            you get to the point faster. No fluff, no bias — just smart
            summaries of top stories from around the globe.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brown-600">
            <h3 className="text-2xl font-bold text-brown-700 mb-2">
              AI Curation
            </h3>
            <p>
              Powered by intelligent algorithms that sift through clutter and
              deliver what matters most.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brown-600">
            <h3 className="text-2xl font-bold text-brown-700 mb-2">
              Time-Saving
            </h3>
            <p>
              Get your daily dose of news in under 5 minutes. Summarized and
              simplified.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-brown-600">
            <h3 className="text-2xl font-bold text-brown-700 mb-2">
              On-the-Go
            </h3>
            <p>
              Optimized for mobile. Never miss an update, whether you're at work
              or on the move.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-black text-white py-20 px-6 md:px-20 text-center">
        <blockquote className="text-3xl italic font-light max-w-3xl mx-auto">
          "AI won't replace journalists, but it will supercharge the way we
          consume information."
        </blockquote>
        <p className="mt-4 text-brown-500">- The Future of News</p>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-white py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-xl font-semibold">AI News Digest</h3>
          <p className="text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
