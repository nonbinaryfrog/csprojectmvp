import Home from "../components/Home.vue";
import Search from "../components/Search.vue";
import About from "../components/About.vue";
import SubmitForm from "../components/SubmitForm.vue";
import PBGenres from "../components/views/PBGenres.vue";
import MGGenres from "../components/views/MGGenres.vue";
import YAGenres from "../components/views/YAGenres.vue";
import AdultGenres from "../components/views/AdultGenres.vue";
import BookData from "../BookData";
import ErrorPage from "../components/views/ErrorPage.vue";
import { createWebHistory, createRouter } from "vue-router";

// filter data based on genres first
let pbBooks = BookData.filter((book) => book.genre === "PB");
let mgBooks = BookData.filter((book) => book.genre === "MG");
let yaBooks = BookData.filter((book) => book.genre === "YA");
let adultBooks = BookData.filter((book) => book.genre === "A");
let allBooks = BookData;

const routes = [
  // nested routes for genres in home
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/PB",
        component: PBGenres,
        props: { books: pbBooks },
      },
      {
        path: "/MG",
        component: MGGenres,
        props: { books: mgBooks },
      },
      {
        path: "/YA",
        component: YAGenres,
        props: { books: yaBooks },
      },
      {
        path: "/Adult",
        component: AdultGenres,
        props: { books: adultBooks },
      },
      {
        path: "/Error",
        component: ErrorPage
      },
    ],
  },
  { path: "/Search", component: Search, props: { books: allBooks } },
  { path: "/About", component: About },
  { path: "/Submit", component: SubmitForm },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
