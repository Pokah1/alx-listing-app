// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-grey">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to the ALX Listing App </h1>
        <p className="text-lg text-gray-700 mt-2 max-w-xl">
          A simple Airbnb-style app for browsing and booking property listings.
        </p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Coming Soon</h2>
        <p className="text-gray-600">
           Real listings will appear here as development progresses.
        </p>
      </section>

      <footer className="mt-12 text-sm text-gray-400">
        © {new Date().getFullYear()} ALX Listing App. All rights reserved.
      </footer>
    </main>
  );
}
