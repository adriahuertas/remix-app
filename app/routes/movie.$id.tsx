import { json, type LoaderArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { useLoaderData } from "react-router";

export async function loader({ params }: LoaderArgs) {
  const { id } = params
  const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTU1ODI0NWIwNDM5NGE0YzhkYjQ4YTQ1NzI3NGE3NyIsInN1YiI6IjY1M2I3YTA0MTA5Y2QwMDEyY2ZlNGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_DVjeHhiLhioZ8i9gDwyerfJxdx-CXibkwDtkStRDI'
    }
  });

  return json(await req.json())
}

export default function MovieId() {
  const movie: any = useLoaderData()
  console.log(movie)
  return (
    <div className="min-h-screen p-10">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="Movie poster"
        className="h-[40vh] object-cover w-full rounded-xl"
      />
      <h1 className="text-4xl font-bold text-center pt-5">{movie.title}</h1>

      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-semibold">
          <p>
            <span className="underline">
              Homepage:
            </span>
            <Link to={movie.homepage} target="_blank">
              {" "}Link
            </Link>
          </p>
          <p>
            <span className="underline">Idioma original:</span>{" "}
            {movie.original_language}
          </p>
          <p>
            <span className="underline">Sinopsis:</span>{" "}
            {movie.overview}
          </p>
          <p>
            <span className="underline">Fecha de estreno:</span>{" "}
            {movie.release_date}
          </p>
        </div>
        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
    </div>
  )
}