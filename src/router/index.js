import Vue from 'vue'
import Router from 'vue-router'
import Splash from "../views/Splash/Splash";
import Splash2 from "../views/Splash/Splash2";
import Splash3 from "../views/Splash/Splash3";
import Login from "../views/Login/Login";
import Verify from "../views/Login/Verify";
import VerifyCode from "../views/Login/VerifyCode";
import CreatePin from "../views/Login/CreatePin";
import Username from "../views/Login/Username";
import Landing from "../views/Landing/Landing";
import ViewFood from "../views/Landing/ViewFood";
import Delicacies from "../views/Landing/Delicacies";
import Cart from "../views/Cart/Cart";
import Delivery from "../views/Landing/Delivery";
import Confirmation from "../views/Landing/Confirmation";
import Menu from "../views/Menu/Menu";
import Invite from "../views/Invite/Invite";
import MyCard from "../views/MyCard/MyCard";
import AddBankCard from "../views/AddCash/AddBankCard";
import History from '../views/History/History.vue'
import WalletBalance from "../views/MyCard/WalletBalance";
import AddCash from "../views/AddCash/AddCash";
import AddCashQuickteller from "../views/AddCash/AddCashQuickteller";
import BankTransfer from "../views/AddCash/BankTransfer";
import Settings from "../views/Settings/Settings";
import CustomerService from "../views/Settings/CustomerService";
import ChangePin from "../views/Settings/ChangePin";
import Location from '../views/Login/Location.vue';
import IntegerPlusminus from '@/components/IntegerPlusminus.vue'
import Store from "../store/store";




Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/logout',
      name: 'logout',
    },
    {
      path: '/',
      name: 'Splash',
      component: Splash,
    },
    {
      path: '/Splash2',
      name: 'Splash2',
      component: Splash2,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/Splash3',
      name: 'Splash3',
      component: Splash3,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/Verify',
      name: 'Verify',
      component: Verify,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/VerifyCode/:phone',
      name: 'VerifyCode',
      component: VerifyCode,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/Location',
      name: 'Location',
      component: Location,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/CreatePin',
      name: 'CreatePin',
      component: CreatePin,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/Username',
      name: 'Username',
      component: Username,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/Landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/ViewFood/:uuid',
      name: 'ViewFood',
      component: ViewFood,
      props: true,
    },
    {
      path: '/Delicacies',
      name: 'Delicacies',
      component: Delicacies
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
      props: true,
    },
    {
      path: '/Delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/Confirmation',
      name: 'Confirmation',
      component: Confirmation
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/IntegerPlusminus',
      name: 'IntegerPlusminus',
      component: IntegerPlusminus
    },
    {
      path: '/Invite',
      name: 'Invite',
      component: Invite
    },
    {
      path: '/MyCard',
      name: 'MyCard',
      component: MyCard
    },
    {
      path: '/WalletBalance',
      name: 'WalletBalance',
      component: WalletBalance
    },
    {
      path: '/AddBankCard',
      name: 'AddBankCard',
      component: AddBankCard
    },
    {
      path: '/History',
      name: 'History',
      component: History
    },
    {
      path: '/AddCash',
      name: 'AddCash',
      component: AddCash
    },
    {
      path: '/AddCashQuickteller',
      name: 'AddCashQuickteller',
      component: AddCashQuickteller
    },
    {
      path: '/BankTransfer',
      name: 'BankTransfer',
      component: BankTransfer
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/CustomerService',
      name: 'CustomerService',
      component: CustomerService
    },
    {
      path: '/ChangePin',
      name: 'ChangePin',
      component: ChangePin
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ],
  mode:'history'

});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
  const loggedIn = Store.getters.IS_AUTHENTICATED;

  if (!isPublic && !loggedIn) {
    return next({
      name: 'Login',
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next({name: 'Landing'});
  }

  next();
});

export default router;
