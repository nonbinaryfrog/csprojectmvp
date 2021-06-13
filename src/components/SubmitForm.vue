<template>
  <div>
    <form action="#" @submit.prevent="onSubmit">

      <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

      <div class="text-field">
        <label for="authorName">Author Name</label>
        <input id="authorName" type="text" v-model="authorName" placeholder="Enter author name..." />
      </div>

      <div class="text-field">
        <label for="bookTitle">Book Title</label>
        <input id="bookTitle" type="text" v-model="bookTitle" placeholder="Enter book title..." />
      </div>

      <button>Submit</button>

      <p v-if="submissionReceived"> Submission received!</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

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
      errorsPresent: false,
      authorName: '',
      bookTitle: '',
      submissionReceived: false
    };
  },
  methods: {
      // on submit, the information goes to the submissions collection
    async onSubmit() {
      try {
        if (this.authorName === '' || this.bookTitle === '') {
          this.errorsPresent = true;
        } else {
          await axios.post('http://localhost:3000/Submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: {
              author: this.authorName,
              title: this.bookTitle
            }
          })
        }
        this.submissionReceived = true;
      } catch(err) {
        console.log(`Network Error: ${err.message}`)
      }
      this.authorName = '';
      this.bookTitle = '';
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
