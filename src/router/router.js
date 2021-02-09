import Home from "../components/Home.vue";
import Search from "../components/Search.vue";
import About from "../components/About.vue";
import SubmitForm from "../components/SubmitForm.vue";
import PBGenres from "../components/views/PBGenres.vue";
import MGGenres from "../components/views/MGGenres.vue";
import YAGenres from "../components/views/YAGenres.vue";
import AdultGenres from "../components/views/AdultGenres.vue";
import BookData from "../BookData";
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
      component: YAGenres,
      props: { books: BookData},
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