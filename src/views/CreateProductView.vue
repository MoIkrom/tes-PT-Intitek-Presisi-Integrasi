<template>
  <div class="container p-2">
    <div class="h-screen container flex flex-col justify-center items-center">
      <div
        class="flex justify-center items-center w-3/4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 relative overflow-x-auto sm:rounded-lg"
      >
        <div class="w-3/4 p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" @submit.prevent="createProducts()">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Crete New Product</h5>
            <div>
              <label
                for="productName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Product Name</label
              >
              <input
                type="text"
                name="productName"
                id="productName"
                v-model="productName"
                @change="handleProductName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                for="productCategory"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Category</label
              >
              <input
                type="text"
                name="productCategory"
                id="productCategory"
                v-model="productCategory"
                @change="handleproductCategory"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                for="productPrice"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Price</label
              >
              <input
                type="text"
                name="productPrice"
                id="productPrice"
                :value="`$${productPrice}`"
                @change="handleproductPrice"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                for="productName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Stock</label
              >
              <input
                type="text"
                name="productStok"
                id="productStok"
                v-model="productStock"
                @change="handleproductStok"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div class="flex justify-between">
              <button
                type="button"
                @click="toProductView"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <div class="flex gap-2 justify-start items-center">
                  <svg
                    class="w-3.5 h-3.5 ms-2 transform rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <p>Back</p>
                </div>
              </button>

              <button
                type="submit"
                id="saveButton"
                :disabled="isButtonDisabled"
                class="w-1/3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <div v-if="loading" role="status" class="flex justify-center items-center gap-2">
                  <svg
                    aria-hidden="true"
                    class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <p>Loading . . .</p>
                </div>
                <p v-else>Update</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '@/router'

export default {
  data() {
    return {
      productName: '',
      productCategory: '',
      productStok: '',
      productPrice: '',
      loading: false,
      updateSuccess: false,
      isButtonDisabled: false
    }
  },

  methods: {
    createProducts() {
      const body = {
        productName: this.productName,
        productCategory: this.productCategory,
        productPrice: this.productPrice,
        productStock: this.productStock
      }
      this.loading = true
      axios
        .post(`https://dummyjson.com/products/add`, body, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          this.loading = false
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Success Create New Product`,
            html: `<strong>Product ID :</strong><i>${res.data.id}</i> <br/><strong>Product Name :</strong><i>${this.productName}</i>`,
            showConfirmButton: true
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleProductName(event) {
      this.productName = event.target.value
    },
    handleproductCategory(event) {
      this.productCategory = event.target.value
    },
    handleproductStok(event) {
      this.productStok = event.target.value
    },
    handleproductPrice(event) {
      this.productPrice = event.target.value
    },
    checkInput() {
      this.isButtonDisabled =
        this.productName.trim() === '' ||
        this.productCategory.trim() === '' ||
        this.productPrice.trim() === '' ||
        this.productStock.trim() === ''
    },
    toProductView() {
      router.push('/product')
    }
  },

  mounted() {
    this.$router = router
  }
}
</script>
