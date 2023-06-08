import { render, screen } from "@testing-library/react";
import EventsInList from "./EventsInList";

test("renders learn react link", () => {
  render(<EventsInList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
