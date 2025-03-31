import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AddNote from "../Notes/addNote";

// Mock fetchWithAuth
vi.mock("../api", () => ({
  fetchWithAuth: vi.fn(),
}));

describe("AddNote", () => {
  it("renders form fields correctly", () => {
    render(
      <MemoryRouter>
        <AddNote />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Otsikko/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sisältö/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /💾 Tallenna/i })).toBeInTheDocument();
  });

  it("submits the form and calls fetchWithAuth", async () => {
    const { fetchWithAuth } = await import("../api");
    fetchWithAuth.mockResolvedValueOnce({ ok: true, text: () => Promise.resolve("OK") });

    render(
      <MemoryRouter>
        <AddNote />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Otsikko/i), {
      target: { value: "Test Note" },
    });

    fireEvent.change(screen.getByLabelText(/Sisältö/i), {
      target: { value: "Test content." },
    });

    fireEvent.click(screen.getByRole("button", { name: /💾 Tallenna/i }));

    await waitFor(() => {
      expect(fetchWithAuth).toHaveBeenCalledWith(expect.stringContaining("/api/Notes/"), expect.objectContaining({
        method: "POST"
      }));
    });
  });

  it("displays error message if fetch fails", async () => {
    const { fetchWithAuth } = await import("../api");
    fetchWithAuth.mockResolvedValueOnce({
      ok: false,
      text: () => Promise.resolve("Error")
    });

    render(
      <MemoryRouter>
        <AddNote />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Otsikko/i), {
      target: { value: "Virhe" },
    });

    fireEvent.change(screen.getByLabelText(/Sisältö/i), {
      target: { value: "Virhe sisältö." },
    });

    fireEvent.click(screen.getByRole("button", { name: /💾 Tallenna/i }));

    await waitFor(() => {
      expect(screen.getByText(/Muistiinpanon lisääminen epäonnistui/i)).toBeInTheDocument();
    });
  });
});
