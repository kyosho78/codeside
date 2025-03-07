import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithAuth } from "./api.js";


const Login = ({isAuthenticated, setIsAuthenticated} ) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  

  useEffect(() => { 
    if (isAuthenticated) {
        checkAuth();
    }
 }, [isAuthenticated]);

 useEffect(() => {
  if (message) {
    const timer = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(timer);
  }
}, [message]);

const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        
        setIsAuthenticated(true); //  Päivittää tilan App.jsx tiedostossa onnistuneen kirjautumisen jälkeen. Laukaisee useEffectin (yllä)
        //joka taas  laukaisee  checkAuth funktion (alla), joka tarkistaa tokenin voimassaolon.

        setTimeout(() => {
          navigate("/"); 
        }, 2000);
        
      } else {
        const data = await response.json();
        setMessage(data.error || " Kirjautuminen epäonnistui ");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage(" Kirjautumisvirhe ");
    }
  };


//Varmistaa tokenin voimassaolon
  const checkAuth = async () => {
    try {
      const response = await fetchWithAuth("http://127.0.0.1:8000/api/profile/", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {        
        setIsAuthenticated(true);
        setMessage("✅ Kirjautuminen onnistui!");
        

      } else {
        console.warn("Token vanhentunut. Yritetään uusia...");
        const refreshed = await refreshToken();//Funktio tokenin uusimiseen api.js tiedostossa
        if (refreshed) {
          checkAuth(); //  Kokeile uudestaan uusitulla tokenilla
        } else {
          setIsAuthenticated(false);
          setMessage(" Käyttäjä ei autentikoitunut!");
        }
      }

    } catch (err) {
      console.error("Error:", err);
      setMessage("Käyttäjän tarkistus epäonnistui");
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* 🔹 Näytetään ilmoitus */}
      {message && (
        <div className="fixed top-5 right-5 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-xl">
          {message}
        </div>
      )}
      <h2 className="text-2xl mb-4">Kirjaudu sisään</h2>
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium">Käyttäjätunnus</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Salasana</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full !bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
        >
          Kirjaudu
        </button>
      </form>

       <button
        onClick={() => navigate("/")} // 🔹 Vie käyttäjän etusivulle
        className="mt-6 !bg-gray-600 hover:bg-gray-700 !text-white font-bold py-2 px-4 rounded"
      >
        Peruuta
      </button>



    </div>
  );
};

export default Login;

