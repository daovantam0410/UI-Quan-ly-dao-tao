import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create(
    {
        baseURL:"http://localhost:8080",
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
        paramsSerializer:param => queryString.stringify(param),
    }
);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response;
    }
},
(error) =>{
    throw error;
}
);

export default axiosClient;