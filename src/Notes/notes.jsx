import React, { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]); // Tila muistiinpanot
  const [loading, setLoading] = useState(true); // Latauksen tila

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          "https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/",
          {
            method: "GET",
            mode: "cors",  
            headers: {
              "Content-Type": "application/json",
              // Ei Authorization-headeria, koska autentikointi ei ole käytössä!
            },
          }
        );

        if (!response.ok) throw new Error(`Virhe: ${response.status}`);

        const data = await response.json();
        setNotes(data); // Tallennetaan muistiinpanot stateen
      } catch (error) {
        console.error("Muistiinpanojen lataaminen epäonnistui:", error);
      } finally {
        setLoading(false); // Lataus valmis
      }
    };

    fetchNotes();
  }, []); // Suoritetaan vain kerran

  if (loading) {
    return <p>Ladataan muistiinpanoja...</p>;
  }

  return (
    <div>
      <h2>Muistiinpanot</h2>
      <ul>
        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={note.id}>
              <strong>{note.header}</strong>
              <p>{note.content}</p>
              <p><i>{note.tags}</i></p>
            </li>
          ))
        ) : (
          <p>Ei muistiinpanoja.</p>
        )}
      </ul>
    </div>
  );
};

export default Notes;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Notes = () => {
//   const [notes, setNotes] = useState([]); // Tila muistiinpanoille
//   const [loading, setLoading] = useState(true); // Lataustilan hallinta

//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const accessToken = localStorage.getItem("accessToken"); // Haetaan JWT-token
//         const response = await fetch(
//           "https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${accessToken}`, // Token mukaan
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Muistiinpanojen haku epäonnistui");

//         const data = await response.json();
//         setNotes(data); // Tallennetaan muistiinpanot tilaan
//       } catch (error) {
//         console.error(error);
//         alert("Muistiinpanojen lataaminen epäonnistui.");
//       } finally {
//         setLoading(false); // Asetetaan lataustila pois päältä
//       }
//     };

//     fetchNotes();
//   }, []); // Suoritetaan kerran, kun komponentti ladataan

//   // Poistofunktio
//   const handleDeleteNote = async (noteId) => {
//     if (!window.confirm("Haluatko varmasti poistaa tämän muistiinpanon?")) {
//       return;
//     }

//     try {
//       const accessToken = localStorage.getItem("accessToken");
//       const response = await fetch(
//         `https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/Notes/${noteId}/`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) throw new Error("Muistiinpanon poisto epäonnistui");

//       // Päivitetään tila poistamalla valittu muistiinpano listasta
//       setNotes(notes.filter((note) => note.id !== noteId));

//       alert("Muistiinpano poistettu!");
//     } catch (error) {
//       console.error(error);
//       alert("Muistiinpanon poistaminen epäonnistui.");
//     }
//   };

//   if (loading) {
//     return <p>Ladataan muistiinpanoja...</p>;
//   }

//   return (
//     <div>
//       <h2>Muistiinpanot</h2>
//       <ul>
//         {notes.length > 0 ? (
//           notes.map((note) => (
//             <li key={note.id}>
//               <Link to={`/notes/edit/${note.id}`}>{note.content}</Link>
//               <button onClick={() => handleDeleteNote(note.id)}>Poista</button>
//             </li>
//           ))
//         ) : (
//           <p>Ei muistiinpanoja.</p>
//         )}
//       </ul>
//       <Link to="/notes/add">
//         <button>Lisää uusi muistiinpano</button>
//       </Link>
//     </div>
//   );
// };

// export default Notes;
