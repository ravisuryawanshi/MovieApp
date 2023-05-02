import { useEffect, useState } from "react";
import { filterMovieUsingName, sortMovies } from "./utils/Helper";
import MovieList from "./MovieList";

export default Body = ({ movieName, sortBy }) => {
  const [movieData, setMovieData] = useState({});
  useEffect(() => {
    loadMovieData();
  }, [movieName]);

  useEffect(() => {
    sortMovieData();
  }, [sortBy]);

  async function loadMovieData() {
    try {
      const data = await filterMovieUsingName(movieName);
      setMovieData(data);
    } catch (err) {
      console.error(err);
    }
  }

  function sortMovieData() {
    if (movieData.results) {
      let data = {};
      data.results = sortMovies(sortBy, movieData.results);
      setMovieData(data);
    }
  }

  function renderMovieList(movieList) {
    return <MovieList movieList={movieList} />;
  }

  return (
    <div className="movieList">
      {movieData?.results ? renderMovieList(movieData.results) : null}
    </div>
  );
};
