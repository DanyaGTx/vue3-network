<template>
  <div class="max-w-[700px] m-auto">
    <router-view></router-view>
  </div>
  <!-- <v-form ref="registerFormRef" v-model="valid" @submit.prevent="sendForm">
        <div>
          <div>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              hide-details
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              hide-details
              required
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
            ></v-text-field>
          </div>
        </div>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form> 
    </div>-->
</template>
<script setup lang="ts">
// import AuthPage from './components/AuthPage.vue';
//@ts-ignore
// import allPosts from './graphql/allPosts.query.gql';

// const valid = ref(false);
// const firstname = ref('');
// const lastname = ref('');
// const email = ref('');
// const nameRules = ref([
//   (value: any) => {
//     if (value) return true;

//     return 'Name is required.';
//   },
//   (value: any) => {
//     if (value?.length <= 10) return true;

//     return 'Name must be less than 10 characters.';
//   },
// ]);

// const registerFormRef = ref<HTMLFormElement | null>(null);

// const emailRules = [
//   (value: any) => {
//     if (value) return true;

//     return 'E-mail is requred.';
//   },
//   (value: any) => {
//     if (/.+@.+\..+/.test(value)) return true;

//     return 'E-mail must be valid.';
//   },
// ];

// const sendForm = () => {
//   if (valid.value) {
//     console.log(firstname.value, lastname.value, email.value); //send data for registration
//     registerFormRef.value && registerFormRef.value.reset(); //reset form
//   }
// };
</script>

<style scoped></style>
