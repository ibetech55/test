import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/v1/api'
axios.defaults.withCredentials = true;
axios.defaults.headers = { API_KEY: 'APIKEY' }
axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 403) {
        const response = await axios.post("http://localhost:8000/v1/api/auth/refresh", {}, {
            withCredentials: true,
            headers: {
                API_KEY: 'APIKEY',
            }
        })
        if (response.status === 200) {
            return axios(error.config)
        }
    } else {
        return error;
    }
})

export { axios }