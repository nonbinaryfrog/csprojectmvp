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
import axios from 'axios'

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

    async getDomestic() {
      try {
        let domesticBooks = await axios.get('http://localhost:3000/books/A/Domestic%20Fiction', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'YA',
            subgenre: 'Domestic Fiction'
          }
        })
        if (domesticBooks) {
          this.filteredBooks = domesticBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        this.$router.push("/ServerError")
        console.log(`Network error: ${err.message}`)
      }
    },

    async getScifi() {
      try {
        let scifiBooks = await axios.get('http://localhost:3000/books/A/Science%20Fiction', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'A',
            subgenre: 'Science Fiction'
          }
        })
        if (scifiBooks) {
          this.filteredBooks = scifiBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        this.$router.push("/ServerError")
        console.log(`Network error: ${err.message}`)
      }
    },

    async getHorror() {
      try {
        let horrorBooks = await axios.get('http://localhost:3000/books/A/Horror', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'A',
            subgenre: 'Horror'
          }
        })
        if (horrorBooks) {
          this.filteredBooks = horrorBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        this.$router.push("/ServerError")
        console.log(`Network error: ${err.message}`)
      }
    },

    async getEverything() {
      try {
        let aBooks = await axios.get('http://localhost:3000/books/A', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'A'
          }
        })
        if (aBooks) {
          this.filteredBooks = aBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        this.$router.push("/ServerError")
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
