<template>
  <div class="flex flex-col w-screen justify-center items-center bg-slate-50">
    <!-- <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <p v-if="showParagraph">Ini adalah paragraf yang muncul jika showParagraph adalah true.</p>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="toggleParagraph"
    >
      Toggle Paragraf 1
    </button>
    <p v-if="showParagraph2">Ini adalah paragraf yang muncul jika showParagraph FALSE.</p>
    <button
      type="button"
      class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="toggleParagraph2"
    >
      Toggle Paragraf 2
    </button>
    <p v-if="showParagraph3">Ini adalah paragraf yang muncul jika showParagraph adalah true.</p>
    <button
      type="button"
      class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="toggleParagraph3"
    >
      Toggle Paragraf
    </button>
    <div>
      <p v-if="!isProductRoute">Paragraf yang disembunyikan di route product</p>
      <div v-show="isProductRoute">Div yang ditampilkan di route product</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showParagraph: true,
      showParagraph2: false,
      showParagraph3: false,
      isProductRoute: false
    }
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph
    },
    toggleParagraph2() {
      this.showParagraph2 = !this.showParagraph2
    },
    toggleParagraph3() {
      this.showParagraph3 = !this.showParagraph3
    }
  },
  created() {
    // Cek apakah rute saat ini adalah '/product'
    if (this.$route.path === '/product') {
      this.isProductRoute = true
    }
  }
}
</script>
