<template>
  <div>
    <h1 class="mt-32 mb-4 text-2xl font-bold">Menu Kami</h1>
    <div class="wrap-menu">
      <Category name="Semua" icon="fast-food.svg" to />
      <Category name="Mie Ayam" icon="ramen.svg" to="mie-ayam" />
      <Category name="Bakso" icon="meatball.svg" to="bakso" />
      <Category name="Minuman" icon="water.svg" to="minuman" />
    </div>
    <div class="grid grid-cols-1 gap-1 mt-4 lg:gap-4 lg:row-gap-8 lg:grid-cols-3">
      <Menu :id="1" name="Mie Ayam 1" />
      <Menu :id="2" name="Mie Ayam 2" />
      <Menu :id="3" name="Mie Ayam 3" />
      <Menu />
      <Menu />
      <Menu />
    </div>
  </div>
</template>

<script>
import Category from "~/components/Category.vue";
import Menu from "~/components/Menu.vue";
export default {
  components: { Category, Menu },
};
</script>

<style >
.wrap-menu {
  @apply flex items-center justify-start p-2 overflow-scroll rounded-lg;
}

@screen lg {
  .wrap-menu {
    @apply flex flex-auto justify-center p-3 overflow-visible;
  }
}
</style>