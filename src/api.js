// api.js
export const fetchWithAuth = async (url, options = {}) => {
    const response = await fetch(url, {
      ...options,
      credentials: "include", // 🔹 Mahdollistaa evästeiden käytön
    });
  
    if (response.status === 401) { // 🔄 Access token on vanhentunut
      console.warn("🔄 Access token expired, trying to refresh...");
      const refreshed = await refreshToken();
      if (refreshed) {
        return fetchWithAuth(url, options); // 🔄 Yritä uudestaan uusitulla tokenilla
      } else {
        throw new Error("Unauthorized: Please log in again.");
      }
    }
  
    return response;
  };
  
  // 🛠 Funktio tokenin uusimiseen
  export const refreshToken = async () => {
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
  