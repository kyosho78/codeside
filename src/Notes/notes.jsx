import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseUrl = "https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/";

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(baseUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`Virhe: ${response.status}`);

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Muistiinpanojen lataaminen epäonnistui:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Haluatko varmasti poistaa muistiinpanon?")) {
      try {
        const response = await fetch(`${baseUrl}${id}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Virhe poistettaessa muistiinpanoa");

        setNotes(notes.filter((note) => note.id !== id));
      } catch (error) {
        console.error("Virhe poistettaessa muistiinpanoa:", error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-note/${id}`);
  };

  if (loading) {
    return <p className="text-center text-gray-300">Ladataan muistiinpanoja...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      {/* Otsikko + Uusi muistiinpano -nappi */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-0">
          Muistiinpanot
        </h2>
        <button
          onClick={() => navigate("/add-note")}
          className="bg-green-500 text-black px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base hover:bg-green-600 shadow-md"
        >
          ➕ Uusi muistiinpano
        </button>
      </div>

      {/* Taulukko */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 shadow-lg bg-gray-800 text-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-2 md:p-3 text-left">Otsikko</th>
              <th className="p-2 md:p-3 text-left">Sisältö</th>
              <th className="p-2 md:p-3 text-left">Luotu</th>
              <th className="p-2 md:p-3 text-left">Päivitetty</th>
              <th className="p-2 md:p-3 text-left">Toiminnot</th>
            </tr>
          </thead>
          <tbody>
            {notes.length > 0 ? (
              notes.map((note) => (
                <tr key={note.id} className="border-t border-gray-600 even:bg-gray-700">
                  <td className="p-2 md:p-3">{note.header}</td>
                  {/* <td className="p-2 md:p-3">{note.content}</td> */}
                  <td className="p-2 md:p-3 break-words whitespace-normal max-w-xs md:max-w-md">
                    {note.content}
                  </td>

                  <td className="p-2 md:p-3">{new Date(note.created).toLocaleString("fi-FI")}</td>
                  <td className="p-2 md:p-3">{new Date(note.updated).toLocaleString("fi-FI")}</td>
                  <td className="p-2 md:p-3 flex gap-1 md:gap-2">
                    <button
                      onClick={() => handleEdit(note.id)}
                      className="bg-blue-500 text-black px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm rounded hover:bg-blue-600 shadow-md"
                    >
                      ✏️ Muokkaa
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="bg-red-500 text-black px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm rounded hover:bg-red-600 shadow-md"
                    >
                      ❌ Poista
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-2 md:p-3 text-center text-gray-400">
                  Ei muistiinpanoja.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notes;
