import {ApiService} from "./api.service";


const order = {

  make: async (data) => {
    let url = "/order/add/";
    return await ApiService.post(url, data).then((res) => {
      return Promise.resolve(res.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  history: async() => {
    let url = '/order/history';
    return await ApiService.get(url).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },


};

export {order};





