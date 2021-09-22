<template>
  <div class="home w-screen mx-auto relative">
    <header>
      <div class="bg-pattern-bg bg-cover bg-no-repeat bg-center py-8 px-4">
        <div class="text-white text-3xl font-medium text-center mb-8">
          IP Address Tracker
        </div>
        <div>
          <div class="search-bar w-full sm:w-2/5 flex sm:mx-auto">
            <form class="w-full" @submit.stop.prevent="handleSubmit">
              <input
                type="text"
                v-model="ipAddress"
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
                :disabled="isProcessing"
              >
                <span class="text-white font-bold btn-icon">></span>
              </button>
            </form>
          </div>

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
    <template v-if="isDefault"><DefaultMap /></template>
    <template v-if="!isDefault"><Result :data="ipAddressData" /></template>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import DefaultMap from "./../components/DefaultMap.vue";
import Result from "./../components/Result.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    DefaultMap,
    Result,
  },

  data() {
    return {
      ip: "-",
      ipAddress: "",
      ipAddressData: {
        ip: "-",
        isp: "-",
        location: {
          city: "-",
          country: "-",
          lat: 0,
          lng: 0,
          postalCode: "",
          region: "-",
          timezone: "00:00",
        },
      },
      isDefault: true,
      isProcessing: false,
    };
  },
  async created() {
    await this.fetchIpApi();
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
        console.log("fetchIpApi", this.ipAddressData);
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
    async handleSubmit() {
      try {
        let queryIp = this.ipAddress.trim();
        if (!this.ipAddress.length) {
          Toast.fire({
            icon: "warning",
            title: "Please enter IP adress.",
          });
          return;
        }
        const pattern =
          /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g;
        if (!pattern.test(queryIp)) {
          Toast.fire({
            icon: "warning",
            title: "Please enter valid IP address.",
          });
          return;
        }
        this.isProcessing = true;
        const response = await axios.get(`
        https://geo.ipify.org/api/v1?apiKey=${process.env.VUE_APP_IP_KEY}&ipAddress=${queryIp}`);
        if (response.status !== 200) {
          throw new Error(response.message);
        }
        const { data } = response;
        const { ip, isp, location } = data;
        const { city, country, lat, lng, postalCode, region, timezone } =
          location;
        this.ipAddressData = {
          ...this.ipAddressData,
          ip: ip,
          isp: isp,
          location: {
            city: city,
            country: country,
            lat: lat,
            lng: lng,
            postalCode: postalCode,
            region: region,
            timezone: timezone,
          },
        };

        this.isDefault = false;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
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
