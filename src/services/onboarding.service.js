import {ApiService} from "./api.service";
import {mapActions} from "vuex";


const onboard = {
  ...mapActions({auth: 'AUTHORISE_USER'}),
  phoneNumber: async (phone_number) => {
    let url = "/verify-number";
    return await ApiService.post(url, {phone_number: phone_number}).then((res) => {
      console.log(res);
      return Promise.resolve(res.data);
    }).catch((error) => {
      console.log(error);
      return Promise.reject(error.data);
    });
  },

  verifyCode: async (phone_number, otp) => {
    let data = {
      phone_number: phone_number,
      otp: otp
    };
    console.log(data);
    let url = "/verify-code";
    return await ApiService.post(url, data).then((res) => {
      let token = res.data.token;
      console.log(token)
      return Promise.resolve(res.data);
    }).catch((error) => {
      console.log(error)
      return Promise.reject(error.response.data);
    });
  },

  fetchLocations: async () => {
    let url = "/u/list-location";
    return await ApiService.get(url).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  addLocation: async (uuid) => {
    let url = "/u/add-location";
    return await ApiService.post(url, {uuid: uuid}).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  addUsername: async (username) => {
    let url = "/u/add-username";
    return await ApiService.post(url, {username: username}).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  addPin: async (pin) => {
    let url = "/u/add-pin";
    return await ApiService.post(url, {pin: pin}).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  authorize: async (token) => {
    return await ApiService.customRequest({
      headers: {'Authorization': "Bearer "+token},
      method: "GET",
      url: ApiService.getBaseUrl() + "/u/authorize"
    }).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },
};

export {onboard};





