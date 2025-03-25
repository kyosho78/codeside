    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { fetchWithAuth } from "../api";
    
    const AddNote = () => {
        const navigate = useNavigate();
        const baseUrl = 'https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/Notes/';
    
        const [note, setNote] = useState({ header: "", content: "" });
        const [error, setError] = useState(null);
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const requestBody = JSON.stringify({
                    header: note.header,
                    content: note.content,
                });
    
                console.log("Lähetettävä data:", requestBody);
    
                const response = await fetchWithAuth(baseUrl, {
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: requestBody,
                });
    
                const responseData = await response.text();
                console.log("Vastaus body:", responseData);
    
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

export default AddNote;
