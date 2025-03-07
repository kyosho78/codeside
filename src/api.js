export const fetchWithAuth = async (url, options = {}) => {
    const response = await fetch(url, {
      ...options,// Kopioi kaikki alkuperäisessä kutsussa annetut asetukset (method: "GET", jne.).
      credentials: "include", // Varmistaa evästeiden käytön
    });
  
    if (response.status === 401) { //  Access token on vanhentunut
      console.warn(" Token vanhentunut. Yritetään uusia..");
      const refreshed = await refreshToken();
      if (refreshed) {
        return fetchWithAuth(url, options); //  Yritä uudestaan uusitulla tokenilla
      } else {
        throw new Error("Unauthorized: Please log in again.");
      }
    }
  
    return response;
  };
  
  //  Funktio tokenin uusimiseen
  export const refreshToken = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        credentials: "include",
      });
  
      if (response.ok) {
        console.log("Token uusittu onnistuneesti!");
        return true;
      } else {
        console.error("Tokenin uusiminen epäonnistui");
        return false;
      }
    } catch (error) {
      console.error("Virhe uusittaessa tokenia:", error);
      return false;
    }
  };
  