{/*Forum Service jossa api päätepisteet -  Jani*/}

import { fetchWithAuth as api } from "../../api.js";

const API_BASE_URL = "https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api";

// GET: Profiilin haku
export const fetchUserProfile = async () => {
  try {
    const response = await api(`${API_BASE_URL}/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Profiilitietojen haku epäonnistui:", error);
    throw error;
  }
};

// GET: Aiheiden haku
export const fetchTopics = async () => {
  try {
    const response = await api(`${API_BASE_URL}/Aiheet/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Aiheiden haku epäonnistui:", error);
    throw error;
  }
};

// GET: Aiheen haku
export const fetchTopic = async (topicId) => {
  try {
    const response = await api(`${API_BASE_URL}/Aiheet/${topicId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Aiheiden haku epäonnistui:", error);
    throw error;
  }
};

// GET: Kaikki ketjut
export const fetchAllThreads = async (topicId) => {
  try {
    const response = await api(`${API_BASE_URL}/Ketjut/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching threads:", error);
    throw error;
  }
};



// GET: Ketjut aiheen alla
export const fetchThreads = async (topicId) => {
  try {
    const response = await api(`${API_BASE_URL}/Ketjut/?aihealue=${topicId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching threads:", error);
    throw error;
  }
};

// GET: Yksittäinen ketju
export const fetchThread = async (threadId) => {
  try {
    const response = await api(`${API_BASE_URL}/Ketjut/${threadId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching thread:", error);
    throw error;
  }
};

// GET: Vastausten haku
export const fetchReplies = async (threadId) => {
  try {
    const response = await api(`${API_BASE_URL}/Vastaukset/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const data = await response.json();
    return data.filter(reply => reply.ketju === parseInt(threadId));
  } catch (error) {
    console.error("Error fetching replies:", error);
    throw error;
  }
};

// POST: Luo aihealue
export const createTopic = async (data) => {
  try {
    const response = await api(`${API_BASE_URL}/Aiheet/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Virhe uuden aihealueen luomisessa:", error);
    throw error;
  }
};

// POST: Luo vastaus
export const createReply = async (data) => {
  try {
    const response = await api(`${API_BASE_URL}/Vastaukset/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error creating reply:", error);
    throw error;
  }
};

// POST: Luo ketju
export const createThread = async (data) => {
  try {
    const response = await api(`${API_BASE_URL}/Ketjut/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error creating thread:", error);
    throw error;
  }
};

// PATCH: Muokkaa vastausta
export const editReply = async (data) => {
  try {
    const response = await api(`${API_BASE_URL}/Vastaukset/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error creating reply:", error);
    throw error;
  }
};

// PATCH: Muokkaa aloitusta
export const editThread = async (threadId, content) => {
  try {
    const response = await api(`${API_BASE_URL}/Ketjut/${threadId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }), // Vain sisältö päivittyy
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("service: Virhe ketjun muokkaamisessa:", error);
    throw error;
  }
};

// PATCH: Poista vastaus
export const deleteReply = async (data) => {
  try {
    const response = await api(`${API_BASE_URL}/Vastaukset/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error creating reply:", error);
    throw error;
  }
};

// DELETE: Poista viestiketju
export const deleteThread = async (data) => {
  try {
    const response = await api(`${API_BASE_URL}/Ketjut/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Virhe: ${response.status}`);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error creating thread:", error);
    throw error;
  }
};