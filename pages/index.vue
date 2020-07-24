<template>
  <div>
    <h1 class="mt-32 mb-4 text-2xl font-bold">Menu Kami</h1>
    <div class="wrap-menu">
      <Menu name="Semua" icon="fast-food.svg" />
      <Menu name="Mie Ayam" icon="ramen.svg" />
      <Menu name="Bakso" icon="meatball.svg" />
      <Menu name="Minuman" icon="water.svg" />
    </div>
  </div>
</template>

<script>
import Menu from "~/components/Menu.vue";
export default {
  data() {
    return {
      aktip: "ubah",
    };
  },
  components: { Menu },

  methods: {
    change() {
      console.log($nuxt.$route.name);
    },
  },
};
</script>

<style>
.wrap-menu {
  @apply flex items-center justify-start p-2 overflow-scroll rounded-lg;
}

@screen lg {
  .wrap-menu {
    @apply h-48 overflow-visible bg-gray-300 p-4;
  }
}
</style>