<template>
  <div class="book-options">
    <h2>Picture Books: Choose a subgenre!</h2>
    <button> Get me everything! </button>
  </div>
</template>

<script>
export default {
  name: "PBGenres",
  props: ["books"],
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
