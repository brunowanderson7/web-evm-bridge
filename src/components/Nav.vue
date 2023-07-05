<template>
  <div
    class="flex flex-wrap items-center justify-around md:justify-center my-8"
  >
    <router-link
      :to="{ name: 'Home' }"
      class=" mr-0 md:mr-4 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500"
      :class="
        $route.name == 'Home'
          ? 'bg-gray-600 text-white hover:bg-gray-500 border border-gray-600'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-black block'
      "
      aria-current="page"
      >Bridge to Avalanche</router-link
    >

    <router-link
      :to="{ name: 'Destination' }"
      class="border block px-3 py-2 rounded-md text-base font-medium"
      :class="
        $route.name == 'Destination'
          ? 'bg-gray-600 text-white hover:bg-gray-500 border border-gray-600'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-black'
      "
      aria-current="page"
      >Send back to Sepolia</router-link
    >
  </div>
</template>
