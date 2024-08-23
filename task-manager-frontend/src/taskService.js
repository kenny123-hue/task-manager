import axios from 'axios';

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
