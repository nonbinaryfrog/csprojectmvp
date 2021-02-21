<template>
  <div v-for="book in books" :key="book.title">
    <p v-if="!readMoreActivated">
      Description: {{ book.description.slice(0, 200) }} ...
      <button @click="activateReadMore">Read more...</button>
    </p>

    <p v-else-if="readMoreActivated">
      Description: {{ book.description }}
      <button @click="deactivateReadMore">Read less...</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: ["books"],
  data() {
    return {
      readMoreActivated: true,
    };
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },
    deactivateReadMore() {
      this.readMoreActivated = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap");

p {
  font-family: "Coming Soon", cursive;
  text-align: center;
}
</style>
