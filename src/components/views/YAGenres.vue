<template>
  <div class="book-options">
    <h2>Young Adult: Choose a subgenre!</h2>
    <div class="genre-buttons">
    <button @click="getEverything" id="get-all-ya"> Get me everything! </button>
    <button @click="getBook" class="subgenre" id="fantasy">Fantasy</button>
    <button class="subgenre" id="rom-com">Rom-com</button>
    <button class="subgenre" id="horror">Horror</button>
    </div>
    <!-- Need to debug or change the code below so that the component is rendered -->
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
  data() {
    // store YA books and subgenres in here first
  },
  methods: {
    getBook() {
      console.log("Button pressed!")
    },
    getEverything(){
      // books.map((b) => b.genre === id);
      console.log("Get everything!")
    }
  }
};

</script>

<style>
.book-options {
  margin: auto;
  width: 50%;
}

button {
  margin-left: 25%;
}

.subgenre {
  display: grid;
  margin: 20px;
}
</style>
