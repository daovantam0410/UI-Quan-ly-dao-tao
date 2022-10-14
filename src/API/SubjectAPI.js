const { default: axiosClient } = require("./AxiosClient")

const url = '/admin'
const subjectAPI = {
    getAll : () => {
        return axiosClient.get(`${url}/subjects`);
    },
    create : (data) => {
        return axiosClient.post(`${url}/subject`, data);
    },
    delete : (id) => {
        return axiosClient.delete(`${url}/subject/${id}`);
    },
    findById : (id) =>{
        return axiosClient.get(`${url}/subject/${id}`);
    }
}

export default subjectAPI;