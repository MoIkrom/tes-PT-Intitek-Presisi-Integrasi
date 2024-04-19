<template>
  <NavbarMenu />
  <SidebarMenu
    :class="{
      hidden:
        $route.path === '/user/' + $route.params.id ||
        $route.path === '/product/' + $route.params.id ||
        $route.path === '/product/create'
    }"
  />

  <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
    <router-view />
    <FooterMenu
      :class="{
        hidden:
          $route.path === '/user/' + $route.params.id ||
          $route.path === '/product/' + $route.params.id ||
          $route.path === '/product/create'
      }"
    />
  </div>
</template>

<script setup>
import SidebarMenu from './components/SidebarMenu.vue'
import NavbarMenu from './components/NavbarMenu.vue'
import FooterMenu from './components/FooterMenu.vue'
</script>
