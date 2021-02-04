<template>
  <div v:for="book in books" :key="book.title">
    <p>Book Title:</p> 
    <p>Author:</p>
    <p>Genre:</p>
    <p>Subgenres:</p>
    <p>Description:</p>

  </div>
</template>

<script>
export default {
  name: "BookCardVue",
  props: ["books"],
};
</script>

<style></style>
