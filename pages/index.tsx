import Head from "next/head";
import { fetchMovies } from "../lib/googleSheets";
import Link from "next/link";

export async function getStaticProps() {
  const movies = await fetchMovies();
  return {
    props: {
      movies,
    },
    revalidate: 60 * 60, // Re-generate page every hour
  };
}

export default function Home({ movies }: any) {
  return (
    <>
      <Head>
        <title>N7 Intelligence Hub</title>
        <meta name="description" content="N7 Intelligence Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-20">
        <section className="h-[90vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-9xl font-bold tracking-widest">
            N7 <span className="text-neonRed">DATABASE</span>
          </h1>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {movies.map((movie: any) => (
              <Link key={movie.id} href={`/movies/${movie.id}`}>
                <div className="bg-gray-800 h-96 rounded-lg flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105">
                  <img src={movie.posterUrl} alt={movie.title} className="w-full h-3/4 object-cover rounded-t-lg"/>
                  <h2 className="text-2xl font-bold p-4">{movie.title}</h2>
                  <p>{movie.releaseDate}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
