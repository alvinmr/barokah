<template>
  <div>
    <div class="container flex">
      <div class="w-full pb-10 lg:w-8/12">
        <!-- #region Navbar -->
        <div class="flex items-center justify-between mt-4">
          <img src="@/assets/icon.png" alt="Icon" class="w-4/12 lg:w-auto" />
        </div>
        <!-- #endregion -->
        <Nuxt />
      </div>
      <!-- #region Desktop -->
      <div class="fixed right-0 hidden w-4/12 h-full p-4 lg:block">
        <h1 class="mt-4 text-xl font-bold text-center">Keranjang Mu</h1>
        <!-- Waktu dan Pengiriman -->
        <div class="p-4 mt-4 text-sm bg-white rounded-lg">
          <div class="flex justify-between">
            <div class="flex flex-row">
              <div class="mr-4 waktu-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>Waktu</p>
            </div>
            <div class="flex flex-row">
              <p class="mr-4">Segera</p>
              <div class="segera-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 15H15.75"
                    stroke="#F6DA63"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.375 2.62499C12.6734 2.32662 13.078 2.159 13.5 2.159C13.7089 2.159 13.9158 2.20015 14.1088 2.2801C14.3019 2.36006 14.4773 2.47725 14.625 2.62499C14.7727 2.77272 14.8899 2.94811 14.9699 3.14114C15.0498 3.33417 15.091 3.54106 15.091 3.74999C15.091 3.95892 15.0498 4.1658 14.9699 4.35883C14.8899 4.55186 14.7727 4.72725 14.625 4.87499L5.25 14.25L2.25 15L3 12L12.375 2.62499Z"
                    stroke="#F6DA63"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-5">
            <div class="flex flex-row">
              <div class="mr-4 pengantaran-icon">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 3H1.04169V16H16.6667V3Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 8H20.8334L23.9584 11V16H16.6667V8Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.72917 21C7.16741 21 8.33333 19.8807 8.33333 18.5C8.33333 17.1193 7.16741 16 5.72917 16C4.29093 16 3.125 17.1193 3.125 18.5C3.125 19.8807 4.29093 21 5.72917 21Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.2709 21C20.7091 21 21.875 19.8807 21.875 18.5C21.875 17.1193 20.7091 16 19.2709 16C17.8326 16 16.6667 17.1193 16.6667 18.5C16.6667 19.8807 17.8326 21 19.2709 21Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>Pengantaran</p>
            </div>
            <div class="flex flex-row">
              <p class="font-bold">Ambil Di tempat</p>
            </div>
          </div>
        </div>
        <!-- end Waktu dan Pengiriman -->
        <!-- Isi Keranjang -->
        <div class="p-4 mt-5 overflow-y-scroll bg-white rounded-lg rounded-b-none cart">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex flex-row justify-between py-5 border-b-2 border-black"
          >
            <h1 class="flex-grow-0 font-bold">{{ item.name }}</h1>
            <div class="flex">
              <button
                class="btn-qty"
                @click="$store.dispatch('localStorage/decreaseCartQty', item.id)"
              >-</button>
              <input
                type="number"
                v-model.number="item.qty"
                maxlength="100"
                class="w-12 px-2 bg-white"
                disabled
              />
              <button
                class="btn-qty"
                @click="$store.commit('localStorage/INCREASE_QTY_CART', item.id)"
              >+</button>
            </div>
            <p class="font-bold text-gray-500">{{ item.price * item.qty | currency}}</p>
            <span
              class="px-2 font-bold text-white bg-black rounded-full cursor-pointer"
              @click="$store.dispatch('localStorage/deleteFromCart', item.id)"
            >x</span>
          </div>
          <div v-if="!items.length" class="empty">
            <h1 class="font-bold text-center">Keranjangmu masih kosong nih :(</h1>
          </div>
        </div>
        <div class="h-16 bg-white border-t-2 border-gray-500">
          <div class="flex flex-row justify-between p-6">
            <p class="font-bold">Total</p>
            <p>{{ total | currency }}</p>
          </div>
        </div>
        <button
          class="w-full py-3 text-lg font-bold text-center rounded-lg rounded-t-none bg-primary"
        >Checkout</button>
        <!-- end Isi Keranjang -->
      </div>
      <!-- #endregion -->
    </div>
    <!-- Mobile -->
    <div class="fixed bottom-0 block w-full h-16 bg-teal-500 lg:hidden"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapState({
      items: (state) => state.localStorage.items,
    }),
    ...mapGetters("localStorage", ["total"]),
    ...mapMultiRowFields("localStorage", ["items"]),
  },
};
</script>

<style>
* {
  font-family: Montserrat, sans-serif;
}
body {
  background: #f5f6f7;
}
.active {
  @apply bg-primary;
}
.btn-qty {
  @apply bg-primary font-bold px-2 cursor-pointer;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  text-align: center;
}
.empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cart {
  height: 50vh;
}
</style>
