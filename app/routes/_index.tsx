import { json } from "@remix-run/node";
import type { V2_MetaFunction, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Demo App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ }: LoaderArgs) {
  const req = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTU1ODI0NWIwNDM5NGE0YzhkYjQ4YTQ1NzI3NGE3NyIsInN1YiI6IjY1M2I3YTA0MTA5Y2QwMDEyY2ZlNGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_DVjeHhiLhioZ8i9gDwyerfJxdx-CXibkwDtkStRDI'
      }
    });

  return json(await req.json())
}

export default function Index() {
  const data = useLoaderData()
  const movies = data.results
  console.log(movies)
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Top Trending Movies
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {
            movies.map((movie: any) => (
              <div key={movie.id} className="flex flex-col overflow-hidden rounded-lg border bg-white ">
                <Link to={`/movie/${movie.id}/comments`} prefetch="intent" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </Link>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="mb-2 text-lg font-semibold text-gray-800">
                    <Link to={`/movie/${movie.id}/comments`} prefetch="intent" className="transition duration-100 hover:text-indigo-500">
                      {movie.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 line-clamp-3">{movie.overview}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
