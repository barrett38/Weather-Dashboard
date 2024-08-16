import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("calls onSubmit with the city name when form is submitted", () => {
  const onSubmit = jest.fn();
  render(<SearchBar onSubmit={onSubmit} />);

  const input = screen.getByPlaceholderText(/enter city name/i);
  fireEvent.change(input, { target: { value: "London" } });
  fireEvent.submit(screen.getByRole("form"));

  expect(onSubmit).toHaveBeenCalledWith("London");
});
