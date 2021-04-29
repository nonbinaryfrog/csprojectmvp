<template>
  <div>
    <div id="genre-btns">
      <button class="btns" @click="getPB">Picture Books</button>
      <button class="btns" @click="getMG">Middle Grade</button>
      <button class="btns" @click="getYA">Young Adult</button>
      <button class="btns" @click="getAdult">Adult</button>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["books"],
  methods: {
    getPB() {
      this.$router.push("/books/PB");
    },
    getMG() {
      this.$router.push("/books/MG");
    },
    getYA() {
      this.$router.push("/books/YA");
    },
    getAdult() {
      this.$router.push("/books/Adult");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Kranky&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');

#genre-btns {
  margin: auto;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 20px;
  padding-left: 20px;
  padding-top: 30px;
  font-family: "Kranky", cursive;
}

.btns {
  border: 1px solid whitesmoke;
  border-radius: 15px;
  margin: auto;
  width: 75%;
  height: 50px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #fbdcc4;
  font-family: 'Coming Soon', cursive;
}

button:hover {
  color: white;
}

h2 {
  font-family: 'Playfair Display', serif;
}

</style>
