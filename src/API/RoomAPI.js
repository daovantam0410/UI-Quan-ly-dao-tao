const { default: axiosClient } = require("./AxiosClient")

const url = '/admin'
const roomAPI = {
    getAll : () => {
        return axiosClient.get(`${url}/rooms`);
    },
    create : (data) => {
        return axiosClient.post(`${url}/room`, data);
    },
    delete : (id) => {
        return axiosClient.delete(`${url}/room/${id}`);
    },
    findById : (id) =>{
        return axiosClient.get(`${url}/room/${id}`);
    },
    update : (id, data) => {
        return axiosClient.put(`${url}/room/${id}`, data);
    }
}

export default roomAPI;