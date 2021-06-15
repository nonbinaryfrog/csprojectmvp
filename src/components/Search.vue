<template>
  <div id="search">
    <form action="#" @submit.prevent="onSubmit">
      <div class="text-field">
        <label for="search">Search by Author or Title:</label>
        <input type="text" v-model="search" placeholder="Begin typing..." />
      </div>
      <button>Submit</button>
    </form>

    <BookCardView :books="filteredBooks" />
  </div>
</template>

<script>
import BookCardView from "./views/BookCardView";
import axios from "axios";

export default {
  name: "Search",
  props: ["books"],
  components: {
    BookCardView,
  },

  data() {
    return {
      // initialize filteredBooks as the full set of books.
      filteredBooks: [],
      search: "",
    };
  },

  methods: {
    async onSubmit() {
      if (this.search !== "") {
        try {
          let bookOrAuthor = await axios.get("http://localhost:3000/Search", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            params: {
              author: this.search,
              title: this.search,
            },
          });
          if (bookOrAuthor) {
            this.filteredBooks = bookOrAuthor.data;
          } else {
            this.$router.push("/Error");
          }
        } catch (err) {
          this.$router.push("/ServerError");
          console.log(`Network error: ${err.message}`);
        }
      }
    },
  },
};
</script>

<style>
#search {
  margin: 0 auto;
  width: 50%;
  text-align: center;
  /* margin-top: 25px; */
}

.btn {
  display: grid;
  margin: 20px;
  font-family: "Coming Soon", cursive;
}

#everything-btn {
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
