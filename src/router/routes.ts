import HomePage from '../views/HomePage.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';

export const routeNames = {
  home: 'home',
  signup: 'signup',
  signin: 'signin',
};

export const routes = [
  {
    path: `/home`,
    name: routeNames.home,
    alias: '/',
    meta: {
      requiresAuth: true,
    },
    component: HomePage,
  },
  {
    path: `/signup`,
    name: routeNames.signup,
    component: SignUp,
  },
  {
    path: `/signin`,
    name: routeNames.signin,
    component: SignIn,
  },
];
