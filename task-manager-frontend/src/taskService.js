// src/services/taskService.js
import axios from 'axios';

const API_URL = '/api/v1/tasks';

export const getTasks = () => axios.get(API_URL);
export const getTask = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const markTaskAsCompleted = (id) => axios.patch(`${API_URL}/${id}/complete`);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);


const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getTasks() {
        return apiClient.get('/tasks');
    },
    getTask(id) {
        return apiClient.get(`/tasks/${id}`);
    },
    createTask(task) {
        return apiClient.post('/tasks', task);
    },
    updateTask(id, task) {
        return apiClient.put(`/tasks/${id}`, task);
    },
    completeTask(id) {
        return apiClient.patch(`/tasks/${id}/complete`);
    },
    deleteTask(id) {
        return apiClient.delete(`/tasks/${id}`);
    }
};
