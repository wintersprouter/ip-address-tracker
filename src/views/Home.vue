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
    <Result
      class="
        absolute
        top-40
        left-1/2
        transform
        -translate-x-2/4
        sm:top-1/4
        sm:left-1/2
        sm:-translate-y-1/4 sm:-translate-x-2/4
      "
    />
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import Result from "../components/Result.vue";

export default {
  name: "Home",
  components: {
    Searchbar,
    Result,
  },
};
</script>
<style lang="css" scoped>
.bg-pattern-bg {
  height: 40vh;
}
</style>
