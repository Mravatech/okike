import {ApiService} from "./api.service";


const onboard = {
  phoneNumber: async (phone_number) => {
    let url = "/verify-number";
    return await ApiService.post(url, {phone_number: phone_number}).then((res) => {
      return Promise.resolve(res.data.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
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

  fetchStandings: async ({id}) => {

    let url = "get_standings&league_id=" + id + ApiService.getLiveScoreKey();

    return await ApiService.customRequest({
      method: "GET",
      url: ApiService.getLivescoreUrl() + url
    }).then((res) => {
      return Promise.resolve(res.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

  fetchFixture: async ({id, from, to}) => {
    let val = "get_events&from=" + from + "&to=" + to;

    let url = val + ApiService.getLiveScoreKey();

    return await ApiService.customRequest({
      method: "GET",
      url: ApiService.getLivescoreUrl() + url
    }).then((res) => {
      return Promise.resolve(res.data);
    }).catch((error) => {
      return Promise.reject(error.response.data);
    });
  },

};

export {onboard};





