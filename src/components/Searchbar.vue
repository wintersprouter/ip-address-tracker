<template>
  <div class="search-bar w-full flex">
    <form class="w-full">
      <input
        type="text"
        class="
          h-16
          w-10/12
          text-gary-deufult text-md
          placeholder-gray-500 placeholder-opacity-75
          rounded-l-xl
          py-1
          px-2
        "
        placeholder="Search for any IP address or domain"
      />
      <button class="h-16 bg-black rounded-r-xl w-2/12 py-1" type="submit">
        <span class="text-white font-bold btn-icon">></span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "searchbar",
};
</script>