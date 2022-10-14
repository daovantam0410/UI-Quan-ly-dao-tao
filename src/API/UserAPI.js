const { default: axiosClient } = require("./AxiosClient")

const url = '/admin'
const userAPI = {
    getAll : () => {
        return axiosClient.get(`${url}/users`);
    },
    create : (data) => {
        return axiosClient.post(`${url}/user`, data);
    },
    delete : (id) => {
        return axiosClient.delete(`${url}/user/${id}`);
    },
    findById : (id) =>{
        return axiosClient.get(`${url}/user/${id}`);
    },
    update : (id, data) => {
        return axiosClient.put(`${url}/user/${id}`, data);
    },
    changePassword : (id, data) => {
        return axiosClient.put(`${url}/change-password/${id}`, data);
    },
    register : (data) => {
        return axiosClient.post(`${url}/signup`, data);
    }
}

export default userAPI;