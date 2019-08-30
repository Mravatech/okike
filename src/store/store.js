import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/user/users'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: '**-okike-mobile-data-00-**',
    storage: localStorage
});

export default new Vuex.Store({
    mutations: {},
    actions: {},
    modules: {
        User: Users,
    },
    plugins: [vuexPersist.plugin]
});
