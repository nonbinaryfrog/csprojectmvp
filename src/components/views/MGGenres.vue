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
import axios from 'axios'

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
    // getGhost() {
    //   // filter the results based on what the subgenre is
    //   let ghostBooks = this.books.filter(books => books.subgenre[0] === 'Ghost Story');
    //     if (ghostBooks.length === 0) {
    //     this.$router.push("/Error");
    //   } else {
    //     this.filteredBooks = ghostBooks;
    //   }       
    // },

    async getGhost() {
      try {
        let ghostBooks = await axios.get('http://localhost:3000/books/MG/Ghost%20Story', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'MG',
            subgenre: 'Ghost Story'
          }
        })
        if (ghostBooks) {
          this.filteredBooks = ghostBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },

    async getDomestic() {
      try {
        let domesticBooks = await axios.get('http://localhost:3000/books/MG/Domestic%20Fiction', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'MG',
            subgenre: 'Domestic Fiction'
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


    async getScifi() {
      try {
        let scifiBooks = await axios.get('http://localhost:3000/books/MG/Science%20Fiction', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'MG',
            subgenre: 'Science Fiction'
          }
        })
        if (scifiBooks) {
          this.filteredBooks = scifiBooks.data;
        } else {
          this.$router.push('/Error');
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`)
      }
    },


    async getEverything() {
      try {
        let mgBooks = await axios.get('http://localhost:3000/books/MG', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          params: {
            genre: 'MG'
          }
        })
        if (mgBooks) {
          this.filteredBooks = mgBooks.data;
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
