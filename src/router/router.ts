import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { supabase } from '../supabase';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = async () => {
  try {
    const user = await supabase.auth.getUser();
    return user?.data.user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser();
    if (currentUser) {
      next();
    } else {
      alert('You must be logged in');
      next('/signin');
    }
  } else {
    next();
  }
});

export default router;
