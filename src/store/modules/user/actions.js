import {ApiService} from "../../../services/api.service";
import {onboard} from "../../../services/onboarding.service";

const actions = {
    UNSET_USER: (context) => context.commit('REMOVE_AUTH'),
    isLoggedIn(context) {
        // Fetch the User token
        return context.getters.IS_AUTHENTICATED;
    },
    LOGIN: async (context,data) => {
        return await onboard.verifyCode(data.phone_number, data.otp).then(async (data) => {
            console.log(data)
          let token = data.data.token
            // Store the User Token
            context.commit('SET_AUTH_TOKEN', token);
            let authorize = await context.dispatch('AUTHORISE_USER', token);
            ApiService.setHeader(token);
            return Promise.resolve(authorize);
        }).catch((error) => {
            return Promise.reject(error);
        });
    },
    AUTHORISE_USER: async (context, token) => {
        return await onboard.authorize(token).then((res) => {
          context.commit('SET_AUTH_TOKEN', token);
          context.commit('SET_USER_DATA', res);
            return true;
        }).catch((err) => {
            window.console.log(err);
            return false;
        });
    }
};

export {actions};
