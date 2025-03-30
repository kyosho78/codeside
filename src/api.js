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
      const response = await fetch("http://127.0.0.1:8000/api/refresh/", {
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