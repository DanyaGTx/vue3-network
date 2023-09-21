<template>
  <div>
    <h1>Sign In</h1>
    <v-form @submit.prevent="login">
      <v-text-field v-model="email" label="email" required></v-text-field>
      <v-text-field v-model="password" label="password" required></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { supabase } from '../supabase';
import router from '../router/router';
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push({ name: 'home' });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
