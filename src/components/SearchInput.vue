<script>
import { ref } from 'vue';

export default {
  setup() {
    const isFocus = ref(false);
    const jobsArray = ref([
      {
        img: 'https://i.pinimg.com/236x/be/30/6b/be306b8484f5133f4973971ea9646c23.jpg',
        title: 'UX/UI Designer',
        company: 'Upwork',
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUScqW4YTyBJ0Lg5GHQYI9TuRsM7rXzNWzw&usqp=CAU',
        title: 'Part-time UX designer',
        company: 'google',
      },
    ]);
    const usersArray = ref([
      {
        img: 'https://randomuser.me/api/portraits/men/46.jpg',
        title: 'Senior UX Designer',
        user: 'Brandon Wilson',
      },
      {
        img: 'https://randomuser.me/api/portraits/men/47.jpg',
        title: 'Product designer at Commandor Corp.',
        user: 'Kyle Fisher',
      },
    ]);
    const artilesArray = ref([
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/24701-nature-natural-beauty.jpg',
        title: 'A little about usability testing',
        viewers: '3912 viewers',
      },
    ]);

    return {
      jobsArray,
      usersArray,
      artilesArray,
      isFocus,
    };
  },
};
</script>
<template>
  <div class="relative z-10 px-3 py-2">
    <label class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-400"
        :class="{ hidden: isFocus }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        class="w-full bg-[#F7F9FB] border-none   "
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
      <button
        type="button"
        class="text-white bg-blue-700 rounded-md p-1.5 ml-1"
        :class="{ hidden: !isFocus }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </label>
    <div
      class="fixed inset-0 pointer-events-none  opacity-70 bg-black/10 backdrop-blur-sm -z-1"
      :class="{ hidden: !isFocus }"
    ></div>
    <div
      class="absolute right-0 w-full top-[61px] bg-white shadow-md py-5 px-3"
      :class="{ hidden: !isFocus }"
    >
      <div class="mb-3 border-b">
        <h3 class="mb-3 text-gray-300">JOBS</h3>
        <div
          class="flex items-center p-3 mb-3 border rounded-md"
          v-for="item in jobsArray"
          :key="item.title"
        >
          <div class="w-12 h-12 rounded-full">
            <img :src="item.img" :alt="item.title" />
          </div>
          <div>
            <h3 class="text-sm font-semibold">{{ item.title }}</h3>
            <p class="text-xs text-gray-300">{{ item.company }}</p>
          </div>
          <button
            type="button"
            class="p-2 ml-auto text-gray-300 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p class="my-3 text-sm font-black text-[#0275B1]">ALL JOBS (84)</p>
      </div>

      <div class="mb-3 border-b">
        <h3 class="mb-3 text-gray-300">USERS</h3>
        <div
          class="flex items-center p-3 mb-3 border rounded-md"
          v-for="item in usersArray"
          :key="item.title"
        >
          <div class="w-12 h-12 mr-2">
            <img :src="item.img" :alt="item.title" class="rounded-full" />
          </div>
          <div class="">
            <h3 class="text-sm font-semibold">{{ item.user }}</h3>
            <p class="text-xs text-gray-300">{{ item.title }}</p>
          </div>
          <button
            type="button"
            class="ml-auto text-gray-300 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p class="my-3 text-sm font-black text-[#0275B1]">ALL USERS (1,530)</p>
      </div>
      <div class="mb-3 border-b">
        <h3 class="mb-3 text-gray-300">ARTICLES</h3>
        <div
          class="flex items-center p-3 mb-3 border rounded-md"
          v-for="item in artilesArray"
          :key="item.title"
        >
          <div class="w-20 h-20 mr-2">
            <img
              :src="item.img"
              :alt="item.title"
              class="object-contain h-full"
            />
          </div>
          <div class="">
            <h3 class="text-sm font-semibold">{{ item.title }}</h3>
            <p class="text-xs text-gray-300">{{ item.viewers }}</p>
          </div>
          <button
            type="button"
            class="ml-auto text-gray-300 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p class="my-3 text-sm font-black text-[#0275B1]">ALL ARTICLES (30)</p>
      </div>
      <button
        type="button"
        class="w-full py-2 text-sm text-white bg-blue-500 rounded-md  hover:bg-blue-400"
      >
        ALL RESULTS (2,000+)
      </button>
    </div>
  </div>
</template>
<style>
</style>