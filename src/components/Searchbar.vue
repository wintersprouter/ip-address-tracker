<template>
  <div class="search-bar w-full sm:w-2/5 flex sm:mx-auto">
    <form class="w-full">
      <input
        type="text"
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
        placeholder="Search for any IP address or domain"
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
export default {
  name: "searchbar",
};
</script>