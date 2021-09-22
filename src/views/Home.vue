<template>
  <div class="home w-screen mx-auto relative">
    <header>
      <div class="bg-pattern-bg bg-cover bg-no-repeat bg-center py-8 px-4">
        <div class="text-white text-3xl font-medium text-center mb-8">
          IP Address Tracker
        </div>
        <Searchbar />
        <h1 class="text-white text-2xl font-medium text-center my-8">
          Your IP address is <span>{{ this.ip }}</span>
        </h1>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import { Toast } from "./../utils/helpers";

import axios from "axios";
export default {
  name: "Home",
  components: {
    Searchbar,
  },
  data() {
    return {
      ip: "-",
    };
  },
  created() {
    this.fetchIpApi();
  },
  methods: {
    async fetchIpApi() {
      try {
        const ipAPI = "//api.ipify.org?format=json";
        const response = await axios.get(ipAPI);
        if (response.status !== 200) {
          throw new Error(response.message);
        }
        this.ip = response.data.ip;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "An error occurred,please try again later",
        });
      }
    },
  },
};
</script>
<style lang="css" scoped>
.bg-pattern-bg {
  height: 40vh;
}
</style>
