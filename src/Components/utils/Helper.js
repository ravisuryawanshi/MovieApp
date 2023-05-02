import { getMovieData } from "../MobileAppWebAPI";

export async function filterMovieUsingName(movieName) {
  let data = await getMovieData();
  if (movieName.length == 0) {
    return data;
  }
  const filteredMovie = data.results.filter((movie) =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );
  data.results = filteredMovie;
  return data;
}

export function sortMovies(sortBy, movieList) {
  switch (sortBy) {
    case "id":
      movieList.sort(function (a, b) {
        return a.episode_id - b.episode_id;
      });

      break;
    case "year":
      movieList.sort(function (a, b) {
        var year1 = a.release_date.split("-")[0];
        var year2 = b.release_date.split("-")[0];
        return year1 - year2;
      });
      break;
  }
  return movieList;
}
