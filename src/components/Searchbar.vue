<template>
  <div class="search-bar w-full sm:w-2/5 flex sm:mx-auto">
    <form class="w-full" @submit.stop.prevent="handleSubmit">
      <input
        type="text"
        v-model="ip"
        class="
          h-16
          w-10/12
          xl:w-9/10
          text-gary-deufult text-md
          placeholder-gray placeholder-opacity-75
          rounded-l-xl
          py-1
          px-2
          lg:px-5
        "
        maxlength="20"
        placeholder="Search for any IP address."
      />
      <button
        class="h-16 bg-black rounded-r-xl w-2/12 xl:w-1/10 py-1"
        type="submit"
      >
        <span class="text-white font-bold btn-icon">></span>
      </button>
    </form>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";

export default {
  name: "searchbar",
  data() {
    return {
      ip: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        let ip = this.ip.trim();
        if (!this.ip.length) {
          Toast.fire({
            icon: "warning",
            title: "Please enter IP adress.",
          });
          return;
        }
        const pattern =
          /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g;
        if (!pattern.test(ip)) {
          Toast.fire({
            icon: "warning",
            title: "Please enter valid IP address.",
          });
          return;
        }
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