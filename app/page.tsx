import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 animate__animated animate__fadeIn animate__delay-1s">
        Assignment-7
      </h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl">
        Data Fetching From APIs Using SSR (Server-Side Rendering) and CSR (Client-Side Rendering). Explore the difference in data fetching techniques with modern Next.js.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="/server-side">
          <p className="transform transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
            Server-Side Rendered Page
          </p>
        </Link>
        <Link href="/client-side">
          <p className="transform transition-all duration-300 hover:scale-105 bg-green-600 hover:bg-green-700 text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400">
            Client-Side Rendered Page
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
