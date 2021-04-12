<template id="App">
  <div id="banner">
    <h1 @click="goHome">Cracked Spines Project</h1>
    <div id="navBar">
      <!-- These router-links will route to the components -->
      <router-link class="link" to="/books">Home</router-link>
      <router-link class="link" to="/Search">Search</router-link>
      <router-link class="link" to="/About">About</router-link>
      <router-link class="link" to="/Submit">Submit Form</router-link>
    </div>
  </div>

  <!-- Depending on which router-link is clicked, the router-view will change -->
  <router-view></router-view>
</template>

<script>
import BookData from "./BookData"

export default {
  name: "app",
  data() {
    return {
      allBooks: BookData,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/books");
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Kranky&display=swap');

h1 {
  text-align: center;
  margin: auto;
  width: 50%;
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: 'Fredericka the Great', cursive;
  color: #7d0633;
  cursor: pointer;
}

#navBar {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 20px;  
  padding-left: 20px;
  text-align: center;
  padding-top: 10px;
  border: 2px solid black;
  font-family: 'Kranky', cursive;
  background-image: url('./assets/librarybackground.jpg');
}
#App {
  background-size: cover;
  background-position: center;
}

.link {
  color: white;
}

</style>
