import Head from 'next/head';
import Link from 'next/link';
import { fetchMovies } from '../lib/googleSheets';

export async function getServerSideProps() {
  const movies = await fetchMovies();
  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  const heroMovie = movies[0];

  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans">
      <Head>
        <title>N7_HUB | Cinematic Intelligence</title>
      </Head>

      <nav className="fixed w-full top-0 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
        <h1 className="text-3xl font-black tracking-tighter">N7<span className="text-neonBlue">HUB</span></h1>
        <button className="px-6 py-2 bg-neonRed rounded font-bold hover:scale-105 transition">Login</button>
      </nav>

      <header 
        className="relative h-[90vh] flex items-center px-10 border-b border-white/10"
        style={{ backgroundImage: `url(${heroMovie.posterUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bgDeep to-transparent"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-3 py-1 bg-neonBlue text-xs font-bold rounded mb-4 inline-block">SYSTEM ACTIVE</span>
          <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter shadow-black drop-shadow-2xl">{heroMovie.title}</h2>
          <Link href={`/movies/${heroMovie.id}`}>
            <a className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition">Initiate Feed</a>
          </Link>
        </div>
      </header>

      <main className="p-10">
        <h3 className="text-4xl font-bold mb-8">Data Vault</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <a className="block bg-neutral-900 rounded-lg overflow-hidden group">
                <div className="relative h-96">
                  <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-2xl font-bold">{movie.title}</h4>
                    <p className="text-sm text-neutral-400">{movie.releaseDate}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}