import React from "react";
import { render, screen } from "@testing-library/react";
import LocationItem from "./index";

test("renders location", () => {
  render(<LocationItem cordinate={[123, 123]} index={0} />);
  const locationElement = screen.getByText(/Location/i);
  expect(locationElement).toBeInTheDocument();
});

test("renders longitude", () => {
  render(<LocationItem cordinate={[123, 123]} index={0} />);
  const longitudeElement = screen.getByText(/Long/i);
  expect(longitudeElement).toBeInTheDocument();
});

test("renders latitude", () => {
  render(<LocationItem cordinate={[123, 123]} index={0} />);
  const lattitudeElement = screen.getByText(/Lat/i);
  expect(lattitudeElement).toBeInTheDocument();
});
