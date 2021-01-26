<template>
  <div id="banner">
    <h1>Cracked Spines Project</h1>
    <div id="navBar">
      <!-- These router-links will route to the components -->
      <router-link to="">Home</router-link>
      <router-link to="/Search">Search</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/Submit">Submit Form</router-link>
    </div>
  </div>

  <!-- Depending on which router-link is clicked, the router-view will change -->
  <router-view></router-view>
</template>

<script>
import Home from "./components/Home.vue";
import Search from "./components/Search.vue";
import About from "./components/About.vue";
import SubmitForm from "./components/SubmitForm.vue";
import { createRouter } from "vue-router";

const routes = [
  { path: "", component: Home },
  { path: "/Search", component: Search },
  { path: "/About", component: About },
  { path: "/Submit", component: SubmitForm },
];

const router = createRouter({ routes });

export default {
  name: "App",
  components: {
    Home: Home,
    Search: Search,
    About: About,
    SubmitForm: SubmitForm,
  },
  router,
};
</script>

<style>
h1 {
  text-align: center;
  margin: auto;
  width: 50%;
}

#navBar {
  text-align: center;
  margin: auto;
}
</style>
