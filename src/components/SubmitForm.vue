<template>
  <div>
    <form action="#" @submit.prevent="onSubmit">
      <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

      <div>
        <div>Author Name</div>
        <!-- For some reason, uncommenting the code below
        renders the error 'unexpected mutation of submission prop'
        figure out what that means and fix it! -->
        <!-- <input type="text" placeholder="Enter author name" v-model="submission.authorName" /> -->
      </div>

      <div>
        <div>Book Title</div>
        <!-- <input type="text" placeholder="Enter book title" v-model="submission.bookTitle" /> -->
      </div>

      <button class="positive ui button">Submit</button>
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
      if (this.submission.authorName === '' || this.submission.bookTitle === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.submission);
      }
    }
  }
};
</script>

<style></style>
