<template>
  <div class="book-options">
    <h2>Young Adult: Choose a subgenre!</h2>
    <div class="genre-buttons">
    <button @click="getEverything" id="get-all-ya"> Get me everything! </button>
    <button @click="getFantasy" class="subgenre" id="Fantasy">Fantasy</button>
    <button @click="getRomCom" class="subgenre" id="rom-com">Rom-com</button>
    <button @click="getHorror" class="subgenre" id="horror">Horror</button>
    </div>
    <book-card-view :books="filteredBooks"/>

<!-- Router-view is for error page -->
    <router-view></router-view>

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
  data: () => {
    return {
      // initialize filteredBooks as empty
      filteredBooks: [],
    }
  },
  methods: {
    // take a subgenre argument
    getFantasy() {
      // filter the results based on what the subgenre is
        this.filteredBooks = this.books.filter(books => books.subgenre[0] === 'Fantasy');
        console.log(this.filteredBooks);        
    },

    getRomCom() {
      // filter the results based on what the subgenre is
        this.filteredBooks = this.books.filter(books => books.subgenre[0] === 'Rom-com');
        console.log(this.filteredBooks);        
    },

    getHorror() {
      // filter the results based on what the subgenre is
      let horrorBooks = this.books.filter(books => books.subgenre[0] === 'Horror')
      // if there is nothing in the array, push the error page to router view
      // which for some reason isnt working so figure that out
      if (horrorBooks.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = horrorBooks;
      }    
    },

    getEverything() {
      this.filteredBooks = this.books;  
    },
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
