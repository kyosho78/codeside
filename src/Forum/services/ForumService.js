// Forum päätepisteet

import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchTopics = async () => {
    const response = await axios.get(`${API_BASE_URL}/Aiheet/`);
    return response.data;
};

export const fetchThreads = async (topicId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Ketjut/?aihealue=${topicId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching threads:', error);
        throw error;
    }
};

export const fetchThread = async (threadId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Ketjut/${threadId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching thread:', error);
        throw error;
    }
};

export const fetchReplies = async (threadId) => {
    const response = await axios.get(`${API_BASE_URL}/Vastaukset/`);
    
    return response.data.filter(reply => reply.ketju === parseInt(threadId));
};

//Post kutsut

export const createThread = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/Ketjut/`,  data, {
        withCredentials: true,  
    });
    return response.data;
};

export const createReply = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/Vastaukset/`, data, {
        withCredentials: true,  // Add credentials (cookies) with the request
    });
    return response.data;
};