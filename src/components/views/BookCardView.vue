<template>
  <div id="book-card" v-for="book in books" :key="book.title">
    <p>Title: {{ book.title }} </p> 
    <p>Author: {{ book.author[0] }} </p>
    <p>Genre: {{ book.genre }} </p>
    <p>Subgenres: {{ book.subgenre[0] }}</p>

    <p v-if="!readMoreActivated">Description: {{ book.description.slice(0,200) }} ... 
      <button @click="activateReadMore">Read more...</button>
    </p>

    <p v-else-if="readMoreActivated">Description: {{ book.description }} 
      <button @click="deactivateReadMore">Read less...</button>
    </p>


    
    

  </div>
</template>

<script>
export default {
  name: "BookCardView",
  props: ["books"],
  data() {
    return {
      readMoreActivated: false
    }
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },    
    deactivateReadMore() {
      this.readMoreActivated = false;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');

p {
  font-family: 'Coming Soon', cursive;
  text-align: center;
}

#book-card {
  border: solid 2px black;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

</style>
