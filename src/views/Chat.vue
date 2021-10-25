<script>
import MidlineTitle from '@/components/MidlineTitle.vue';

import { ref } from 'vue';

export default {
  components: {
    MidlineTitle,
  },
  setup(props) {
    const nowChat = ref('Kyle Fisher');
    const chatArray = ref([
      {
        img: '/src/assets/chat/chats5.png',
        name: 'Darlene Black',
        chat: 'Hey,how is your project?',
        isRead: true,
        state: 'online',
      },
      {
        img: '/src/assets/chat/chats1.png',
        name: 'Theresa Steward',
        chat: 'Hi, Dmitry! I have a work for you.',
        isRead: false,
        state: 'online',
      },
      {
        img: '/src/assets/chat/chats2.png',
        name: 'Brandon wilson',
        chat: 'I am Russian and I am learning English.',
        isRead: false,
        state: 'ldle',
      },
      {
        img: '/src/assets/chat/chats3.png',
        name: 'Kyle Fisher',
        chat: "So.It's up to you!",
        isRead: true,
        state: 'offline',
      },
      {
        img: '/src/assets/chat/chats4.png',
        name: 'Audrey Alexander',
        chat: 'When you got it?',
        isRead: true,
        state: 'online',
      },
      {
        img: '/src/assets/chat/chats6.png',
        name: 'Design Conference',
        chat: 'Can you guys help me with it?',
        isRead: true,
        state: 'offline',
      },
    ]);

    return {
      chatArray,
      nowChat,
    };
  },
};
</script>
<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-3">
        <div class="mb-5 bg-white">
          <h3 class="p-5 font-bold border-b">CHATS</h3>
          <div
            class="relative flex items-center p-5 bg-white border-b cursor-pointer  last:border-b-0"
            v-for="item in chatArray"
            :key="item.name"
            @click="nowChat = item.name"
          >
            <div
              class="absolute inset-0 z-10 w-full h-full border-l-8 border-blue-500  bg-white/50"
              v-if="nowChat === item.name"
            ></div>
            <div class="relative">
              <img :src="item.img" :alt="item.name" />

              <div
                class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full "
                v-if="item.state === 'online'"
              ></div>
              <div
                class="absolute bottom-0 right-0 w-3 h-3 bg-white border-2 border-green-500 rounded-full "
                v-else-if="item.state === 'ldle'"
              ></div>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-bold">{{ item.name }}</h3>
              <p class="text-xs" :class="[item.isRead && 'text-gray-400']">
                {{ item.chat }}
              </p>
            </div>
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
              START NEW CHAT
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-9">
        <div class="overflow-hidden bg-white rounded-md">
          <div class="flex justify-between p-5 border-b">
            <div class="flex text-sm font-bold">
              <p>CHAT WITH <span class="text-blue-500">KYLE FISHER</span></p>
              <p class="ml-3 text-gray-400">LAST ONLINE: 4 HOURS AGO</p>
            </div>
            <button type="button" class="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mr-2 text-blue-500"
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
              SHARED MEDUA(12)
            </button>
          </div>
          <div class="p-5 border-b">
            <MidlineTitle>
              <p class="flex-shrink-0 mx-5 text-sm font-bold text-gray-400">
                YESTERDAY, 29 AUG
              </p>
            </MidlineTitle>
            <div class="relative w-1/2 mb-3 ml-5">
              <div
                class="absolute bottom-0 left-0 -translate-x-1/2"
                style="
                  border-style: solid;
                  border-width: 0 20px 20px 20px;
                  border-color: transparent transparent #0275b1 transparent;
                "
              ></div>

              <p class="bg-[#0275B1] text-white p-5 rounded-md text-sm">
                Hi, Kyle. How are you doing? Did you get that job yesterday?
              </p>
            </div>
            <div class="flex mt-3 text-xs text-gray-300">
              <img src="@/assets/chat/Read.png" alt="read" class="mr-2" />
              <p>4:20 pm</p>
            </div>
            <div class="flex flex-row-reverse w-full mb-3">
              <img
                src="@/assets/chat/chatcontent.png"
                alt="chatContent"
                class="object-contain mb-8"
              />
              <div class="mr-3">
                <p class="p-3 text-sm bg-[#E8F0F8] rounded-md mb-2">
                  Nope, they kicked me out of the office!
                </p>
                <p class="text-xs text-right text-gray-300">4:29 PM</p>
              </div>
            </div>
            <div class="relative w-1/2 mb-3 ml-5">
              <div
                class="absolute bottom-0 left-0 -translate-x-1/2"
                style="
                  border-style: solid;
                  border-width: 0 20px 20px 20px;
                  border-color: transparent transparent #0275b1 transparent;
                "
              ></div>

              <p class="bg-[#0275B1] text-white p-5 rounded-md text-sm">
                Wow, I can invite you in my new project.We need a product
                designer right now!
              </p>
            </div>
            <div class="flex mt-3 text-xs text-gray-300">
              <img src="@/assets/chat/Read.png" alt="read" class="mr-2" />
              <p>4:30 pm</p>
            </div>
            <div class="flex flex-row-reverse w-full mb-3">
              <img
                src="@/assets/chat/chatcontent.png"
                alt="chatContent"
                class="object-contain mb-20"
              />
              <div class="mr-3">
                <p class="p-3 text-sm bg-[#E8F0F8] rounded-md mb-2">
                  It'll be grat! I need this job, but...
                </p>
                <p class="p-3 text-sm bg-[#E8F0F8] rounded-md mb-2">
                  So, it's up to you!
                </p>
                <p class="text-xs text-right text-gray-300">4:31 PM</p>
              </div>
            </div>
          </div>
          <div class="flex p-5">
            <input
              type="text"
              placeholder="Write your message"
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
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>