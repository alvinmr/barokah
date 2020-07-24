<template>
  <div>
    <a href="#">
      <div
        class="flex flex-row items-center px-2 py-4 mr-10 bg-white rounded-lg shadow-md menu hover:bg-yellow-500"
      >
        <div class="w-16 p-4 bg-white rounded-full shadow-md">
          <img :src="require(`@/assets/icon/${icon}`)" alt="image-menu" />
        </div>
        <h2 class="mx-2 text-xs font-medium">{{ name }}</h2>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
  },
};
</script>

<style>
.menu {
  transition: 0.5s ease-out;
}
.active {
  @apply;
}
</style>