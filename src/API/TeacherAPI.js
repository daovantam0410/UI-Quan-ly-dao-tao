const { default: axiosClient } = require("./AxiosClient")

const url = '/admin'
const teacherAPI = {
    getAll : () => {
        return axiosClient.get(`${url}/teachers`);
    },
    findAllByBranchID : () => {
        return axiosClient.get(`${url}/teacher`);
    },
    create : (data) => {
        return axiosClient.post(`${url}/teacher`, data);
    },
    delete : (id) => {
        return axiosClient.delete(`${url}/teacher/${id}`);
    },
    findById : (id) =>{
        return axiosClient.get(`${url}/teacher/${id}`);
    },
    update : (id, data) => {
        return axiosClient.put(`${url}/teacher/${id}`, data);
    }
}

export default teacherAPI;