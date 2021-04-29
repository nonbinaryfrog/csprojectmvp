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
import axios from 'axios'

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
    async getFantasy() {
      try {
        let fantasyBooks = await axios.get('http://localhost:3000/books/YA/Fantasy', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'YA',
            subgenre: 'Fantasy'
          }
        })
        if (fantasyBooks.length >= 1) {
          this.filteredBooks = fantasyBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },

    async getRomCom() {
      try {
        let romcomBooks = await axios.get('http://localhost:3000/books/YA/Rom-com', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'YA',
            subgenre: 'Rom-com'
          }
        })
        if (romcomBooks.length >= 1) {
          this.filteredBooks = romcomBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },

    async getHorror() {
      try {
        let horrorBooks = await axios.get('http://localhost:3000/books/YA/Horror', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'YA',
            subgenre: 'Horror'
          }
        })
        if (horrorBooks.length >= 1) {
          this.filteredBooks = horrorBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },

    async getEverything() {
      try {
        let yaBooks = await axios.get('http://localhost:3000/books/YA', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'YA'
          }
        })
        if (yaBooks.length >= 1) {
          this.filteredBooks = yaBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    }
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
