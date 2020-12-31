<template>
  <div>
    <div id="banner">
      <h1>Cracked Spines Project</h1>
      <div id="buttons">
        <button 
        v-for="tab in tabs" 
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
        > {{ tab }}</button>
      </div>
    </div>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Search from "./components/Search.vue";
import About from "./components/About.vue";
import SubmitForm from "./compnents/SubmitForm.vue";

export default {
  name: "App",
  components: {
    Home: Home,
    Search: Search,
    About: About,
    SubmitForm: SubmitForm
  },
  data() {
    return {
      currentTab: Home,
      tabs: [Home, Search, About, SubmitForm]
    }
  },
  computed: {
    currentTabComponent() {
      return tab
    }
  }
};
</script>

<style>
.banner {
    text-align: center;
    margin: auto 0;
    width: 50%;
}
</style>
