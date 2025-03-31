import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  // Tarkistaa onko käyttäjä jo kirjautunut sessiolla
  useEffect(() => {
    checkAuth();
  }, []);

  // Poistaa ilmoituksen automaattisesti
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // **Kirjautuminen**
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/login/", {
        method: "POST",
        credentials: "include", // ✅ Käyttää sessioevästettä
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setIsAuthenticated(true); // 🔹 Päivittää kirjautumistilan
        setMessage("✅ Kirjautuminen onnistui!");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        const data = await response.json();
        setMessage(data.error || " Kirjautuminen epäonnistui. Tarkista sähköposti ja salasana.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage(" Kirjautumisvirhe ");
    }
  };

  // **Tarkistaa onko käyttäjä jo kirjautunut**
  const checkAuth = async () => {
    try {
      const response = await fetch("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/profile/", {
        method: "GET",
        credentials: "include", 
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* 🔹 Keskitetty ilmoitus */}
      {message && (
        <div className="mb-4 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-md max-w-sm text-center z-50 max-w-sm w-full">
          {message}
        </div>
      )}

      <h2 className="text-2xl mb-4">Kirjaudu sisään</h2>

      <div className="w-full max-w-sm mx-auto">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium">Sähköposti</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      <p className="text-center text-sm mt-2 text-blue-400 hover:underline cursor-pointer" onClick={() => navigate("/reset-password")}>
        Unohtuiko salasana?
      </p>

    </div>
    </div>
  );
};

export default Login;




