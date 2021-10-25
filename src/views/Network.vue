<script>
import MidlineTitle from '@/components/MidlineTitle.vue';

import { ref } from 'vue';

export default {
  components: {
    MidlineTitle,
  },
  setup(props) {
    const tabLink = ref('INVITATIONS');
    const tabContent = ref('RECEIVED');
    const tabLinkArray = ref([
      {
        icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
        name: 'CONNECTIONS',
        num: 1038,
      },
      {
        icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
        name: 'INVITATIONS',
        num: 2,
      },
      {
        icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
        name: 'TEAMMATES',
        num: 0,
      },
      {
        icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        name: 'GROUPS',
        num: 6,
      },
      {
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
        name: 'PAGES',
        num: 28,
      },
      {
        icon: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14',
        name: 'HASHTAGS',
        num: 8,
      },
    ]);

    const haveConnectionsArray = ref([
      {
        img: '/src/assets/feed/feedHead3.png',
        name: 'Brandon Willson',
        title: 'Senior UX designer',
        connections: '623 connections',
        content:
          'Hey,I saw your works.I like it!Can we do something together? Or maybe you have project for UX at the moment?',
      },
      {
        img: '/src/assets/feed/feedHead1.png',
        name: 'Theresa Steward',
        title: 'iOS developer',
        connections: '481 connections',
        content: '',
      },
    ]);
    const rencentConnectionsArray = ref([
      {
        img: '/src/assets/feed/feedHead4.png',
        name: 'Audrey Alexander',
        title: 'Team lead at Google',
        date: 'Yestarday. 14:30',
      },
      {
        img: '/src/assets/feed/feedHead2.png',
        name: 'Kyle Fisher',
        title: 'Product designer at Commandor Corp',
        date: 'Yestarday. 12:03',
      },
      {
        img: '/src/assets/home/vistors1.png',
        name: 'Darlene Black',
        title: 'HR-manager, 10 000 conncections',
        date: '26 aug. monday',
      },
      {
        img: '/src/assets/feed/feedHead1.png',
        name: 'Eduardo Russell',
        title: 'Full stack developer at Yandex',
        date: '25 aug. sunday',
      },
    ]);
    return {
      tabLinkArray,
      tabLink,
      tabContent,
      haveConnectionsArray,
      rencentConnectionsArray,
    };
  },
};
</script>
<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-3">
        <div class="overflow-hidden bg-white rounded-md shadow-md">
          <div
            class="relative flex items-center p-5 overflow-hidden font-bold transition-all duration-300 bg-white border-b cursor-pointer "
            @click="tabLink = item.name"
            v-for="item in tabLinkArray"
            :class="[item.name === tabLink && 'text-gray-400 pl-8']"
            :key="item.name"
          >
            <div
              class="absolute inset-0 w-3 h-full transition-all duration-200 -translate-x-full bg-blue-700 "
              :class="[item.name === tabLink && 'translate-x-0']"
            ></div>
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
                :d="item.icon"
              />
            </svg>
            <h3 class="ml-2">{{ item.name }}</h3>
            <div
              class="flex items-center ml-auto transition-all duration-200"
              v-if="item.num > 0"
              :class="[item.name === tabLink && 'text-yellow-600']"
            >
              {{ item.num }}
              <div
                v-show="item.name === tabLink"
                class="w-3 h-3 ml-3 bg-yellow-600 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-9">
        <div class="text-sm border-b">
          <div class="flex w-full">
            <button
              type="button"
              class="block w-1/4 px-5 py-2 font-bold transition-all duration-300 border border-b-0 "
              @click="tabContent = 'RECEIVED'"
              :class="[
                tabContent === 'RECEIVED' &&
                  'text-white bg-[#0C6A9B]   scale-110 rounded-tl rounded-tr boder-[#0C6A9B]',
              ]"
            >
              RECEIVED
            </button>
            <button
              type="button"
              class="block w-1/4 px-5 py-2 font-bold transition-all duration-300 bg-white border border-b-0 "
              :class="[
                tabContent === 'SENT' &&
                  'text-white bg-[#0C6A9B] scale-110 rounded-tl rounded-tr boder-[#0C6A9B]',
              ]"
              @click="tabContent = 'SENT'"
            >
              SENT
            </button>
          </div>
        </div>
        <MidlineTitle>
          <p class="flex-shrink-0 mx-5 text-sm font-bold">
            YOU HAVE
            <span class="text-[#0770A7]">2 NEW CONNECTIONS</span>
          </p>
        </MidlineTitle>

        <div
          class="p-5 mb-3 bg-white rounded-md"
          v-for="item in haveConnectionsArray"
          :key="item.name"
        >
          <div class="flex items-center">
            <img :src="item.img" :alt="item.name" />
            <div class="ml-3 space-y-1">
              <h3 class="text-sm font-bold">{{ item.name }}</h3>
              <p class="text-xs">{{ item.title }}</p>
              <p class="text-xs text-blue-300">{{ item.connections }}</p>
            </div>
            <div
              class="pl-3 mx-8 text-xs text-gray-400 border-l-2 border-blue-700"
            >
              {{ item.content }}
            </div>
            <div class="flex ml-auto space-x-3">
              <button
                type="button"
                class="
                  bg-[#0B6A9C]
                  border border-[#0B6A9C]
                  text-white
                  px-5
                  py-2
                  hover:bg-blue-600
                  transition-all
                  duration-300
                  rounded-md
                  font-bold
                  text-sm
                "
              >
                ACCEPT
              </button>
              <button
                type="button"
                class="px-5 py-2 text-sm font-bold text-gray-400 transition-all duration-300 bg-white border rounded-md  hover:bg-gray-200"
              >
                DECLINE
              </button>
            </div>
          </div>
        </div>
        <MidlineTitle>
          <p class="flex-shrink-0 mx-5 text-sm font-bold">RECENT CONNECTIONS</p>
        </MidlineTitle>
        <div class="grid grid-cols-2 gap-3">
          <div
            class="p-5 bg-white rounded-md"
            v-for="item in rencentConnectionsArray"
            :key="item.name"
          >
            <div class="flex items-center">
              <img :src="item.img" :alt="item.name" />
              <div class="ml-3 space-y-1">
                <h3 class="text-sm font-bold">{{ item.name }}</h3>
                <p class="text-xs">{{ item.title }}</p>
              </div>
            </div>
            <p class="text-xs text-right text-gray-300">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>