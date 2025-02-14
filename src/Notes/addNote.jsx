import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [noteContent, setNoteContent] = useState(""); // Tilamuuttuja uudelle muistiinpanolle
  const navigate = useNavigate();

  // Funktio, joka käsittelee muistiinpanon tallennuksen
  const handleAddNote = async () => {
    if (!noteContent.trim()) {
      alert("Muistiinpano ei voi olla tyhjä!");
      return;
    }

    try {
      const accessToken = localStorage.getItem("accessToken"); // Haetaan JWT-token
      const response = await fetch(
        "https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // JWT-header mukaan
          },
          body: JSON.stringify({ content: noteContent }), // Lähetetään muistiinpano
        }
      );

      if (!response.ok) throw new Error("Muistiinpanon tallennus epäonnistui");

      alert("Muistiinpano lisätty!");
      navigate("/notes"); // Ohjataan takaisin Notes-listaan
    } catch (error) {
      console.error(error);
      alert("Muistiinpanon tallennus epäonnistui.");
    }
  };

  return (
    <div>
      <h2>Lisää uusi muistiinpano</h2>
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        rows={5}
        cols={50}
        placeholder="Kirjoita muistiinpano tähän..."
      />
      <div>
        <button onClick={handleAddNote}>Tallenna</button>
        <button onClick={() => navigate("/notes")}>Peruuta</button>
      </div>
    </div>
  );
};

export default AddNote;
