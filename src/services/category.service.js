import {ApiService} from "./api.service";


const category = {

  fetch: async () => {
    let url = "/u/category/list";
    return await ApiService.get(url).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },


};

export {category};





