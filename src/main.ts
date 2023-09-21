import './styles/index.css';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import App from './App.vue';
import router from './router/router';

// import { DefaultApolloClient } from '@vue/apollo-composable';
// import { createApp, h, provide } from 'vue';
// import {
//   ApolloClient,
//   InMemoryCache,
//   createHttpLink,
//   gql,
// } from '@apollo/client/core';

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'https://jsonplaceholder.typicode.com/todos',
// });

// // Cache implementation
// const cache = new InMemoryCache();

// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// });

// const app = createApp({
//   setup() {
//     provide(DefaultApolloClient, apolloClient);
//   },

//   render: () => h(App),
// });

// const query = gql`
//   query {
//     data {
//       id
//     }
//   }
// `;

// apolloClient.query({ query }).then((res) => console.log(res));

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount('#app');
