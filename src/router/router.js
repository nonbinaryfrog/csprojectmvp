import Home from "../components/Home.vue";
import Search from "../components/Search.vue";
import About from "../components/About.vue";
import SubmitForm from "../components/SubmitForm.vue";
import PBGenres from "../components/views/PBGenres.vue";
import MGGenres from "../components/views/MGGenres.vue";
import YAGenres from "../components/views/YAGenres.vue";
import AdultGenres from "../components/views/AdultGenres.vue";
// import controller from '../../api/controllers/controller';

// will need to remove BookData to test MongoDB ocnnection
import BookData from "../BookData";
import ErrorPage from "../components/views/ErrorPage.vue";
import { createWebHistory, createRouter } from "vue-router";

// filter data based on genres first
// Also need to comment out this code  as well as props below
let pbBooks = BookData.filter((book) => book.genre === "PB");
let mgBooks = BookData.filter((book) => book.genre === "MG");
let yaBooks = BookData.filter((book) => book.genre === "YA");
let adultBooks = BookData.filter((book) => book.genre === "A");
let allBooks = BookData;

// will do a get request on picture books
// let pbBooks = async controller.get_some_books();

const routes = [
  // nested routes for genres in home
  {
    path: "/books",
    component: Home,
    children: [
      {
        path: "/books/PB",
        component: PBGenres,
        props: { books: pbBooks },
      },
      {
        path: "/books/MG",
        component: MGGenres,
        props: { books: mgBooks },
      },
      {
        path: "/books/YA",
        component: YAGenres,
        props: { books: yaBooks },
      },
      {
        path: "/books/Adult",
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
