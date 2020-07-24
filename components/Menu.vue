<template>
  <div>
    <div
      class="relative flex flex-row p-4 bg-white rounded-lg menu lg:flex-col lg:w-64 lg:h-full hover:shadow-xl"
    >
      <div class="absolute right-0 p-1 mr-4 bg-white rounded-full shadow-md cursor-pointer">
        <svg
          @click="love"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 love"
          :fill="isFav ? 'red' : 'none'"
        >
          <path
            d="M12.1033 2.19153C11.8346 1.88322 11.5154 1.63865 11.1642 1.47179C10.8129 1.30493 10.4365 1.21905 10.0563 1.21905C9.67607 1.21905 9.2996 1.30493 8.94836 1.47179C8.59711 1.63865 8.27799 1.88322 8.00921 2.19153L7.4514 2.83107L6.89359 2.19153C6.35067 1.56907 5.61432 1.21937 4.84652 1.21937C4.07872 1.21937 3.34237 1.56907 2.79946 2.19153C2.25654 2.81399 1.95154 3.65823 1.95154 4.53852C1.95154 5.41882 2.25654 6.26306 2.79946 6.88552L3.35727 7.52506L7.4514 12.219L11.5455 7.52506L12.1033 6.88552C12.3722 6.57736 12.5856 6.21147 12.7311 5.80877C12.8766 5.40606 12.9515 4.97443 12.9515 4.53852C12.9515 4.10262 12.8766 3.67098 12.7311 3.26828C12.5856 2.86557 12.3722 2.49969 12.1033 2.19153V2.19153Z"
            stroke="black"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="flex w-32 h-32 mr-4 lg:w-full lg:h-full lg:items-start lg:justify-center">
        <img src="@/assets/img/mieayambaksopolos.png" class="lg:w-1/2" alt />
      </div>
      <div class="flex flex-col flex-wrap justify-center mt-4 text-left">
        <h1 class="font-bold">Mie Ayam Bakso</h1>
        <h3 class="font-medium">Rp 10.000</h3>
        <button class="px-2 py-2 mt-4 text-xs font-bold bg-primary">Tambah</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFav: false,
    };
  },
  methods: {
    love() {
      if (this.isFav == true) this.isFav = false;
      else this.isFav = true;
    },
  },
};
</script>

<style scoped>
img {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.love:active {
  transform: scale(2);
  transition: 0.2s;
}

.menu {
  transition: 0.5s ease-in-out;
}
</style>