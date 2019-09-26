import {ApiService} from "./api.service";


const wallet = {

  detail: async (uuid) => {
    let url = "/u/food/details/" + uuid;
    return await ApiService.get(url).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  addcash: async (data) => {
    console.log(data)
  }


};

export {wallet};





