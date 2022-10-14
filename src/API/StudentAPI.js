const { default: axiosClient } = require("./AxiosClient")

const url = '/admin'
const studentAPI = {
    getAll : () => {
        return axiosClient.get(`${url}/students`);
    },
    create : (data) => {
        return axiosClient.post(`${url}/student`, data);
    },
    delete : (id) => {
        return axiosClient.delete(`${url}/student/${id}`);
    },
    findById : (id) =>{
        return axiosClient.get(`${url}/student/${id}`);
    },
    update : (id, data) => {
        return axiosClient.put(`${url}/student/${id}`, data);
    }
}

export default studentAPI;