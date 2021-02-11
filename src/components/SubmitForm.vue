<template>
  <div>
    <form action="#" @submit.prevent="onSubmit">

      <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

      <div class="text-field">
        <label for="authorName">Author Name</label>
        <input id="authorName" type="text" placeholder="Enter author name..." />
      </div>

      <div class="text-field">
        <label for="bookTitle">Book Title</label>
        <input id="bookTitle" type="text" placeholder="Enter book title..." />
      </div>

      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SubmitForm",
  props: {
    submission: {
      type: Object,
      required: false,
      default: () => {
        return {
          authorName: '',
          bookTitle: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
      // on submit, the information needs to go to the submissions collection
      // so change this when you figure out how to do that!
    onSubmit: function() {
      if (this.authorName === '' || this.bookTitle === '') {
        this.errorsPresent = true;
      } else {
        console.log(this.authorName, this.bookTitle);
        this.$emit('createOrUpdate', this.submission);
      }
    }
  }
};
</script>

<style>
form {
  margin: auto;
  width: 50%;
  margin-top: 15px;
  text-align: center;
  font-family: 'Fredericka the Great', cursive;
}

label {
  margin-left: 10px;
}

button {
  margin-top: 15px;
}

.text-field {
  margin: 10px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}

input {
  width: 50%;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
}
</style>
