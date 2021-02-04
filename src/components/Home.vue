<template>
  <div>
    <div class="genrecards">
    <div class="genre-card">
      <!-- look into programmatic navigation to switch from the buttons to the components -->
      <router-link :to="({ path: '/PB', component: PBGenres })">Picture Books</router-link>
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
.genrecards {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 20px;
  padding-left: 20px;
}
</style>
