const { default: axiosClient } = require("./AxiosClient")

const url = '/admin'
const roleAPI = {
    getAll : () => {
        return axiosClient.get(`${url}/roles`);
    }
}

export default roleAPI;