{/*Testi jolla testataan datan haku , voidaan ajaa Powershellissä -  Jani*/}

import axios from "axios";

const API_BASE_URL = "https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/";

const testApi = async () => {
    try {
        console.log("Fetching topics...");
        const topics = await axios.get(`${API_BASE_URL}/Aiheet/`);
        console.log("Topics:", topics.data);

        if (topics.data.length > 0) {
            const topicId = topics.data[0].id;
            console.log(`Fetching threads for topic ${topicId}...`);
            const threads = await axios.get(`${API_BASE_URL}/Ketjut/?aihealue=${topicId}`);
            console.log("Threads:", threads.data);

            if (threads.data.length > 0) {
                const threadId = threads.data[0].id;
                console.log(`Fetching thread ${threadId}...`);
                const thread = await axios.get(`${API_BASE_URL}/Ketjut/${threadId}/`);
                console.log("Thread details:", thread.data);
            }
        }

        console.log("Creating a new thread...");
        const newThread = await axios.post(`${API_BASE_URL}/Ketjut/`, {
            title: "Test Thread",
            content: "This is a test post.",
            author: "Test User",
            topicId: 1, // Vaihda sopivaksi
        });
        console.log("New thread created:", newThread.data);

    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
};

testApi();