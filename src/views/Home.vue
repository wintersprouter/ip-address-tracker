<template>
  <div class="home w-screen mx-auto relative">
    <header>
      <div class="bg-pattern-bg bg-cover bg-no-repeat bg-center py-8 px-4">
        <div class="text-white text-2xl font-medium text-center mb-8">
          IP Address Tracker
        </div>
        <Searchbar />
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";

export default {
  name: "Home",
  components: {
    Searchbar,
  },
};
</script>
<style lang="css" scoped>
.bg-pattern-bg {
  height: 40vh;
}
</style>
