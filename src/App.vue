<template>
  <div>
    <div id="banner">
      <h1>Cracked Spines Project</h1>
      <div id="buttons">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="['tab-button', { active: currentTab.name === tab.name }]"
          @click="currentTab = tab"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>
    <keep-alive>
      <component :is="currentTab.component"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Search from "./components/Search.vue";
import About from "./components/About.vue";
import SubmitForm from "./components/SubmitForm.vue";

export default {
  name: "App",
  components: {
    Home: Home,
    Search: Search,
    About: About,
    SubmitForm: SubmitForm,
  },
  data() {
    return {
      currentTab: [
        {
          name: "Home",
          component: Home,
        },
      ],
      tabs: [
        {
          name: "Home",
          component: Home,
        },
        {
          name: "Search",
          component: Search,
        },
        {
          name: "About",
          component: About,
        },
        { name: "Submit", component: SubmitForm },
      ],
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin: auto;
  width: 50%;
}

#buttons {
  text-align: center;
  margin: auto;
}
</style>
