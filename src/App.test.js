import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  it("renders NY Times Most Popular Articles heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/NY Times Most Popular Articles/i);
    expect(headingElement).toBeInTheDocument();
  });
});
