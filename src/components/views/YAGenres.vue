<template>
  <div class="book-options">
    <h2>Young Adult: Choose a subgenre!</h2>
    <div class="genre-buttons">
    <button @click="getEverything" id="get-all-ya"> Get me everything! </button>
    <button @click="getBook" class="subgenre" id="fantasy">Fantasy</button>
    <button class="subgenre" id="rom-com">Rom-com</button>
    <button class="subgenre" id="horror">Horror</button>
    </div>
    <book-card-view :books="books"/>
  </div>
</template>

<script>
import BookCardView from './BookCardView';

export default {
  name: "YAGenres",
  props: ["books"],
  components: {
    BookCardView,
  },
  methods: {
    getBook() {
      console.log("Button pressed!")
    },
    getEverything() {
      // send info to console to see what happens 
      console.log(this.books);      
      // return this.books;
    }
  }
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');

.book-options {
  margin: auto;
  width: 50%;
}

button {
  margin-left: 25%;
  font-family: 'Coming Soon', cursive;
}

.subgenre {
  display: grid;
  margin: 20px;
}

</style>
