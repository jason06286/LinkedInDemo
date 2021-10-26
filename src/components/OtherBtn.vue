<script>
import { ref } from 'vue';

export default {
  setup(props) {
    const funcArray = ref([
      {
        d: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
        title: 'INSIGHTS',
      },
      {
        d: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z',
        title: 'ADVERTISE',
      },
      {
        d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        title: 'GROUPS',
      },
      {
        d: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
        title: 'PROFINDER',
      },
      {
        d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
        title: 'SALARY',
      },
      {
        d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
        title: 'SLIDESHARE',
      },
    ]);
    const servicesArray = ref([
      {
        title: 'Talent Solutions',
        description: 'Find,attract and recruit talent',
      },
      {
        title: 'Sales Solutions',
        description: 'Unlock sales opportunities',
      },
      {
        title: 'Post a job',
        description: 'Get your job in front of quality cnadidates',
      },
      {
        title: 'Marketing Solutions',
        description: 'Acquire customers and grow your business',
      },
      {
        title: 'Learning Solutions',
        description: 'Develop talent across your organisation',
      },
    ]);

    const isShow = ref(false);

    return {
      funcArray,
      servicesArray,
      isShow,
    };
  },
};
</script>
<template>
  <button
    type="button"
    @click="isShow = true"
    class="flex flex-col items-center justify-center px-3 py-2 text-sm font-semibold text-gray-800 border-l border-r  hover:bg-blue-400 hover:text-blue-700"
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
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </svg>
    <span>OTHER</span>
  </button>
  <div class="relative overflow-hidden">
    <div
      class="fixed inset-0 z-20 pointer-events-none  bg-black/10 backdrop-blur-sm opacity-70"
      :class="{ hidden: !isShow }"
    ></div>

    <div
      class="
        fixed
        top-0
        right-0
        bg-white
        w-[400px]
        h-full
        shadow-md
        z-40
        transition-all
        duration-300
      "
      :class="{ 'translate-x-full': !isShow }"
    >
      <button
        type="button "
        @click="isShow = false"
        class="absolute left-0 flex flex-col items-center justify-center p-3 text-sm font-bold bg-white shadow-md  hover:bg-gray-200"
        :class="{ '-translate-x-full': isShow }"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        CLOSE
      </button>
      <div class=" overflow-y-scroll h-full">
 <div class="relative flex items-center justify-between border-b ">
        <h3 class="px-3 font-bold">More from LinkedIn</h3>
        <button
          type="button"
          class="flex flex-col items-center justify-center p-3 text-sm text-blue-300 "
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
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          HELP
        </button>
      </div>
      <div class="p-5 border-b">
        <div
          class="
            flex
            items-center
            p-3
            text-sm text-white
            bg-[#0275B1]
            rounded-md
            mb-3
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <div class="ml-3">
            <p>Learning with LinkedIn</p>
            <p class="text-xs text-gray-200">Course, lectures, workshops</p>
          </div>
        </div>
        <div class="grid grid-cols-12">
          <div
            class="col-span-6 p-3 m-2 border rounded-md cursor-pointer  hover:bg-yellow-700"
            v-for="item in funcArray"
            :key="item.d"
          >
            <div class="flex items-center">
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
                  :d="item.d"
                />
              </svg>
              <span class="ml-3 text-sm font-bold">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 mb-3 border-b">
        <h3 class="mb-3 font-bold">Business services</h3>
        <div
          class="p-3 mb-3 border rounded-md"
          v-for="item in servicesArray"
          :key="item.title"
        >
          <p class="text-sm font-bold">{{ item.title }}</p>
          <p class="text-xs text-gray-500">{{ item.description }}</p>
        </div>
      </div>
      <div class="p-5">
        <button
          type="button "
          class="
            flex flex-col
            w-full
            py-4
            px-5
            text-sm text-white
            rounded-md
            bg-[#C7B378]
            hover:bg-yellow-600
          "
        >
          LinkedIn Premium
          <span class="text-xs text-gray-500"
            >Spacial feactures only for premium users</span
          >
        </button>
      </div>
      </div>
     
    </div>
  </div>
</template>
<style>
</style>