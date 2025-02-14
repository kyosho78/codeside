import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import './LoginUser.css';

const EditNote = () => {
  const { noteId } = useParams(); // Hakee ID:n URL:stä
  const [noteContent, setNoteContent] = useState(""); // Tilamuuttuja muistiinpanolle
  const navigate = useNavigate();

  // Haetaan muistiinpano ID:n perusteella
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/${noteId}/`);

        if (!response.ok) throw new Error("Muistiinpanon haku epäonnistui");
        const data = await response.json();
        setNoteContent(data.content); // Tallennetaan sisältö stateen
      } catch (error) {
        console.error(error);
        alert("Muistiinpanon haku epäonnistui.");
      }
    };

    fetchNote();
  }, [noteId]); // Suoritetaan vain kun noteId muuttuu

  // Funktio, joka tallentaa muokatun muistiinpanon
  const handleSaveNote = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Haetaan JWT-token
      const response = await fetch(`https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/${noteId}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ content: noteContent }), // Lähetetään muokattu sisältö
      });

      if (!response.ok) throw new Error("Muistiinpanon tallennus epäonnistui");
      alert("Muistiinpano tallennettu!");
      navigate('/notes'); // Ohjataan takaisin Notes-listaan
    } catch (error) {
      console.error(error);
      alert("Muistiinpanon tallennus epäonnistui.");
    }
  };

  return (
    <div>
      <h2>Muokkaa muistiinpanoa</h2>
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        rows={5}
        cols={50}
      />
      <button onClick={handleSaveNote}>Tallenna</button>
    </div>
  );
};

export default EditNote;
