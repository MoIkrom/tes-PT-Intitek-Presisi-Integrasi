<template>
  <div class="container p-2">
    <div class="my-7 h-screen container flex flex-col justify-center items-center">
      <!-- Tambahkan spinner di sini -->
      <div v-if="loading">
        <div class="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <!-- Tabel User -->
      <div v-else>
        <div class="my-5">
          <button
            type="button"
            @click="$router.push(`/user/create`)"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add New User
          </button>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            class="marginMobile w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Gender</th>
                <th scope="col" class="px-6 py-3">Email</th>
                <th scope="col" class="px-6 py-3">Phone Number</th>
                <th scope="col" class="px-6 py-3">University</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(user, index) in users"
                :key="index"
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td class="px-6 py-4">{{ user.id }}</td>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ user.firstName }} {{ user.lastName }}
                </th>
                <td class="px-6 py-4">{{ user.gender }}</td>
                <td class="px-6 py-4">{{ user.email }}</td>
                <td class="px-6 py-4">{{ user.phone }}</td>
                <td class="px-6 py-4">{{ user.university }}</td>
                <td class="px-6 py-4">
                  <div class="flex gap-3">
                    <button
                      type="button"
                      @click="$router.push(`/user/${user.id}`)"
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      @click="alertDeleteUser(user.id)"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-center items-center my-5">
            <!-- Paginasi -->
            <nav aria-label="Page navigation example">
              <ul class="flex items-center -space-x-px h-8 text-sm">
                <!-- Tombol Sebelumnya -->
                <li>
                  <a
                    href="#"
                    @click.prevent="previousPage"
                    :class="{ 'cursor-not-allowed': currentPage === 1 }"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >Previous
                    <span class="sr-only">Previous</span>
                    <!-- Icon Sebelumnya -->
                  </a>
                </li>
                <!-- Tombol Nomor Halaman -->
                <li v-for="page in visiblePages" :key="page">
                  <a
                    href="#"
                    @click.prevent="goToPage(page)"
                    :class="{
                      'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700':
                        currentPage === page,
                      'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
                        currentPage !== page
                    }"
                    class="flex items-center justify-center px-3 h-8 leading-tight"
                  >
                    {{ currentPage }}
                  </a>
                </li>
                <!-- Tombol Selanjutnya -->
                <li>
                  <a
                    href="#"
                    @click.prevent="nextPage"
                    :class="{ 'cursor-not-allowed': currentPage === totalPages }"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >Next
                    <span class="sr-only"></span>
                    <!-- Icon Selanjutnya -->
                  </a>
                </li>
              </ul>
            </nav>
          </div>
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
      users: [],
      currentPage: 1,
      limit: 5,
      totalPages: 0,
      loading: false
    }
  },
  computed: {
    visiblePages() {
      const visiblePages = []
      const totalPages = Math.ceil(this.users.length / this.limit)
      const maxVisible = 5 // Maximum number of visible pages
      let startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2))
      let endPage = Math.min(totalPages, startPage + maxVisible - 1)

      if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1)
      }

      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i)
      }

      return visiblePages
    }
  },
  methods: {
    fetchUsers() {
      this.loading = true

      axios
        .get(
          `https://dummyjson.com/users?limit=${this.limit}&skip=${(this.currentPage - 1) * this.limit}`
        )
        .then((res) => {
          console.log(res.data.users)
          this.totalPages = Math.ceil(res.data.total / this.limit)
          this.users = res.data.users
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false // Set loading menjadi false saat pemanggilan AJAX selesai
        })
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.fetchUsers()
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.fetchUsers()
      }
    },
    goToPage(page) {
      this.currentPage = page
      this.fetchUsers()
    },
    deleteUser(userId) {
      axios
        .delete(`https://dummyjson.com/users/${userId}`)
        .then(() => {})
        .catch((err) => {
          console.log(err)
        })
    },
    alertDeleteUser(userId) {
      Swal.fire({
        title: `Are you sure want to delete <br> product with ID : ${userId} ?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(userId)
          Swal.fire({
            title: 'Deleted!',
            html: `Success Deleted <br> Product with ID : ${userId}`,
            icon: 'success'
          })
        }
      })
    }
  },
  mounted() {
    this.fetchUsers()
    this.$router = router
  }
}
</script>
<style scoped>
@media screen and (max-width: 640px) {
  .justifyMobile {
    justify-content: start;
    margin-top: 100px;
  }
  .marginMobile {
    margin-left: 430px;
  }
  .text-action {
    text-align: start !important;
  }
}
</style>
