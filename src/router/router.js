import Home from "../components/Home.vue";
import Search from "../components/Search.vue";
import About from "../components/About.vue";
import SubmitForm from "../components/SubmitForm.vue";
import PBGenres from "../components/views/PBGenres.vue";
import MGGenres from "../components/views/MGGenres.vue";
import YAGenres from "../components/views/YAGenres.vue";
import AdultGenres from "../components/views/AdultGenres.vue";
import ServerError from "../components/views/ServerError.vue"

// will need to remove BookData to test MongoDB ocnnection
import BookData from "../BookData";
import ErrorPage from "../components/views/ErrorPage.vue";
import { createWebHistory, createRouter } from "vue-router";

let allBooks = BookData;

const routes = [
  // nested routes for genres in home
  {
    path: "/books",
    component: Home,
    children: [
      {
        path: "/books/PB",
        component: PBGenres,

      },
      {
        path: "/books/MG",
        component: MGGenres,
      },
      {
        path: "/books/YA",
        component: YAGenres,

      },
      {
        path: "/books/Adult",
        component: AdultGenres,
      },
      {
        path: "/Error",
        component: ErrorPage
      },
      {
        path: "/ServerError",
        component: ServerError
      }
    ],
  },
  { path: "/Search", component: Search, props: { books: allBooks }},
  { path: "/About", component: About },
  { path: "/Submit", component: SubmitForm },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
