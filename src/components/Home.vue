<template>
  <div>
    <div id="genrecards">

    <div class="genre-card">
      <!-- look into programmatic navigation to switch from the buttons to the components -->
      <router-link to="/PB">Picture Books</router-link>
    </div>

    <div class="genre-card">
      <router-link to="/MG">Middle Grade</router-link>
    </div>

    <div class="genre-card">
      <router-link to="/YA">Young Adult</router-link>
    </div>

    <div class="genre-card">
      <router-link to="/Adult">Adult</router-link>
    </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Home",
  props: {
    // Add props here
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Kranky&display=swap');

#genrecards {
  margin: auto;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 20px;
  padding-left: 20px;
  padding-top: 15px;
  font-family: 'Kranky', cursive;
}

.genre-card {
  border: solid 2px black;
  border-radius: 15px;
  width: 75%;
  height: 50px;
  padding-top: 30px;
  text-align: center;
  margin-bottom: 10px;
}

</style>
