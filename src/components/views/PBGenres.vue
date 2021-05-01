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
import axios from 'axios'

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

    async getBio() {
      try {
        let bioBooks = await axios.get('http://localhost:3000/books/PB/Biographical', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'PB',
            subgenre: 'Biographical'
          }
        })
        if (bioBooks) {
          this.filteredBooks = bioBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },

    async getDomestic() {
      try {
        let domesticBooks = await axios.get('http://localhost:3000/books/PB/Domestic', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'PB',
            subgenre: 'Domestic'
          }
        })
        if (domesticBooks) {
          this.filteredBooks = domesticBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },

    async getAdventure() {
      try {
        let advenBooks = await axios.get('http://localhost:3000/books/PB/Adventure', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'PB',
            subgenre: 'Adventure'
          }
        })
        if (advenBooks) {
          this.filteredBooks = advenBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },

    async getEverything() {
      try {
        let pbBooks = await axios.get('http://localhost:3000/books/PB', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'PB'
          }
        })
        if (pbBooks) {
          this.filteredBooks = pbBooks.data;
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
