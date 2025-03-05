//Toimiva login 5.3
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
        
        setIsAuthenticated(true); //  Päivittää tilan onnistuneen kirjautumisen jälkeen. Laukaisee useEffectin (yllä)
        //joka taas  laukaisee  checkAuth funktion (alla), joka tarkistaa tokenin voimassaolon.
        setMessage("✅ Kirjautuminen onnistui!");
        console.log("isAuthenticated tila päivitetty:", true);
        setTimeout(() => {
          navigate("/"); 
        }, 2000);
        //checkAuth(); //  Päivittää käyttäjätiedot automaattisesti
      } else {
        const data = await response.json();
        setMessage(data.error || " Kirjautuminen epäonnistui ");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage(" Kirjautumisvirhe ");
    }
  };



  const checkAuth = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/profile/", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {        
        setIsAuthenticated(true);
        setMessage("Kirjautuminen onnistui!");
        

      } else {
        console.warn("🔄 Access token expired, trying to refresh...");
        const refreshed = await refreshToken();
        if (refreshed) {
          checkAuth(); // 🔄 Kokeile uudestaan uusitulla tokenilla
        } else {
          setIsAuthenticated(false);
          setMessage("❌ Käyttäjä ei autentikoitunut!");
        }
      }

    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Authentication check failed React");
    }
  };

  const refreshToken = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log("✅ Token uusittu onnistuneesti!");
        return true;
      } else {
        console.error("❌ Token päivitys epäonnistui!");
        return false;
      }
    } catch (error) {
      console.error("❌ Ongelma tokenin uusimisessa:", error);
      return false;
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

