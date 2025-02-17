import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
    const navigate = useNavigate();
    const baseUrl = "https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/";

    const [note, setNote] = useState({ header: "", content: "" });
    const [error, setError] = useState(null);

    // Käsitellään lomakkeen lähetys (POST)
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const requestBody = JSON.stringify({
              owner: "2", //Testikäyttäjä
              header: note.header,  
              content: note.content,
          });
  
          console.log("Lähetettävä JSON:", requestBody);
  
          const response = await fetch(baseUrl, {
              method: "POST",
              mode: "cors",
              headers: {
                  "Content-Type": "application/json",
              },
              body: requestBody,
          });
  
          console.log("Vastaus:", response.status, response.statusText, await response.text());
  
          if (!response.ok) {
              throw new Error(`Virhe lisättäessä muistiinpanoa: ${response.status}`);
          }
  
          navigate("/notes");
      } catch (error) {
          console.error("Virhe:", error.message);
          setError(`Muistiinpanon lisääminen epäonnistui: ${error.message}`);
      }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="w-full max-w-lg bg-gray-800 shadow-lg rounded-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Lisää uusi muistiinpano</h2>

            {error && (
                <p className="text-center text-red-400 bg-red-800 p-2 rounded-md mb-4">
                    {error}
                </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label className="font-medium">Otsikko:</label>
                <input
                    type="text"
                    value={note.header}
                    onChange={(e) => setNote({ ...note, header: e.target.value })}
                    className="border border-gray-600 bg-gray-700 text-white p-2 rounded-md w-full focus:ring-2 focus:ring-green-500"
                    required
                />

                <label className="font-medium">Sisältö:</label>
                <textarea
                    value={note.content}
                    onChange={(e) => setNote({ ...note, content: e.target.value })}
                    className="border border-gray-600 bg-gray-700 text-white p-2 rounded-md w-full h-32 focus:ring-2 focus:ring-green-500"
                    required
                />

                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={() => navigate("/notes")}
                        className="bg-gray-500 text-black px-4 py-2 rounded-md hover:bg-gray-600 hover:bg-opacity-80 transition"
                    >
                        ❌ Peruuta
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 hover:bg-opacity-80 transition"
                    >
                        💾 Tallenna
                    </button>
                </div>
            </form>
        </div>
    </div>
);

  
    


    
};

export default AddNote;
