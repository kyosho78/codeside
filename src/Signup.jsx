/*
  Signup.jsx writen by: Valter Backström
  This component is used to create a new user account. It sends a POST request to the backend with the user's email, username, and password.

*/


import { useState } from "react";
import { useNavigate } from "react-router-dom";

// This component is used to create a new user account. It sends a POST request to the backend with the user's email, username, and password.
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    setMessage(""); // Clear any previous message

    try {
      // Send a POST request to the backend with the user's email, username, and password
      const response = await fetch("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }), // Convert the data to JSON format
      });

      if (response.ok) {
        // If the response is OK, show a success message and navigate to the login page after 2 seconds
        setMessage("Rekisteröinti onnistui! Voit nyt kirjautua sisään.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        const data = await response.json(); // Parse the JSON response from the server

        // If the response is not OK, extract the error messages from the response and render them in Finnish
        const translateError = (msg) => {
          if (msg === "This field must be unique.") return "Tämä on jo käytössä.";
          if (msg === "A user with that username already exists.") return "Käyttäjänimi on jo käytössä.";
          if (msg === "user with this email already exists.") return "Sähköposti on jo käytössä.";
          if (msg === "This field is required.") return "Kenttä on pakollinen.";
          if (msg === "Enter a valid email address.") return "Syötä kelvollinen sähköpostiosoite.";
          return msg;
        };

        // Extract the error messages from the response data ("Kenttä: Virheviesti")
        const errorMessages = Object.entries(data)
          .map(([field, messages]) => {
            const fieldName = field === "username" ? "Käyttäjänimi" :
                              field === "email" ? "Sähköposti" :
                              field === "password" ? "Salasana" : field;

            const translatedMessages = messages.map(translateError).join(" ");
            return `${fieldName}: ${translatedMessages}`;
          })
          .join(" ");

        setMessage(errorMessages || "Rekisteröinti epäonnistui.");
        setTimeout(() => setMessage(""), 5000); // Poistaa ilmoituksen 5 sekunnin kuluttua
      }
    } catch (error) {
      console.error("Signup error:", error); // Log the error to the console for debugging
      setMessage("Virhe rekisteröityessä.");
      setTimeout(() => setMessage(""), 5000); // Poistaa ilmoituksen 5 sekunnin kuluttua
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative">

      {/* 🔹 Keskitetty ilmoitus, esim. virhe tai onnistuminen */}
      {message && (
        <div className="mb-4 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-md max-w-sm text-center z-50 max-w-sm w-full">
          {message}
        </div>
      )}

      <h2 className="text-2xl mb-4">Luo käyttäjä</h2>

      <div className="w-full max-w-sm mx-auto">
        <form onSubmit={handleSignup} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          <input
            type="email"
            placeholder="Sähköposti"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Käyttäjänimi"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Salasana"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
          >
            Rekisteröidy
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
