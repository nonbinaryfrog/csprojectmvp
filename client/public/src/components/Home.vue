<template>
  <div>
    <div class="genre-card">
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

<style></style>
