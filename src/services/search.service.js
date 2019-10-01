import {ApiService} from "./api.service";


const search = {

  food: async (keyword) => {
    let url = "/search/food?food="+keyword;
    return await ApiService.get(url).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },


};

export {search};





