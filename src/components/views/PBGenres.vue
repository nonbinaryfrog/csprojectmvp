<template>
  <div class="book-options">
    <h2>Picture Books: Choose a subgenre!</h2>
    <div class="genre-btns">

    <button @click="getEverything" id="everything-btn" class="btn"> Get me everything! </button>


    <div class="subgenre-buttons">
    <button @click="getBio" class="btn">Biographical</button>
    <button @click="getDomestic" class="btn">Domestic Fiction</button>
    <button @click="getAdventure" class="btn">Adventure</button>
    </div>
    </div>

    <book-card-view :books="filteredBooks"/>
    <!-- error page -->
    <router-view></router-view>
  </div>
</template>

<script>
import BookCardView from './BookCardView';

export default {
  name: "PBGenres",
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
    getBio() {
      // filter the results based on what the subgenre is
      let bioBooks = this.books.filter(books => books.subgenre[0] === 'Biographical');
        if (bioBooks.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = bioBooks;
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

    getAdventure() {
      // filter the results based on what the subgenre is
      let adventureBooks = this.books.filter(books => books.subgenre[0] === 'Adventure')
      // if there is nothing in the array, push the error page to router view
      if (adventureBooks.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = adventureBooks;
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

.subgenre-buttons {
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(3, 1fr);
}

#everything-btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
}

</style>
