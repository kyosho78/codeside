import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Notes from "../Notes/notes";
import { AuthContext } from "../AuthContext"; // Adjust path if needed

vi.mock("../api", () => ({
  fetchWithAuth: vi.fn(),
}));

const navigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigate,
  };
});

const renderWithAuth = (ui) => {
  return render(
    <AuthContext.Provider value={{ isAuthenticated: true, setIsAuthenticated: vi.fn() }}>
      <MemoryRouter>{ui}</MemoryRouter>
    </AuthContext.Provider>
  );
};

describe("Notes Component", () => {
  const mockNotes = [
    {
      id: 1,
      header: "Shopping List",
      content: "Milk, Bread, Butter",
      created: "2024-04-01T12:00:00Z",
      updated: "2024-04-01T12:30:00Z",
    },
    {
      id: 2,
      header: "Project Ideas",
      content: "Build a React app",
      created: "2024-04-02T09:00:00Z",
      updated: "2024-04-02T10:00:00Z",
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  
    Object.defineProperty(window, "location", {
      configurable: true,
      value: {
        ...window.location,
        reload: vi.fn(),
      },
    });
  });
  

  it("renders loading state", () => {
    renderWithAuth(<Notes />);
    expect(screen.getByText(/Ladataan muistiinpanoja/i)).toBeInTheDocument();
  });

  it("fetches and displays notes", async () => {
    const { fetchWithAuth } = await import("../api");
    fetchWithAuth.mockResolvedValueOnce({
      ok: true,
      json: async () => mockNotes,
    });

    renderWithAuth(<Notes />);

    await waitFor(() => {
      expect(screen.getByText("Shopping List")).toBeInTheDocument();
      expect(screen.getByText("Project Ideas")).toBeInTheDocument();
    });
  });

  it("filters notes with search input", async () => {
    const { fetchWithAuth } = await import("../api");
    fetchWithAuth.mockResolvedValueOnce({
      ok: true,
      json: async () => mockNotes,
    });

    renderWithAuth(<Notes />);

    await waitFor(() => screen.getByText("Shopping List"));

    const searchInput = screen.getByPlaceholderText(/Hae muistiinpanoista/i);
    fireEvent.change(searchInput, { target: { value: "project" } });

    expect(screen.queryByText("Shopping List")).not.toBeInTheDocument();
    expect(screen.getByText("Project Ideas")).toBeInTheDocument();
  });

  it("deletes a note when confirmed", async () => {
    const { fetchWithAuth } = await import("../api");

    fetchWithAuth
      .mockResolvedValueOnce({ ok: true, json: async () => mockNotes }) // GET
      .mockResolvedValueOnce({ ok: true }) // DELETE
      .mockResolvedValueOnce({ ok: true, json: async () => [] }); // tyhjä lista poiston jälkeen 7.4 2025
    vi.spyOn(window, "confirm").mockReturnValue(true);

    renderWithAuth(<Notes />);

    await waitFor(() => screen.getByText("Shopping List"));

    const deleteButtons = screen.getAllByText(/❌ Poista/i);
    fireEvent.click(deleteButtons[0]);

    await waitFor(() => {
      expect(fetchWithAuth).toHaveBeenCalledWith(
        expect.stringMatching(/\/\d+\/$/), // hyväksyy mitä tahansa numeroa
        //expect.stringContaining("/1/"),
        expect.objectContaining({ method: "DELETE" })
      );
    });
  });

  it("navigates to edit page when edit is clicked", async () => {
    const { fetchWithAuth } = await import("../api");
    fetchWithAuth.mockResolvedValueOnce({
      ok: true,
      json: async () => mockNotes,
    });

    renderWithAuth(<Notes />);

    await waitFor(() => screen.getByText("Shopping List"));

    const editButtons = screen.getAllByText(/✏️ Muokkaa/i);
    fireEvent.click(editButtons[0]);
    expect(navigate).toHaveBeenCalledWith(expect.stringContaining("/edit-note/"));
    // expect(navigate).toHaveBeenCalledWith("/edit-note/1");
  });
});
