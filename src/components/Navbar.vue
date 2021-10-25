<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import SearchInput from '@/components/SearchInput.vue';
import OtherBtn from '@/components/OtherBtn.vue';

export default {
  components: {
    SearchInput,
    OtherBtn,
  },
  setup() {
    const route = useRoute();

    const navbarLinks = ref([
      {
        url: '/feed',
        svg: 'M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z',
        title: 'FEED',
      },
      {
        url: '/network',
        svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        title: 'NETWORK',
      },
      {
        url: '/jobs',
        svg: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'JOBS',
      },
      {
        url: '/chat',
        svg: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
        title: 'CHAT',
      },
      {
        url: '/',
        svg: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        title: 'NOTICES',
      },
    ]);

    return {
      navbarLinks,
      route,
    };
  },
};
</script>

<template>
  <div class="grid items-center grid-cols-12 shadow-md">
    <div class="flex justify-center col-start-1 border-r">
      <router-link to="/" class="block px-4 py-2 no-underline">
        <img src="@/assets/logo.png" alt="" class="w-10 h-10" />
      </router-link>
    </div>
    <div class="grid grid-cols-5 col-span-4 mr-3 border-r">
      <router-link
        v-for="link in navbarLinks"
        :key="link.title"
        :to="link.url"
        class="flex flex-col items-center justify-center p-2 text-sm font-semibold text-gray-800 no-underline  hover:text-blue-800 hover:bg-blue-400"
        :class="[
          route.path === link.url && 'text-blue-600 border-b-4 border-blue-500',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="link.svg"
          />
        </svg>
        <span>{{ link.title }}</span>
      </router-link>
    </div>
    <div class="col-span-3">
      <SearchInput />
    </div>
    <div class="flex items-center col-span-3 px-5 py-2 border-l">
      <img
        src="https://randomuser.me/api/portraits/women/57.jpg"
        alt=""
        class="w-10 h-10 mr-3 rounded-full"
      />
      <div>
        <h2>D.KARGAEV<span class="ml-3 text-gray-200">YOU</span></h2>
        <p class="text-sm text-gray-400">
          367 views today
          <span class="font-black text-green-400"
            >+32<svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              /></svg
          ></span>
        </p>
      </div>
    </div>
    <div class="col-span-1">
      <OtherBtn />
    </div>
  </div>
</template>

<style>
</style>