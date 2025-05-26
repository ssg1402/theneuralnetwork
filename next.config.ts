import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.cnn.com', 'gnews.io',`https://gnews.io/api/v4/search?q="geopolitics"+OR+"international+relations"+OR+"foreign+policy"+OR+"diplomacy"+OR+"global+affairs"&lang=en&max=20&topic=world&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`],
  },
};

export default nextConfig;
