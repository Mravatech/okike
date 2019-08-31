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




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/Splash2',
      name: 'Splash2',
      component: Splash2
    },
    {
      path: '/Splash3',
      name: 'Splash3',
      component: Splash3
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Verify',
      name: 'Verify',
      component: Verify
    },
    {
      path: '/VerifyCode/:phone',
      name: 'VerifyCode',
      component: VerifyCode
    },
    {
      path: '/Location',
      name: 'Location',
      component: Location
    },
    {
      path: '/CreatePin',
      name: 'CreatePin',
      component: CreatePin
    },
    {
      path: '/Username',
      name: 'Username',
      component: Username
    },
    {
      path: '/Landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/ViewFood',
      name: 'ViewFood',
      component: ViewFood
    },
    {
      path: '/Delicacies',
      name: 'Delicacies',
      component: Delicacies
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
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

})
