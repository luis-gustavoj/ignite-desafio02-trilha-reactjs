import { MovieCard } from "./MovieCard";

type MovieProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
};

export function Content({
  title,
  movies,
}: {
  title: string;
  movies: MovieProps[];
}) {
  return (
    <>
      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {title}</span>
          </span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
