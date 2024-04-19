<script setup></script>

<template>
  <div class="pe-11">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">Total User</p>
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500"></p>
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">Total Product</p>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">{{users}} Member</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">............</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">{{products}} Product</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: "",
      products: "",
    }
  },
 
  methods: {
    fetchUsers() {
      axios
        .get(
          `https://dummyjson.com/users`
        )
        .then((res) => {
          console.log(res.data.total)
          this.users = res.data.total
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProducts() {
      axios
        .get(
          `https://dummyjson.com/products`
        )
        .then((res) => {
          console.log(res.data.total)
          this.products = res.data.total
        })
        .catch((err) => {
          console.log(err)
        })
    },
   
   
  },
  mounted() {
    this.fetchUsers()
    this.fetchProducts()
  }
}
</script>
