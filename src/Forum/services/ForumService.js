// Forum päätepisteet

import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchTopics = async () => {
    const response = await axios.get(`${API_BASE_URL}/Aiheet/`);
    return response.data;
};

export const fetchThreads = async (topicId) => {
    const response = await axios.get(`${API_BASE_URL}/Ketjut/${topicId}/`);
    return response.data;
};

export const fetchThread = async (threadId) => {
    const response = await axios.get(`${API_BASE_URL}/Ketjut/${threadId}/`);
    return response.data;
};

export const createThread = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/Ketjut/`, data);
    return response.data;
};

export const fetchReplies = async (threadId) => {
    const response = await axios.get(`${API_BASE_URL}/Vastaukset/${threadId}/`);
    return response.data;
};

export const createReply = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/Vastaukset/`, data);
    return response.data;
};