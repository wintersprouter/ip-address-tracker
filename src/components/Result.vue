<template>
  <div
    class="
      w-11/12
      sm:mx-auto
      rounded-xl
      bg-white
      mt-6
      text-center
      sm:text-left
      pt-3
      pb-6
      sm:flex
      sm:py-6
      sm:mt-28
      sm:w-8/10
      xl:w-4/6
      sm:justify-around
      sm:divide-x-2 sm:divide-opacity-10 sm:divide-gray-light
      absolute
      top-0
      left-1/2
      transform
      translate-y-1/4
      -translate-x-1/2
      sm:top-0
      sm:left-1/2
      sm:-translate-y-0 sm:-translate-x-2/4
    "
  >
    <div class="mt-3 sm:mt-0 sm:px-4" v-for="item in items" :key="item.id">
      <div class="text-gray uppercase font-medium tracking-wider">
        {{ item.title }}
      </div>
      <div class="font-bold text-2xl">{{ item.content }}</div>
    </div>
    <div class="mt-3 sm:mt-0 sm:px-4 sm:pt-3">
      <button
        class="text-white ring-4 ring-red-300 bg-red-500 rounded-md p-2 sm:mb-0"
        :disabled="isProcessing"
        type="button"
        @click="handleReset"
      >
        <span class="text-white font-bold btn-icon">reset</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ipAddressData: this.data,
      items: [
        {
          id: -1,
          title: "",
          content: "",
        },
      ],
      isProcessing: false,
    };
  },
  async mounted() {
    await this.getResult();
  },
  methods: {
    getResult() {
      const { ip, isp, location } = this.ipAddressData;
      this.items = [
        {
          id: 1,
          title: "IP Address",
          content: `${ip}`,
        },
        {
          id: 2,
          title: "Location",
          content: `${location.city} ${location.country} ${location.region}`,
        },
        {
          id: 3,
          title: "Timezone",
          content: `${location.timezone}`,
        },
        {
          id: 4,
          title: "ISP",
          content: `${isp}`,
        },
      ];
    },
    handleReset() {
      this.isProcessing = true;
      this.$emit("back-to-default");
      this.isProcessing = false;
    },
  },
};
</script>
