<template>
  <div class="book-options">
    <h2>Adult: Choose a subgenre!</h2>
    <div class="genre-btns">
 
    <button @click="getEverything" id="everything-btn" class="btn"> Get me everything! </button>


    <div class="subgenre-buttons">
    <button @click="getDomestic" class="btn">Domestic Fiction</button>
    <button @click="getScifi" class="btn" id="scifi">Sci-Fi</button>
    <button @click="getHorror" class="btn" id="horror">Horror</button>
    </div>
    </div>
    
    <BookCardView :books="filteredBooks" />
    <!-- error page -->
    <!-- this router view seems to be unneeded -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import BookCardView from "./BookCardView";

export default {
  name: "AdultGenres",
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
    getDomestic() {
      // filter the results based on what the subgenre is
        let domesticFic = this.books.filter(books => books.subgenre[0] === 'Domestic Fiction');
        if (domesticFic.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = domesticFic;
      }        
    },

    getScifi() {
      // filter the results based on what the subgenre is
      let scifiBooks = this.books.filter(books => books.subgenre[0] === 'Science Fiction')
      // if there is nothing in the array, push the error page to router view
      if (scifiBooks.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = scifiBooks;
      }    
    },

    getHorror() {
      // filter the results based on what the subgenre is
      let horrorBooks = this.books.filter(books => books.subgenre[0] === 'Horror')
      // if there is nothing in the array, push the error page to router view
      if (horrorBooks.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = horrorBooks;
      }    
    },

    getEverything() {
      console.log(this.books[0].title)
      this.filteredBooks = this.books;  
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');

h2 {
  text-align: center;
}

.book-options {
  margin: 0 auto;
  width: 50%;
}

.btn {
  display: grid;
  margin: 20px;
  font-family: 'Coming Soon', cursive;
}

#everything-btn {
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.subgenre-buttons {
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(3, 1fr);
}

</style>
