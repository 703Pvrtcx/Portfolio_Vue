import { getItem } from "@/helpers/persistanceStorage";
import axios from "axios";

axios.defaults.baseURL = 'https://api.realworld.io/api';
// axios.defaults.baseURL = 'https://conduit.productionready.io/api';
axios.interceptors.request.use((config)=> {
    const token = getItem('accessToken');
    console.log(token);
    const authorizationToken = token ? `Token ${token}` : '';
    config.headers.Authorization = authorizationToken
    return config;
});
export default axios;