import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";


test("Header renders with a dropdown and input field", () => {
  const setMovieName = jest.fn();
  const setSortParam = jest.fn();
  render(<Header setMovieName={setMovieName} setSortParam={setSortParam} />);

  const dropdown = screen.getByTestId("sortBy");

  const option1 = screen.getByText("Sort By");
  expect(option1).toBeInTheDocument();
  expect(option1.value).toBe("");

  const option2 = screen.getByText("Episode-Id");
  expect(option2).toBeInTheDocument();
  expect(option2.value).toBe("id");

  const option3 = screen.getByText("Year");
  expect(option3).toBeInTheDocument();
  expect(option3.value).toBe("year");

  fireEvent.change(dropdown, { target: { value: "year" } });
  expect(setSortParam).toHaveBeenCalledWith("year");

  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();
  expect(input.value).toBe("");

  fireEvent.change(input, { target: { value: "A New Hope" } });
  expect(setMovieName).toHaveBeenCalledWith("A New Hope");
});