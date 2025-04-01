/*
  ResetPassword.jsx writen by: Valter Backström
  This component is used to reset the password of a user. It sends a POST request to the backend with the email address of the user.

*/


import { useState } from "react"; // Importing useState from React to manage state in the component

const ResetPassword = () => {
  const [email, setEmail] = useState(""); // State to store the email address entered by the user
  const [message, setMessage] = useState(""); // State to store the message to be displayed to the user

  const handleReset = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    setMessage(""); // Clear any previous message

    try {
      const response = await fetch("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/password-reset/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // Send the email address as JSON in the request body
      });

      if (response.ok) {
        setMessage("Salasanan palautuslinkki on lähetetty sähköpostiisi.");
      } else {
        setMessage("Tarkista sähköpostiosoite.");
      }
    } catch (err) {
      console.error("Reset error:", err);
      setMessage("Virhe pyynnössä."); // Display error message if the request fails
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {message && (
        <div className="mb-4 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-md max-w-sm text-center">
          {message}
        </div>
      )}

      <h2 className="text-2xl mb-4">Salasanan palautus</h2>
      <form onSubmit={handleReset} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full space-y-4">
        <input
          type="email"
          placeholder="Sähköposti"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
        >
          Lähetä palautuslinkki
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
