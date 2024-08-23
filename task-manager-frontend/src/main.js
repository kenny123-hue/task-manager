import axios from 'axios';
import './assets/main.css';


export default {
    data() {
        return {
            tasks: [],
            loading: true,
            error: null,
        };
    },
    created() {
        axios.get('http://localhost:8000/api/v1/tasks')
            .then(response => {
                this.tasks = response.data.data;
            })
            .catch(error => {
                this.error = error;
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
