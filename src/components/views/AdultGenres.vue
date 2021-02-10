<template>
  <div class="book-options">
    <h2>Adult: Choose a subgenre!</h2>
    <button> Get me everything! </button>
    <book-card-view :books="books" />
  </div>
</template>

<script>
import BookCardView from "./BookCardView";

export default {
  name: "AdultGenres",
  props: ["books"],
  components: {
    BookCardView,
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
  margin-bottom: 15px;
}
</style>
