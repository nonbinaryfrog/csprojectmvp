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
import BookData from '../../BookData'
import BookCardView from './BookCardView';

export default {
  name: "YAGenres",
  props: ["books"],
  components: {
    BookCardView,
  },
  data() {
    return {
    // store YA books and subgenres in here first        
      yaBooks: BookData['YA'],
    }
  },
  methods: {
    getBook() {
      console.log("Button pressed!")
    },
    getEverything() {
      // return all of the YA books
      let yaBooks = this.yaBooks;

      // send info to console to see what happens 
      console.log(yaBooks);      
      return yaBooks;

      // send YA books data to the parent component
      // this.$emit(yaBooks);
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
