import { fetchMovies } from '../../lib/googleSheets';
import Head from 'next/head';
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const movies = await fetchMovies();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return { notFound: true };
  }

  return {
    props: { movie },
  };
}

export default function MoviePage({ movie }) {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans">
      <Head>
        <title>{movie.title} | N7_HUB</title>
      </Head>

      <nav className="fixed w-full top-0 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
        <Link href="/">
          <a className="text-3xl font-black tracking-tighter hover:text-neonBlue transition">N7<span className="text-neonBlue">HUB</span></a>
        </Link>
        <button className="px-6 py-2 bg-neonRed rounded font-bold hover:scale-105 transition">Login</button>
      </nav>

      <div className="pt-32 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase">{movie.title}</h1>
          <p className="text-xl text-neutral-400 mb-8">Release Date: {movie.releaseDate}</p>

          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden shadow-2xl shadow-neonBlue/20">
            <iframe 
              src={`https://www.youtube.com/embed/${movie.trailerId}`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div 
            className="prose prose-invert max-w-none bg-neutral-900/50 p-6 rounded-lg"
            dangerouslySetInnerHTML={{ __html: movie.articleHtml }}
          />
        </div>
      </div>
    </div>
  );
}
