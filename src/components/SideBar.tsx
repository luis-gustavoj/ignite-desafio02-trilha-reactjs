import { Button } from "./Button";

type GenresResponseType = {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
};

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: {
  genres: GenresResponseType[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
