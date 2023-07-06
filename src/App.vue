<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from 'vue'
import Nav from '@/components/Nav.vue'
import Navbar from '@/components/Navbar.vue'
import Card from './components/Card.vue'


export default defineComponent({
  setup() {
    return {}
  },
  components: { Nav, Navbar, Card},
})
</script>

<template>
  <Navbar />
  <div class="grid grid-cols-2">
    <div class="border-r-2 border-gray-800">
      <Card />
    </div>
    <div class="flex flex-col min-h-screen justify-between border-l-2 border-gray-800">
      <Nav />
      <router-view class="container max-w-8xl mx-auto mb-auto px-4" />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
