//Toimii
// import { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState(""); // 🔹 Lisätty error-tila

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Nollataan error ennen uutta pyyntöä

//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/login/", {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         setMessage("Login successful!");
//       } else {
//         const data = await response.json();
//         setError(data.error || "Login failed"); // 🔹 Tallennetaan virheviesti erilliseen tilaan
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Login error"); // 🔹 Virheiden käsittely
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h2 className="text-2xl mb-4">Kirjaudu sisään</h2>
//       <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//         {error && <p className="text-red-500 text-center">{error}</p>} {/* 🔹 Nyt error toimii oikein */}

//         <div className="mb-4">
//           <label className="block text-sm font-medium">Käyttäjätunnus</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium">Salasana</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
//         >
//           Kirjaudu sisään
//         </button>
//       </form>
//       {message && <p className="text-green-500">{message}</p>}
//     </div>
//   );
// };

// export default Login;

// import { useState, useEffect } from "react";

// const Login = ({ setAuthState }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [userData, setUserData] = useState(null); // Käyttäjätiedot

  
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");
    
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/login/", {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         setMessage("Login successful!");
//         checkAuth(); // Tarkista autentikointi heti kirjautumisen jälkeen
//       } else {
//         const data = await response.json();
//         setMessage(data.error || "Login failed");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setMessage("Login error");
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/logout/", {
//         method: "POST",
//         credentials: "include",
//       });

//       if (response.ok) {
//         setIsAuthenticated(false);
//         console.log("✅ Logout successful");
//       } else {
//         console.error("❌ Logout failed");
//       }
//     } catch (error) {
//       console.error("❌ Error during logout:", error);
//     }
//   };

  
//   const refreshToken = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
//         method: "POST",
//         credentials: "include",
//       });

//       if (response.ok) {
//         console.log("✅ Refresh token successful!");
//         return true;
//       } else {
//         console.error("❌ Refresh token failed!");
//         return false;
//       }
//     } catch (error) {
//       console.error("❌ Error refreshing token:", error);
//       return false;
//     }
//   };

//   const checkAuth = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/profile/", {
//         method: "GET",
//         credentials: "include",
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUserData(data);
//         setMessage("User authenticated!");
//         setAuthState(true);  // Päivitetään Navbarille tieto
//       } else {
//         console.warn("🔄 Access token expired, trying to refresh...");
//         const refreshed = await refreshToken();
//         if (refreshed) {
//           checkAuth();
//         } else {
//           setMessage("User not authenticated");
//           setAuthState(false); // Päivitetään Navbarille tieto
//         }
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setMessage("Authentication check failed");
//       setAuthState(false);
//     }
//   };
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h2 className="text-2xl mb-4">Kirjaudu sisään</h2>
//       <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//         <div className="mb-4">
//           <label className="block text-sm font-medium">Käyttäjätunnus</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium">Salasana</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
//         >
//           Kirjaudu sisään
//         </button>
//       </form>

//       <button
//         onClick={checkAuth}
//         className="mt-4 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
//       >
//         Tarkista autentikointi
//       </button>

//       <p>{message}</p>

//       {userData && (
//         <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
//           <h3 className="text-lg font-bold">Käyttäjätiedot:</h3>
//           <p><strong>Käyttäjänimi:</strong> {userData.username}</p>
//           <p><strong>Email:</strong> {userData.email}</p>
//           <p><strong>Admin:</strong> {userData.is_superuser ? "Kyllä" : "Ei"}</p>
//         </div>
//       )}
//     </div>
    
//   );
// };

// export default Login;
//klo22.57 2.3  asettaa evästeisiin tokenit. refresh toimii myös. 
import { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   checkAuth();
  // }, []);

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
        setMessage("✅ Login successful!");
        setIsAuthenticated(true); // 🔹 Päivittää tilan onnistuneen kirjautumisen jälkeen
        checkAuth(); // 🔹 Päivittää käyttäjätiedot automaattisesti
      } else {
        const data = await response.json();
        setMessage(data.error || "❌ Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Login error");
    }
  };

  const refreshToken = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        console.log("✅ Refresh token successful!");
        return true;
      } else {
        console.error("❌ Refresh token failed!");
        return false;
      }
    } catch (error) {
      console.error("❌ Error refreshing token:", error);
      return false;
    }
  };

  const checkAuth = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/profile/", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setIsAuthenticated(true);
        setMessage("✅ User authenticated!");
      } else {
        console.warn("🔄 Access token expired, trying to refresh...");
        const refreshed = await refreshToken();
        if (refreshed) {
          checkAuth(); // 🔄 Kokeile uudestaan uusitulla tokenilla
        } else {
          setIsAuthenticated(false);
          setMessage("❌ User not authenticated");
        }
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Authentication check failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
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
          className="w-full bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
        >
          Kirjaudu sisään
        </button>
      </form>

      <button
        onClick={checkAuth}
        className="mt-4 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
      >
        Tarkista autentikointi
      </button>

      <p>{message}</p>

      {userData && (
        <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Käyttäjätiedot:</h3>
          <p><strong>Käyttäjänimi:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Admin:</strong> {userData.is_superuser ? "Kyllä" : "Ei"}</p>
        </div>
      )}
    </div>
  );
};

export default Login;

