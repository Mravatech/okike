import {ApiService} from "./api.service";


const food = {

  detail: async (uuid) => {
    let url = "/u/food/details/" + uuid;
    return await ApiService.get(url).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  promo: async () => {
    let url = '/u/food/promo';
    return await ApiService.get(url).then((res)=> {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  }

};

export {food};





