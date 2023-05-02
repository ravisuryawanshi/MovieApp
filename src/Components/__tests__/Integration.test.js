import {
  render,
  fireEvent,
  screen,
  act,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieApp from "../MovieApp";
import { MOVIE_DATA } from "../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOVIE_DATA);
    },
  });
});

afterEach(() => {
  cleanup();
});

test("Sort using Episode Id ", async () => {
  render(<MovieApp />);

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  const dropdown = screen.getByTestId("sortBy");
  fireEvent.change(dropdown, { target: { value: "id" } });

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
  //After sorting first row should contain episode 1.
  const episodeCol = screen.getAllByTestId("episode-id");
  expect(episodeCol[0].innerHTML).toBe("EPISODE 1");
});

test("Search using string (A New Hope) ", async () => {
  render(<MovieApp />);

  const searchInput = screen.getByPlaceholderText("Search");
  fireEvent.change(searchInput, {
    target: {
      value: "A New Hope",
    },
  });

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  //After searching there should be only one row in the table.
  const movieList = screen.getByTestId("table-container");
  expect(movieList.children.length).toBe(1);

  expect(screen.getByText("A New Hope")).toBeInTheDocument();
});
