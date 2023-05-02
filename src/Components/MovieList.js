import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieInfo, { EmptyMovie } from "./MovieInfo";

const MovieList = (props) => {
  const [movieDetails, setMovieDetails] = useState();
  const childToParent = (selectedMovie) => {
    setMovieDetails(selectedMovie);
  };
  const { movieList } = props;
  return (
    <div className="flex">
      <div className="flex-initial w-6/12" data-testid="movie-list">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
          <tbody data-testid="table-container">
            {movieList.map((movie, index) => {
              return (
                <MovieCard
                  childToParent={childToParent}
                  key={index}
                  movie={movie}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex-initial w-6/12">
        {movieDetails ? (
          <MovieInfo movieDetails={movieDetails} />
        ) : (
          <EmptyMovie />
        )}
      </div>
    </div>
  );
};

export default MovieList;
