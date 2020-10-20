<template>
  <div>
    <nuxt-link
      class="flex flex-row items-center flex-1 w-40 h-20 px-2 py-4 mr-4 bg-white rounded-lg category hover:bg-primary"
      :to="`/${to}`"
    >
      <div class="w-16 p-4 bg-white rounded-full shadow-md photo">
        <img :src="require(`@/assets/icon/${icon}`)" alt="image-category" />
      </div>
      <h2 class="mx-2 text-xs font-medium">{{ name }}</h2>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    to: String,
  },
};
</script>

<style scoped>
.category {
  transition: 0.2s ease-out;
}
</style>