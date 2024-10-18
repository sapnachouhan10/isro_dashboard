// Launchers.test.tsx

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Launchers from "./Launchers";
import useFetch from "../../hooks/useFetch";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useFetch");

describe("Launchers Component", () => {
  const mockUseFetch = useFetch as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <Launchers />
      </MemoryRouter>
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("renders error state", () => {
    mockUseFetch.mockReturnValue({
      data: null,
      loading: false,
      error: "Failed to fetch data",
    });

    render(
      <MemoryRouter>
        <Launchers />
      </MemoryRouter>
    );

    expect(screen.getByText("Error: Failed to fetch data")).toBeInTheDocument();
  });

  test("renders launchers data correctly", async () => {
    const mockData = [{ id: "Launcher 1" }, { id: "Launcher 2" }];

    mockUseFetch.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Launchers />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Launcher 1")).toBeInTheDocument();
      expect(screen.getByText("Launcher 2")).toBeInTheDocument();
    });
  });

  test("renders message when no launchers are available", () => {
    mockUseFetch.mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Launchers />
      </MemoryRouter>
    );

    expect(screen.getByText("No launchers available.")).toBeInTheDocument();
  });
});
