import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans">
      <Head>
        <title>N7_HUB | Cinematic Intelligence</title>
      </Head>
      
      {/* Navbar */}
      <nav className="fixed w-full top-0 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
        <h1 className="text-3xl font-black tracking-tighter">N7<span className="text-[#0f5ad1]">HUB</span></h1>
        <button className="px-6 py-2 bg-[#E50914] rounded font-bold hover:scale-105 transition">Login</button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[90vh] flex items-center px-10 border-b border-white/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618519764620-7403abdbdf9c?auto=format&fit=crop&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-3 py-1 bg-[#0f5ad1] text-xs font-bold rounded mb-4 inline-block">SYSTEM ACTIVE</span>
          <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter shadow-black drop-shadow-2xl">Classified Data</h2>
          <button className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition">Initiate Feed</button>
        </div>
      </header>
    </div>
  );
}