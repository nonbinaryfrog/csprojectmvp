<template>
    <div id="search">
        <form>
            <div class="text-field">
                <label for="search">Search by Author or Title:</label>
                <input
                    type="text"
                    v-model="search"
                    placeholder="Begin typing..." />
            </div>
            <!-- <button>Submit</button> -->
        </form>

    <BookCardView :books="filterList" />
    </div>
</template>

<script>
import BookCardView from "./views/BookCardView";
// import axios from 'axios'

export default {
    name: "Search",
    props: ["books"],
    components: {
        BookCardView,
    },

    data() {
        return {
        // initialize filteredBooks as the full set of books.
        filteredBooks: this.books,
        search: "",
        };
    },

    computed: {
        filterList() {
            if (this.search !== "") {
                return this.filteredBooks.filter((book) => {
                    return (book.author[0].toLowerCase().match(this.search.toLowerCase()) 
                    || book.title.toLowerCase().match(this.search.toLowerCase())
                    )
                });
            }

            return this.filteredBooks
        }
    },
}
</script>

<style>
#search {
    margin: 0 auto;
    width: 50%;
    text-align: center;
    /* margin-top: 25px; */
}

.btn {
  display: grid;
  margin: 20px;
  font-family: 'Coming Soon', cursive;
}

#everything-btn {
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>