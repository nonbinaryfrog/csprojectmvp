<template>
  <div v-for="book in books" :key="book.title">
    <p>Book Title: {{ book.title }} </p> 
    <p>Author: {{ book.author }} </p>
    <p>Genre: {{ book.genre }} </p>
    <p>Subgenres: {{ book.subgenre }}</p>
    <p>Description: {{ book.description }} </p>

  </div>
</template>

<script>
export default {
  name: "BookCardView",
  props: ["books"],
};
</script>

<style></style>
