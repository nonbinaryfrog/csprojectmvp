<template>
  <div class="book-options">
    <h2>Young Adult: Choose a subgenre!</h2>
    <button id="get-all-ya"> Get me everything! </button>
    <button @click="getBook" class="subgenre" id="fantasy">Fantasy</button>
    <button class="subgenre" id="rom-com">Rom-com</button>
    <button class="subgenre" id="horror">Horror</button>
  </div>
</template>

<script>
export default {
  name: "YAGenres",
  props: ["books"],
  methods: {
    getBook() {
      console.log("Button pressed!")
    }
  }
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

.subgenre {
  display: grid;
  margin: 20px;
}
</style>
