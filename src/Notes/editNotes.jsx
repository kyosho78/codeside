import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchWithAuth } from "../api";

const EditNotes = () => {
    const { id } = useParams(); // Haetaan id URL:sta
    const navigate = useNavigate();
    const baseUrl = "https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/Notes/";
    

    const [note, setNote] = useState({ header: "", content: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Haetaan muokattava muistiinpano
    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await fetchWithAuth(`${baseUrl}${id}/`, {
                    method: "GET",
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) throw new Error(`Virhe haettaessa muistiinpanoa: ${response.status}`);

                const data = await response.json();
                setNote(data);
            } catch (error) {
                console.error(error);
                setError("Muistiinpanon haku epäonnistui.");
            } finally {
                setLoading(false);
            }
        };

        fetchNote();
    }, [id]);

    // Käsitellään muokkauksen tallennus
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchWithAuth(`${baseUrl}${id}/`, {
                method: "PUT",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(note),
            });
            


        if (!response.ok) throw new Error("Virhe tallennettaessa muistiinpanoa.");

        navigate("/notes"); // Palataan takaisin muistiinpanojen listaukseen
        } catch (error) {
            console.error(error);
            setError("Tallennus epäonnistui.");
        }
    };

    if (loading) return <p className="text-center text-gray-600">Ladataan muistiinpanoa...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
          <div className="w-full max-w-lg bg-gray-800 shadow-lg rounded-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Muokkaa muistiinpanoa</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  
                  {/* <label className="font-medium">Otsikko:</label> */}
                  <label htmlFor="editHeader" className="font-medium">Otsikko:</label>
                  <input
                      id="editHeader"
                      type="text"
                      value={note.header}
                      onChange={(e) => setNote({ ...note, header: e.target.value })}
                      className="border border-gray-600 bg-gray-700 text-white p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500"
                  />
  
                  {/* <label className="font-medium">Sisältö:</label> */}
                  <label htmlFor="editContent" className="font-medium">Sisältö:</label>
                  <textarea
                      id="editContent"
                      value={note.content}
                      onChange={(e) => setNote({ ...note, content: e.target.value })}
                      className="border border-gray-600 bg-gray-700 text-white p-2 rounded-md w-full h-32 focus:ring-2 focus:ring-blue-500"
                  />
  
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={() => navigate("/notes")}
                            className="bg-[#56afe6] text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            ❌ Peruuta
                        </button>

                        <button
                            type="submit"
                            className="bg-[#56afe6] text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            💾 Tallenna
                        </button>

                    </div>
              </form>
          </div>
      </div>
  );
  
};

export default EditNotes;
