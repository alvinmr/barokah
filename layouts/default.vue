<template>
  <div>
    <div class="container flex">
      <div class="w-full pb-10 lg:w-9/12">
        <!-- #region Navbar -->
        <div class="flex items-center justify-between mt-4">
          <img src="@/assets/icon.png" alt="Icon" class="w-4/12 lg:w-auto" />
          <ul class="inline-flex">
            <li>
              <a class="px-4 py-2 font-medium bg-yellow-500 rounded-md" href="#">Daftar</a>
            </li>
            <li>
              <a class="px-4 py-2" href="#">Masuk</a>
            </li>
          </ul>
        </div>
        <!-- #endregion -->
        <Nuxt />
      </div>
      <!-- #region Desktop -->
      <div class="fixed right-0 hidden w-3/12 h-screen bg-red-400 lg:block"></div>
      <!-- #endregion -->
    </div>
    <!-- Mobile -->
    <div class="fixed bottom-0 block w-full h-16 bg-teal-500 lg:hidden"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  font-family: "Montserrat";
}
</style>
