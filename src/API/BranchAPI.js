const { default: axiosClient } = require("./AxiosClient")

const url = '/admin'
const branchAPI = {
    getAll : () => {
        return axiosClient.get(`${url}/branchs`);
    },
    create : (data) => {
        return axiosClient.post(`${url}/branch`, data);
    },
    delete : (id) => {
        return axiosClient.delete(`${url}/branch/${id}`);
    },
    findById : (id) =>{
        return axiosClient.get(`${url}/branch/${id}`);
    },
    update : (id, data) => {
        return axiosClient.put(`${url}/branch/${id}`, data);
    },
    filter : () => {
        return axiosClient.get(`${url}/branch`);
    }
}

export default branchAPI;