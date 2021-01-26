import Home from "../components/Home.vue";
import Search from "../components/Search.vue";
import About from "../components/About.vue";
import SubmitForm from "../components/SubmitForm.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/Search", component: Search },
  { path: "/About", component: About },
  { path: "/Submit", component: SubmitForm },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router