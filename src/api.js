let refreshAttempts = 0; // Globaali muuttuja

export const fetchWithAuth = async (url, options = {}) => {
    if (!options.headers) {
        options.headers = {};
    }
    options.credentials = "include"; // Varmistaa evästeiden käytön
    
    let response = await fetch(url, options);

    console.log("🔍 FETCH RESPONSE HEADERS:", response.headers); // 🟢 UUSI LOGI
    console.log("🔍 FETCH RESPONSE COOKIES (document.cookie):", document.cookie); // 🟢 UUSI LOGI

    if (response.status === 401 && refreshAttempts < 2) { // 🔄 Max 2 kertaa uusiminen
        console.warn("🔄 Token vanhentunut. Yritetään uusia..");
        refreshAttempts++; // Kasvatetaan laskuria

        const refreshed = await refreshToken();
        if (refreshed) {
            return fetchWithAuth(url, options); // Yritetään uudestaan uusitulla tokenilla
        } else {
            console.error("❌ Refresh token epäonnistui!");
            refreshAttempts = 0; // Nollataan laskuri
            throw new Error("Unauthorized: Please log in again.");
        }
    }

    refreshAttempts = 0; // Nollataan laskuri, jos pyyntö onnistuu
    return response;
};


export const refreshToken = async () => {
  try {
      const response = await fetch("https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/refresh/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          credentials: "include", // ✅ Eväste lähetetään automaattisesti
      });

      console.log("🔵 REFRESH RESPONSE STATUS:", response.status); // 🟢 UUSI LOGI
      console.log("🔵 REFRESH RESPONSE HEADERS:", response.headers); // 🟢 UUSI LOGI
      console.log("🔵 REFRESH RESPONSE COOKIES (document.cookie):", document.cookie); // 🟢 UUSI LOGI

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




//   const getCookie = (name) => {
//     console.log("getCookie called with name:", name);
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].trim();
//         if (cookie.startsWith(name + '=')) {
//             const value = cookie.substring(name.length + 1);
//             console.log("getCookie found cookie:", name, value);
//             return value;
//         }
//     }
//     console.log("getCookie cookie not found:", name);
//     return undefined;
// };




//   const getCookie = (name) => {
//     console.log("getCookie called with name:", name); // Lisää tämä
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) {
//       console.log("getCookie found cookie:", name, cookieValue);
//         return parts.pop().split(";").shift();
//     }
// };

// const getCookie = (name) => {
//   console.log("getCookie called with name:", name);
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) {
//       const cookieValue = parts.pop().split(";").shift();
//       console.log("getCookie found cookie:", name, cookieValue);
//       return cookieValue;
//   }
//   console.log("getCookie cookie not found:", name);
// };







//Palauta 1. 
// export const fetchWithAuth = async (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = {};
//   }
//   options.credentials = "include"; // Ensures cookies are sent
//   let response = await fetch(url, options);
//   if (response.status === 401) { // Token expired, try refreshing
//     console.warn("Token expired React. Attempting refresh...");
//     const refreshed = await refreshToken();
//     if (refreshed) {
//       return fetchWithAuth(url, options); // Retry request        
//     }
//     else {
//       throw new Error("Unauthorized: Please log in again.");
//     }
//   } return response;
// };

// export const refreshToken = async () => {
//   try {
//     const refreshToken = getCookie("refresh_token");
//     if (!refreshToken) {
//       console.error("❌ Ei refresh-tokenia saatavilla React");
//       return false;
//     }

//     const response = await fetch(
//       "https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/token/refresh/",
//       {
//         method: "POST",
//         headers: {
//           Cookie: `refresh_token=${refreshToken}`, // Lisää eväste otsakkeisiin
//         },
//         credentials: "include", // Tärkeää!
//       }
//     );

//     if (response.ok) {
//       console.log("✅ Refresh token successful!");
//       return true;
//     } else {
//       console.error("❌ Refresh token failed!");
//       return false;
//     }
//   } catch (error) {
//     console.error("❌ Error refreshing token:", error);
//     return false;
//   }
// };

// export const refreshToken = async () => {
//   try {
//     const response = await fetch(
//       "https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/token/refresh/",
//       {
//         method: "POST",
//         credentials: "include", // Tärkeää!
//       }
//     );

//     if (response.ok) {
//       console.log("✅ Refresh token successful!");
//       return true;
//     } else {
//       console.error("❌ Refresh token failed!");
//       return false;
//     }
//   } catch (error) {
//     console.error("❌ Error refreshing token:", error);
//     return false;
//   }
// };
  
  //  Funktio tokenin uusimiseen
//   export const refreshToken = async () => {
//     try {
//         const refreshToken = getCookie("refresh_token"); // Haetaan refreshtoken evästeestä
//         if (!refreshToken) {
//             console.error("❌ Ei refresh-tokenia saatavilla");
//             return false;
//         }

//         const response = await fetch("https://codesitebe-efgshggehucfdvhq.swedencentral-01.azurewebsites.net/api/token/refresh/", {
//             method: "POST",
//             credentials: "include",
//             //headers: { "Content-Type": "application/json" },
//             //body: JSON.stringify({ refresh: refreshToken }) // ✅ Lähetetään refresh token JSON-rungossa
//         });

//         if (response.ok) {
//             console.log("✅ Refresh token successful!");
//             return true;
//         } else {
//             console.error("❌ Refresh token failed!");
//             return false;
//         }
//     } catch (error) {
//         console.error("❌ Error refreshing token:", error);
//         return false;
//     }
// };

// Funktio evästeen hakemiseen (Jos evästeessä on refresh_token)
// const getCookie = (name) => {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(";").shift();
// };

  