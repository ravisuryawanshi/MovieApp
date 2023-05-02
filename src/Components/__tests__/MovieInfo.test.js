import { render } from "@testing-library/react";
import MovieInfo from "../MovieInfo";
import { MOVIE_DATA } from "../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOVIE_DATA);
    },
  });
});

const movieDetails = MOVIE_DATA.results[0];

test("should render movie details correctly", () => {
  const { getByText } = render(<MovieInfo movieDetails={movieDetails} />);
  expect(getByText(movieDetails.title)).toBeInTheDocument();
  expect(
    getByText(`Directed by: ${movieDetails.director}`)
  ).toBeInTheDocument();
});
