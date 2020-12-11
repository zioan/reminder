import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders my videos", () => {
  render(<App />);
  const linkElement = screen.getByText(/my videos/i);
  expect(linkElement).toBeInTheDocument();
});
