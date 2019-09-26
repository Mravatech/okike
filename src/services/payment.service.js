import {ApiService} from "./api.service";
import {mapActions} from "vuex";


const payment = {
  check: async (txnref) => {
    let url = "/payment/check";
    return await ApiService.post(url, {txnref: txnref}).then((res) => {
      console.log(res);
      return Promise.resolve(res.data);
    }).catch((error) => {
      console.log(error.data);
      return Promise.reject(error.data);
    });
  },
  verify: async (data) => {
    let url = "/payment/verify";
    return await ApiService.post(url, data).then((res) => {
      console.log(res);
      return Promise.resolve(res.data);
    }).catch((error) => {
      console.log(error.data);
      return Promise.reject(error.data);
    });
  },
};

export {payment};
