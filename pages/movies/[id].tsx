import { fetchMovies } from '../../lib/googleSheets';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export async function getStaticPaths() {
  const movies = await fetchMovies();
  const paths = movies.map((movie: any) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const movies = await fetchMovies();
  const movie = movies.find((m: any) => m.id.toString() === params.id);

  return {
    props: {
      movie,
    },
  };
}

export default function MoviePage({ movie }: any) {
  return (
    <>
      <Head>
        <title>{movie.title} - N7 Intelligence Hub</title>
      </Head>

      <Link href="/">
        <motion.div 
          className="fixed top-8 left-8 z-50 bg-neonBlue text-white px-4 py-2 rounded-full cursor-pointer"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px 5px #0f5ad1"}}
        >
          &lt;- Return to Base
        </motion.div>
      </Link>

      <div
        className="h-screen bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${movie.posterUrl})` }}
      ></div>

      <div className="relative z-10 bottom-[10vh] bg-black bg-opacity-50 backdrop-blur-lg border border-neonBlue rounded-lg p-8 m-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg"
                src={`https://www.youtube.com/embed/${movie.trailerId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: movie.articleHtml }} />
        </div>
      </div>
    </>
  );
}
