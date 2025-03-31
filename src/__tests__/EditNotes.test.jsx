import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from "vitest";
import EditNotes from "../Notes/editNotes";

// Mock fetchWithAuth
vi.mock("../api", () => ({
  fetchWithAuth: vi.fn(),
}));

describe("EditNotes", () => {
  const mockNote = {
    id: 1,
    header: "Original Header",
    content: "Original Content",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderWithRouter(id = "1") {
    render(
      <MemoryRouter initialEntries={[`/edit-note/${id}`]}>
        <Routes>
          <Route path="/edit-note/:id" element={<EditNotes />} />
        </Routes>
      </MemoryRouter>
    );
  }

  it("shows loading state initially", () => {
    renderWithRouter();
    expect(screen.getByText(/Ladataan muistiinpanoa/i)).toBeInTheDocument();
  });

  it("fetches and displays note data", async () => {
    const { fetchWithAuth } = await import("../api");
    fetchWithAuth.mockResolvedValueOnce({
      ok: true,
      json: async () => mockNote,
    });

    renderWithRouter();

    await waitFor(() => {
      expect(screen.getByDisplayValue(mockNote.header)).toBeInTheDocument();
      expect(screen.getByDisplayValue(mockNote.content)).toBeInTheDocument();
    });
  });

  it("updates form and submits edited note", async () => {
    const { fetchWithAuth } = await import("../api");

    // First GET
    fetchWithAuth.mockResolvedValueOnce({
      ok: true,
      json: async () => mockNote,
    });

    // Then PUT
    fetchWithAuth.mockResolvedValueOnce({
      ok: true,
    });

    renderWithRouter();

    await waitFor(() => {
      expect(screen.getByDisplayValue(mockNote.header)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/Otsikko/i), {
      target: { value: "Updated Header" },
    });

    fireEvent.change(screen.getByLabelText(/Sisältö/i), {
      target: { value: "Updated Content" },
    });

    fireEvent.click(screen.getByRole("button", { name: /💾 Tallenna/i }));

    await waitFor(() => {
      expect(fetchWithAuth).toHaveBeenCalledWith(expect.stringContaining("/1/"), expect.objectContaining({
        method: "PUT",
      }));
    });
  });

  it("shows error if fetch fails", async () => {
    const { fetchWithAuth } = await import("../api");
    fetchWithAuth.mockResolvedValueOnce({ ok: false });

    renderWithRouter();

    await waitFor(() => {
      expect(screen.getByText(/Muistiinpanon haku epäonnistui/i)).toBeInTheDocument();
    });
  });
});
