<template>
  <div class="book-options">
    <h2>Middle Grade: Choose a subgenre!</h2>
    <div class="genre-btns">

    <button @click="getEverything" id="everything-btn" class="btn">Get me everything!</button>

    <div class="subgenre-buttons">
    <button @click="getGhost" class="btn">Ghost Story</button>
    <button @click="getDomestic" class="btn">Domestic Fiction</button>
    <button @click="getScifi" class="btn">Sci-Fi</button>
    </div>

    </div>
    <book-card-view :books="filteredBooks" />

    <!-- error page -->
    <router-view></router-view>

  </div>
</template>

<script>
import BookCardView from "./BookCardView";

export default {
  name: "MGGenres",
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
    getGhost() {
      // filter the results based on what the subgenre is
      let ghostBooks = this.books.filter(books => books.subgenre[0] === 'Ghost Story');
        if (ghostBooks.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = ghostBooks;
      }       
    },

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

    getEverything() {
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
  display: block;
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
