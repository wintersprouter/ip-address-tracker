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
      z-20
    "
  >
    <div class="mt-3 sm:mt-0 sm:px-4" v-for="item in items" :key="item.id">
      <div class="text-gray uppercase font-medium tracking-wider">
        {{ item.title }}
      </div>
      <div class="font-bold text-2xl">{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: -1,
          title: "",
          content: "",
        },
      ],
    };
  },
  async created() {
    await this.getResult();
  },
  methods: {
    getResult() {
      this.items = [
        {
          id: 1,
          title: "IP Address",
          content: "192.121.174.153",
        },
        {
          id: 2,
          title: "Location",
          content: "brooklym,newyork 1001",
        },
        {
          id: 3,
          title: "Timezone",
          content: "UTC-5:00",
        },
        {
          id: 4,
          title: "ISP",
          content: "Space X Starlink",
        },
      ];
    },
  },
};
</script>
