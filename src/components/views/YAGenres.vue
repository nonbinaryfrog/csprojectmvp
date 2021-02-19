<template>
  <div class="book-options">
    <h2>Young Adult: Choose a subgenre!</h2>
    <div class="genre-btns">

    <button @click="getEverything" id="everything-btn" class="btn"> Get me everything! </button>

    <div class="subgenre-buttons">
    <button @click="getFantasy" class="btn">Fantasy</button>
    <button @click="getRomCom" class="btn">Rom-com</button>
    <button @click="getHorror" class="btn">Horror</button>
    </div>

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
      let fantasyBooks = this.books.filter(books => books.subgenre[0] === 'Fantasy');
        if (fantasyBooks.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = fantasyBooks;
      }       
    },

    getRomCom() {
      // filter the results based on what the subgenre is
        let romCom = this.books.filter(books => books.subgenre[0] === 'Rom-com');
        if (romCom.length === 0) {
        this.$router.push("/Error");
      } else {
        this.filteredBooks = romCom;
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
