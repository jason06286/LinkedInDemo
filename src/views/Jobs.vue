<script>
import HomeContentBlock from '@/components/home/HomeContentBlock.vue';
import MidlineTitle from '@/components/MidlineTitle.vue';

import { ref } from 'vue';

export default {
  components: {
    HomeContentBlock,
    MidlineTitle,
  },
  setup(props) {
    const jobsArray = ref([
      {
        img: '/src/assets/jobs/jobs1.png',
        title: 'UX/UI designer',
        company: 'Upwork',
        workStyle: 'Remote on',
        description:
          "On Upwork you'll find a range of top freelancers and agencies from develops and development agences to designers and creative agencies copywriters.",
      },
      {
        img: '/src/assets/jobs/jobs2.png',
        title: 'Product designer',
        company: 'Facebook',
        workStyle: 'CA, USA',
        description:
          "Founded in 2004,Facebook's mission is to give people the power to build community and bring the workd closer together .People use our products to stay.",
      },
      {
        img: '/src/assets/jobs/jobs3.png',
        title: 'Part-time UX designer',
        company: 'Google',
        workStyle: 'International',
        description:
          "Search the word's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking.",
      },
      {
        img: '/src/assets/jobs/jobs4.png',
        title: 'Web designer',
        company: 'Linkdin',
        workStyle: 'CA, USA',
        description:
          "Likedin,the world's largest professional network. The mission of Linkedin is simple connect the workd's professional",
      },
    ]);

    const newJobsArray = ref([
      {
        img: '/src/assets/jobs/jobs6.png',
        title: 'UI designer',
        company: 'Instagram',
        workStyle: 'CA, USA',
        description:
          'Instagram is a photo and video-sharing social networking service owned by Facebook, Inc.',
      },
      {
        img: '/src/assets/jobs/jobs5.png',
        title: 'Product designer',
        company: 'Periscope',
        workStyle: 'Remote only',
        description:
          'eriscope is a live video straming app for Android and iOS developed by Kayvon Beykpour and Job Bernstein and acquired by Twitter before launch in 2015.',
      },
    ]);

    const searchsArray = ref([
      {
        title: 'UX/UI designer',
        workStyle: 'Remote',
      },
      {
        title: 'Web designer',
        workStyle: 'Los-Angetes, CA',
      },
      {
        title: 'Graphic designer',
        workStyle: 'Malaysla Kuala Lumpur',
      },
    ]);

    const trackedArray = ref([
      {
        img: '/src/assets/jobs/tracked1.png',
        title: 'UX/UI Designer',
        company: 'Upwork',
      },
      {
        img: '/src/assets/jobs/tracked2.png',
        title: 'Product designer',
        company: 'Facebook',
      },
    ]);
    const articlesArray = ref([
      {
        img: '/src/assets/jobs/articles1.png',
        title: 'The guide. Apply for a job',
        viewers: '12,932 viewers',
      },
      {
        img: '/src/assets/jobs/articles2.png',
        title: 'Your dream job and how you can get',
        viewers: '9,112 viewers',
      },
      {
        img: '/src/assets/jobs/articles3.png',
        title: 'Now you know it. 15 steps to find job',
        viewers: '7,221 viewers',
      },
    ]);

    return {
      jobsArray,
      newJobsArray,
      searchsArray,
      trackedArray,
      articlesArray,
    };
  },
};
</script>
<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-9">
        <HomeContentBlock>
          <template #title>
            <h3 class="pb-3 mb-5 text-sm font-bold border-b">
              YOUR DREAM JOB IS HERE
            </h3>
          </template>
          <template #content>
            <div class="flex">
              <input
                type="text"
                placeholder="Seach jobs"
                class="w-full mr-auto border-0 outline-none"
              />
              <div class="flex ml-2">
                <button
                  type="button"
                  class="
                    text-gray-300
                    p-2
                    hover:bg-[#0770A6] hover:text-white
                    rounded-md
                  "
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="
                    text-gray-300
                    p-2
                    hover:bg-[#0770A6] hover:text-white
                    rounded-md
                  "
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </HomeContentBlock>
        <MidlineTitle>
          <p class="flex-shrink-0 mx-5 text-sm font-bold">JOB FOR YOU</p>
        </MidlineTitle>
        <div
          class="flex items-center p-5 mb-3 bg-white rounded-md"
          v-for="item in jobsArray"
          :key="item.company"
        >
          <img :src="item.img" :alt="item.company" />
          <div class="ml-5 space-y-1">
            <h3 class="text-sm font-bold">{{ item.title }}</h3>
            <p class="text-xs">
              {{ item.company }}
              <span class="ml-3 text-gray-400">{{ item.workStyle }}</span>
            </p>
            <p class="text-xs">{{ item.description }}</p>
          </div>
          <button
            type="button"
            class="
              ml-auto
              text-white
              font-bold
              px-8
              py-2
              bg-[#086DA2]
              hover:bg-blue-500
              rounded-md
              text-sm
            "
          >
            MORE
          </button>
        </div>
        <MidlineTitle>
          <p class="flex-shrink-0 mx-5 text-sm font-bold">NEW JOBS</p>
        </MidlineTitle>
        <div
          class="flex items-center p-5 mb-3 bg-white rounded-md"
          v-for="item in newJobsArray"
          :key="item.company"
        >
          <img :src="item.img" :alt="item.company" />
          <div class="ml-5 space-y-1">
            <h3 class="text-sm font-bold">{{ item.title }}</h3>
            <p class="text-xs">
              {{ item.company }}
              <span class="ml-3 text-gray-400">{{ item.workStyle }}</span>
            </p>
            <p class="text-xs">{{ item.description }}</p>
          </div>
          <button
            type="button"
            class="
              ml-auto
              text-white
              font-bold
              px-8
              py-2
              bg-[#086DA2]
              hover:bg-blue-500
              rounded-md
              text-sm
            "
          >
            MORE
          </button>
        </div>
      </div>
      <div class="col-span-3">
        <div class="mb-5 bg-white rounded-md">
          <div class="flex items-center justify-center p-5">
            <button
              type="button"
              class="
                w-full
                bg-[#086FA5]
                text-white
                hover:bg-blue-800
                py-2
                rounded-md
              "
            >
              POST A JOB
            </button>
          </div>
        </div>
        <HomeContentBlock>
          <template #title>
            <div class="flex justify-between pb-3 mb-5 border-b">
              <h3 class="text-sm font-bold">MY SEARCHES</h3>
              <button
                type="button"
                class="text-sm font-bold text-blue-400 hover:text-blue-300"
              >
                EDIT LIST
              </button>
            </div>
          </template>
          <template #content>
            <div
              class="bg-[#E8F0F8] rounded-md p-3 flex items-center mb-3"
              v-for="(item, index) in searchsArray"
              :key="item.title"
            >
              <div class="mr-auto">
                <h3 class="text-sm font-bold">
                  {{ item.title }}
                  <span class="ml-2 text-green-400" v-if="index === 0"
                    >+240</span
                  >
                </h3>

                <p class="text-xs text-gray-400">{{ item.workStyle }}</p>
              </div>
              <button type="button" class="text-blue-700" v-if="index !== 0">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button type="button" class="text-blue-700" v-else>
                <img
                  src="@/assets/jobs/bell-off.png"
                  alt="bell-off"
                  class="object-contain w-6 h-6"
                />
              </button>
            </div>
          </template>
        </HomeContentBlock>
        <HomeContentBlock>
          <template #title>
            <h3 class="pb-3 mb-5 text-sm font-bold border-b">TRACKED JOBS</h3>
          </template>
          <template #content>
            <div
              class="flex items-center p-3 mb-5 border rounded-md"
              v-for="item in trackedArray"
              :key="item.title"
            >
              <img :src="item.img" :alt="item.title" />
              <div class="ml-5">
                <h3 class="text-sm font-bold">{{ item.title }}</h3>
                <p class="text-xs text-gray-300">
                  {{ item.company }}
                </p>
              </div>
            </div>
          </template>
        </HomeContentBlock>
        <HomeContentBlock>
          <template #title>
            <h3 class="pb-3 mb-5 text-sm font-bold border-b">
              ARTICLES FOR YOU
            </h3>
          </template>
          <template #content>
            <div
              class="flex mb-5"
              v-for="item in articlesArray"
              :key="item.title"
            >
              <img
                :src="item.img"
                :alt="item.title"
                class="object-contain h-16"
              />
              <div class="ml-5">
                <h3 class="mb-1 text-sm font-bold">
                  {{ item.title }}
                </h3>
                <p class="text-xs">{{ item.viewers }}</p>
              </div>
            </div>
          </template>
        </HomeContentBlock>
      </div>
    </div>
  </div>
</template>
<style>
</style>