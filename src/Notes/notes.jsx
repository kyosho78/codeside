import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import{fetchWithAuth} from "../api.js";
import Navbar from "../components/Navbar";


//Statet
const Notes = (isAuthenticated) => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //  Hakutermi
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseUrl = "https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/Notes/";
 



  //Ajetaan vain kun käyttäjä on kirjautunut
  useEffect(() => {
    if (isAuthenticated) {
        fetchNotes();
    }
}, [isAuthenticated]);
  
  const fetchNotes = async () => {
    try {
      const response = await fetchWithAuth(baseUrl, {
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

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetchWithAuth("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/profile/", {
                    method: "GET",
                    credentials: "include",
                });

                if (!response.ok) {
                    navigate("/login");  // 🔹 Ohjataan login-sivulle
                    console.log("iflohko"); // 🔹 Jos tulee virhe, ohjataan login-sivulle
                    window.location.reload();  // 🔹 Pakotetaan uusimaan näkymä
                }
            } catch {
                navigate("/login");
                console.log("catchlohko"); // 🔹 Jos tulee virhe, ohjataan login-sivulle
                window.location.reload();  // 🔹 Estetään cache-version käyttäminen
            }
        };

        checkAuth();
    }, []);
  
  

  // Muokkaa muistiinpanoa (navigoi muokkaussivulle)
  const handleEdit = (id) => {
    navigate(`/edit-note/${id}`);
  };

  // Poistaa muistiinpanon
  const handleDelete = async (id) => {
    if (!window.confirm("Haluatko varmasti poistaa tämän muistiinpanon?")) return;

    try {
      const response = await fetchWithAuth(`${baseUrl}${id}/`, {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`Virhe poistossa: ${response.status}`);

      // Poistetaan muistiinpano tilasta ilman uutta API-pyyntöä
      setNotes(notes.filter(note => note.id !== id));
    } catch (error) {
      console.error("Muistiinpanon poistaminen epäonnistui:", error);
    }
  };

  // Filtteröidään muistiinpanot hakusanan perusteella
  const filteredNotes = notes.filter(note =>
    note.header.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-white">Ladataan muistiinpanoja...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20 md:pt-32 lg:pt-24">
        <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Muistiinpanot</h1>

          {/* Hakukenttä ja nappi */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <button
              onClick={() => navigate("/add-note")}
              style={{color: "black", backgroundColor: "white"}} //Lisätty 31.3
              className=" px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
            >
              ➕ Uusi muistiinpano
            </button>

            <input
              type="text"
              id="searchInput"
              placeholder="🔍 Hae muistiinpanoista..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{color: "black", backgroundColor: "white"}} //Lisätty 31.3
              className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 w-full md:w-1/3"
            />
          </div>

          {/* Taulukko */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 shadow bg-gray-800 text-gray-300 text-sm md:text-base">
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
                {filteredNotes.length > 0 ? (
                  filteredNotes.map((note) => (
                    <tr key={note.id} className="border-t border-gray-600 even:bg-gray-700">
                      <td className="p-2 md:p-3">{note.header}</td>
                      <td className="p-2 md:p-3 break-words max-w-xs md:max-w-md">
                        {note.content}
                      </td>
                      <td className="p-2 md:p-3">
                        {new Date(note.created).toLocaleString("fi-FI")}
                      </td>
                      <td className="p-2 md:p-3">
                        {new Date(note.updated).toLocaleString("fi-FI")}
                      </td>
                      <td className="p-2 md:p-3 flex flex-wrap gap-2">
                        <button
                          onClick={() => handleEdit(note.id)}
                          style={{color: "black", backgroundColor: "white"}} //Lisätty 31.3
                          className="text-sm px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                          ✏️ Muokkaa
                        </button>
                        <button
                          onClick={() => handleDelete(note.id)}
                          style={{color: "black", backgroundColor: "white"}} //Lisätty 31.3
                          className="text-sm px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                          ❌ Poista
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-2 md:p-3 text-center text-white-400">
                      Ei hakutuloksia.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
  
}
export default Notes;

