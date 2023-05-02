export const getMovieData = async () => {
  const response = await fetch("https://swapi.dev/api/films/?format=json");
  const data = await response.json();
  return data;
};
