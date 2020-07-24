<template>
  <div>
    <nuxt-link
      class="flex flex-row items-center w-48 px-2 py-4 mr-4 bg-white rounded-lg lg:mr-10 category hover:bg-primary"
      :to="`/${to}`"
    >
      <div class="w-16 p-4 bg-white rounded-full shadow-md">
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

<style>
.category {
  transition: 0.2s ease-out;
}
.active {
  @apply bg-primary;
}
</style>