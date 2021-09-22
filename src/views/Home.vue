<template>
  <div class="home w-screen mx-auto relative">
    <header>
      <div class="bg-pattern-bg bg-cover bg-no-repeat bg-center py-8 px-4">
        <div class="text-white text-3xl font-medium text-center mb-8">
          IP Address Tracker
        </div>
        <div>
          <Searchbar />

          <h1 class="text-white text-2xl font-medium text-center my-8">
            Your IP address is <span>{{ this.ip }}</span
            ><button
              type="button"
              class="
                text-white
                ring-4 ring-indigo-100
                bg-indigo-400
                rounded-md
                p-1
                hidden
                sm:inline-block
                sm:ml-5
              "
              v-clipboard:copy="ip"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              Copy!
            </button>
          </h1>
          <div class="flex justify-center sm:hidden">
            <button
              type="button"
              class="
                text-white
                ring-4 ring-indigo-100
                bg-indigo-400
                rounded-md
                p-1
              "
              v-clipboard:copy="ip"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              Copy!
            </button>
          </div>
        </div>
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
    onCopy() {
      Toast.fire({
        icon: "success",
        title: `You just copied your ip address：${this.ip}`,
      });
    },
    onError() {
      Toast.fire({
        icon: "warning",
        title: "Failed to copy ip,please try again later",
      });
    },
  },
};
</script>
<style lang="css" scoped>
.bg-pattern-bg {
  height: 40vh;
}
</style>
