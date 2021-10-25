<script>
import HomeContentBlock from '@/components/home/HomeContentBlock.vue';
import FeedContentBlock from '@/components/feed/FeedContentBlock.vue';

import { ref } from 'vue';

export default {
  components: {
    HomeContentBlock,
    FeedContentBlock,
  },
  setup(props) {
    const groupsArray = ref([
      {
        img: '/src/assets/feed/group1.png',
        title: 'Moscow State Linguistical University',
      },
      {
        img: '/src/assets/feed/group2.png',
        title: 'Digital freelancers group',
      },
      {
        img: '/src/assets/feed/group3.png',
        title: 'Interaction design association',
      },
    ]);
    const hashtagsArray = ref([
      '#work',
      '#business',
      '#hr',
      '#userinterface',
      '#digital',
      '#userexperience',
      '#ux',
      '#ui',
      'freelance',
    ]);
    const articlesArray = ref([
      {
        img: '/src/assets/feed/article1.png',
        title: 'How I make cool designs?',
        viewers: '6,340 viewers',
      },
      {
        img: '/src/assets/feed/article2.png',
        title: 'Advices for young HR-manager',
        viewers: '8,123 viewers',
      },
      {
        img: '/src/assets/feed/article3.png',
        title: 'A little about usability testing',
        viewers: '3,912 viewers',
      },
    ]);

    return {
      groupsArray,
      hashtagsArray,
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
            <h3 class="pb-3 mb-5 text-sm font-bold border-b">NEW POST</h3>
          </template>
          <template #content>
            <div class="flex">
              <input
                type="text"
                placeholder="What's on your mind?"
                class="w-full mr-auto border-0 outline-none"
              />
              <div class="flex ml-2">
                <button
                  type="button"
                  class="text-gray-300 p-2 hover:bg-[#0770A6] hover:text-white"
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
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="text-gray-300 p-2 hover:bg-[#0770A6] hover:text-white"
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="text-gray-300 p-2 hover:bg-[#0770A6] hover:text-white"
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
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="text-gray-300 p-2 hover:bg-[#0770A6] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 rotate-45 translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </HomeContentBlock>
        <div class="flex items-center mb-5 text-sm">
          <div class="w-full bg-gray-200 h-[2px]"></div>
          <p class="flex items-center flex-shrink-0 mx-5 font-bold">
            SORT BY :
            <span class="text-[#0275B0] ml-1">
              TRENDING
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
          <div class="w-full h-[2px] bg-gray-200"></div>
        </div>
        <FeedContentBlock
          img="/src/assets/feed/feedHead1.png"
          name="Theresa Steward"
          job="iOS developer"
          :thumbs="42"
          :messages="9"
        >
          <template #title>
            <h3 class="text-xs text-blue-300">
              Ted Bell,Annette <span class="text-gray-800">and</span> Cody
              Hawkins <span class="text-gray-800">liked this</span>
            </h3>
          </template>
          <template #content>
            <p class="mb-3 text-sm">
              What did the Dursleys care if Harry lost his place on the House
              Quidditch team because he hadn't practiced all summer? What was it
              to the Dursleys if Harry went back to school without any of his
              homework done?The Dursleys were what wizards called Muggles(not a
              drop of magical blood in their veins).
            </p>
            <button
              type="button"
              class="font-bold text-[#076FA5] hover:text-blue-600 text-sm"
            >
              READ MORE
            </button>
          </template>
        </FeedContentBlock>
        <FeedContentBlock
          img="/src/assets/feed/feedHead2.png"
          name="Kyle Fisher"
          job="Product designer at Commandor Corp."
          :thumbs="12"
          :messages="3"
        >
          <template #title>
            <h3 class="text-xs text-blue-300">
              Audrey Alexander <span class="text-gray-800">comment this</span>
            </h3>
          </template>
          <template #content>
            <p class="mb-3 text-sm">How's your day going guys?</p>
            <img
              src="@/assets/feed/contentBackgound.png"
              alt="watch"
              class="object-contain w-full"
            />
          </template>
        </FeedContentBlock>
        <FeedContentBlock
          img="/src/assets/feed/feedHead3.png"
          name="Brandon Wilson"
          job="Senior UX designer"
          :thumbs="89"
          :messages="7"
        >
          <template #title>
            <h3 class="text-xs text-gray-400">
              High rated post from your feed
            </h3>
          </template>
          <template #content>
            <p class="mb-3 text-sm">There is some new guidelines for iOS</p>
            <div class="flex p-5 bg-[#E8F0F8] items-center rounded-md mb-3">
              <img src="@/assets/feed/download.png" alt="download" />
              <div class="ml-3">
                <h3 class="mb-2 text-sm font-bold">
                  iOS 11 guidenlines for UX/UI designers
                </h3>
                <p class="text-xs text-gray-500">PDF files, 324 kb</p>
              </div>
              <button
                type="button"
                class="ml-auto text-blue-500 hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </button>
            </div>
            <div class="flex p-5 bg-[#E8F0F8] items-center rounded-md">
              <img src="@/assets/feed/download.png" alt="download" />
              <div class="ml-3">
                <h3 class="mb-2 text-sm font-bold">
                  iOS 11 guidenlines for developers
                </h3>
                <p class="text-xs text-gray-500">PDF files, 245 kb</p>
              </div>
              <button
                type="button"
                class="ml-auto text-blue-500 hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </button>
            </div>
          </template>
        </FeedContentBlock>
        <FeedContentBlock
          img="/src/assets/feed/feedHead4.png"
          name="Audrey Alexander"
          job="Team lead at Google"
          :thumbs="10"
          :messages="0"
        >
          <template #title>
            <h3 class="text-xs text-gray-400">
              First post from
              <span class="text-blue-300">Audrey Alexander</span>
            </h3>
          </template>
          <template #content>
            <p class="mb-3 text-sm">
              The bun along the road and meets a wolf. Little bun,little bun, I
              want to eat you! says the wolf. I ran away from Grandfather, I ran
              away from Grandmother, I ran away from the hare. And I can run
              away from you, grey wolf says the bun and runs away.
            </p>
          </template>
        </FeedContentBlock>
      </div>
      <div class="col-span-3">
        <div class="mb-5 bg-white rounded-md">
          <div
            class="h-40 bg-top bg-cover"
            style="background-image: url('/src/assets/home/homeHeader.png')"
          ></div>
          <div class="flex flex-col items-center justify-center p-5">
            <div class="w-32 h-32 -mb-20 -translate-y-20">
              <img
                src="/src/assets/home/homephoto.png"
                alt=""
                class="object-contain"
              />
            </div>
            <h3 class="mb-3 font-black">
              Dmitry Kargaev
              <span
                ><img
                  src="/src/assets/home/inLogo.png"
                  alt=""
                  class="inline-block align-baseline"
              /></span>
            </h3>
            <p class="text-xs text-center">
              Freelance UX/UI designer, 80+ projects in web design,mobile
              apps(iOS & android) and creative projects. Open to offers.
            </p>
          </div>
        </div>
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
              WRITE NEW ARTICLE
            </button>
          </div>
        </div>
        <HomeContentBlock>
          <template #title>
            <div class="flex justify-between pb-3 mb-5 border-b">
              <h3 class="text-sm font-bold">MY GROUPS</h3>
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
              class="flex items-center p-3 mb-3 border rounded-md"
              v-for="item in groupsArray"
              :key="item.title"
            >
              <img :src="item.img" :alt="item.title" />
              <h3 class="ml-3 font-bold">{{ item.title }}</h3>
            </div>
            <button
              type="button"
              class="text-sm font-bold text-blue-400 hover:text-blue-300"
            >
              SHOW ALL (8)
            </button>
          </template>
        </HomeContentBlock>
        <HomeContentBlock>
          <template #title>
            <h3 class="pb-3 mb-5 text-sm font-bold border-b">
              FOLLOWED HASHTAGS
            </h3>
          </template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <button
                type="button"
                class="
                  px-3
                  py-2
                  text-sm
                  rounded-md
                  bg-[#E8F0F8]
                  hover:bg-gray-400
                "
                v-for="item in hashtagsArray"
                :key="item"
              >
                {{ item }}
              </button>
            </div>
          </template>
        </HomeContentBlock>
        <HomeContentBlock>
          <template #title>
            <h3 class="pb-3 mb-5 text-sm font-bold border-b">
              TRENDING ARTICLES
            </h3>
          </template>
          <template #content>
            <div
              class="flex items-center mb-5"
              v-for="item in articlesArray"
              :key="item.title"
            >
              <img
                :src="item.img"
                :alt="item.title"
                class="object-contain w-1/3"
              />
              <div class="ml-3">
                <h3 class="mb-1 text-sm font-black">
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