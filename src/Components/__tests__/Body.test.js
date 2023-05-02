import { render, screen, waitFor } from "@testing-library/react";
import { filterMovieUsingName, sortMovies } from "../utils/Helper";
import Body from "../Body";
import { MOVIE_DATA } from "../mocks/data";
jest.mock("../utils/Helper");
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOVIE_DATA);
    },
  });
});

test("renders the movie list when data is loaded ", async () => {
  filterMovieUsingName.mockResolvedValueOnce(MOVIE_DATA);
  const body = render(<Body />);
  await waitFor(() => {
    expect(filterMovieUsingName).toHaveBeenCalledTimes(1);
    expect(screen.getByText("The Phantom Menace")).toBeInTheDocument();
  });

  const movieList = body.getByTestId("table-container");
  expect(movieList.children.length).toBe(6);
});
