import Home from "../client/src/components/Home.vue";
import Search from "../client/src/components/Search.vue";
import About from "../client/src/components/About.vue";
import SubmitForm from "../client/src/components/SubmitForm.vue";
import PBGenres from "../client/src/components/views/PBGenres.vue";
import MGGenres from "../client/src/components/views/MGGenres.vue";
import YAGenres from "../client/src/components/views/YAGenres.vue";
import AdultGenres from "../client/src/components/views/AdultGenres.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  // nested routes for genres in home
  { path: "/", component: Home,
  children: [
    {
      path: '/PB',
      component: PBGenres
    },
    {
      path: '/MG',
      component: MGGenres
    },
    {
      path: '/YA',
      component: YAGenres
    },
    {
      path: '/Adult',
      component: AdultGenres
    }
  ]

},
  { path: "/Search", component: Search },
  { path: "/About", component: About },
  { path: "/Submit", component: SubmitForm },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router