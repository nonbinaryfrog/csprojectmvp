<template>
  <div class="book-options">
    <h2>Adult: Choose a subgenre!</h2>
    <button> Get me everything! </button>
  </div>
</template>

<script>
export default {
  name: "AdultGenres",
  props: {
    // Add props here
  },
};
</script>

<style>
.book-options {
  margin: auto;
  width: 50%;
}

button {
  margin-left: 25%;
}
</style>
