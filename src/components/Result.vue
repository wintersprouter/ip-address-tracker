<template>
  <div
    class="
      w-full
      sm:w-2/5
      sm:mx-auto
      rounded-xl
      bg-white
      mt-6
      text-center
      pt-3
      pb-6
    "
  >
    <div class="mt-3" v-for="item in items" :key="item.id">
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
