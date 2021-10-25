<script>
import HomeContentBlock from '@/components/home/HomeContentBlock.vue';
import { ref } from 'vue';

export default {
  components: {
    HomeContentBlock,
  },
  setup() {
    const projectsArray = ref([
      {
        img: '/src/assets/home/project1.png',
        title: 'Zara redesign concept',
        description: 'UX/UI design, 15.07.2019',
      },
      {
        img: '/src/assets/home/project2.png',
        title: ' SCTHONevent brand identity',
        description: 'Graohic design, 03.31.2019',
      },
      {
        img: '/src/assets/home/project3.png',
        title: ' Drozed. Brand identity. 2016',
        description: 'Graphic design, 03.04.2016',
      },
    ]);
    const skillsArray = ref([
      {
        img: '/src/assets/home/users1.png',
        title: 'User experience(UX)',
        num: 6,
      },
      {
        img: '/src/assets/home/users2.png',
        title: ' User interface(UI)',
        num: 7,
      },
      {
        img: '/src/assets/home/users3.png',
        title: 'Brand identity',
        num: 5,
      },
    ]);
    const dashboardArray = ref([
      {
        title: 'views today',
        num: 367,
      },
      {
        title: ' posts views',
        num: 15,
      },
      {
        title: 'search apperances',
        num: 9,
      },
    ]);
    const vistorsArray = ref([
      {
        img: '/src/assets/home/vistors1.png',
        title: 'HR-manager, 10 000 coonec...',
        name: 'Darlene Black',
      },
      {
        img: '/src/assets/home/vistors2.png',
        title: 'iOS developer',
        name: 'Theresa Steward',
      },
      {
        img: '/src/assets/home/vistors3.png',
        title: 'Senior UX designer',
        name: 'Brandon Willison',
      },
      {
        img: '/src/assets/home/vistors4.png',
        title: 'Product designer at Com...',
        name: 'Kyle Fisher',
      },
      {
        img: '/src/assets/home/vistors5.png',
        title: 'Team lead at Google',
        name: 'Audrey Alexander',
      },
    ]);
    const coursesArray = ref([
      {
        img: '/src/assets/home/course1.png',
        title: 'UX Foundations: Prototyping',
        num: '27,959',
      },
      {
        img: '/src/assets/home/course2.png',
        title: ' Design with Adobe XD and pro',
        num: '9,122',
      },
      {
        img: '/src/assets/home/course3.png',
        title: 'UX Foundations: Styles and GUIs',
        num: '13,858',
      },
    ]);

    return {
      projectsArray,
      skillsArray,
      dashboardArray,
      vistorsArray,
      coursesArray,
    };
  },
};
</script>

<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-9">
        <div>
          <div
            class="h-48 bg-cover"
            style="background-image: url('/src/assets/home/homeHeader.png')"
          >
            <div class="flex p-8">
              <button
                type="button"
                class="flex items-center justify-center w-10 h-10 mr-auto text-gray-400 bg-white rounded-md  hover:text-gray-500"
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="flex items-center justify-center h-10 px-2 mr-3 text-gray-400 bg-white rounded-md  hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                EDIT PROFILE
              </button>
              <button
                type="button"
                class="flex items-center justify-center w-10 h-10 text-gray-400 bg-white rounded-md  hover:text-gray-500"
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex p-8 bg-white">
            <div class="-translate-y-20 rounded-full w-30 h-30">
              <img
                src="@/assets/home/homePhoto.png"
                alt=""
                class="rounded-full"
              />
            </div>
            <div class="w-full ml-5">
              <div class="flex justify-between mb-3">
                <h3 class="text-xl font-black">
                  Dmitry Kargaev
                  <span class="ml-2">
                    <img
                      src="@/assets/home/inLogo.png"
                      alt=""
                      class="inline-block align-baseline"
                    />
                  </span>
                </h3>
                <p class="text-sm">
                  <span class="mr-3">
                    <img
                      src="@/assets/home/navigationLogo.png"
                      alt=""
                      class="inline-block align-center"
                    />
                  </span>
                  Saint PetersBurg, Russian Federation
                </p>
              </div>
              <p class="mb-3">
                Freelance UX/UI designer,80+ projects in web design,mobile apps
                (iOS & android) <br />
                and creative projects. Open to offers.
              </p>
              <div class="flex">
                <button
                  type="button"
                  class="
                    bg-[#096DA1]
                    text-white
                    px-4
                    py-2
                    mr-3
                    rounded-md
                    border border-[#096DA1]
                    hover:bg-blue-400
                    text-xs
                  "
                >
                  CONTACT INFO
                </button>
                <button
                  type="button"
                  class="
                    bg-white
                    text-[#096DA1]
                    px-4
                    py-2
                    rounded-md
                    text-xs
                    border border-[#096DA1]
                    hover:bg-[#096DA1] hover:text-white
                  "
                >
                  1,043 CONNECTIONS
                </button>
              </div>
            </div>
          </div>
          <div class="my-5">
            <div class="grid grid-cols-3 border rounded-tl-sm rounded-tr-sm">
              <button
                type="button"
                class="
                  px-4
                  py-4
                  text-xs
                  font-bold
                  bg-white
                  border-r
                  hover:bg-[#086EA4]
                  hover:text-white
                  hover:scale-110
                  hover:rounded-tl-sm
                  hover:
                  rounded-tr-sm
                "
              >
                PROFILE
              </button>
              <button
                type="button"
                class="
                  px-4
                  py-4
                  text-xs
                  font-bold
                  bg-white
                  border-r
                  hover:bg-[#086EA4]
                  hover:text-white
                  hover:scale-110
                  hover:rounded-tl-sm
                  hover:
                  rounded-tr-sm
                "
              >
                ACTIVITY & INTERSTS
              </button>
              <button
                type="button"
                class="
                  px-4
                  py-4
                  text-xs
                  font-bold
                  bg-white
                  hover:bg-[#086EA4]
                  hover:text-white
                  hover:scale-110
                  hover:rounded-tl-sm
                  hover:
                  rounded-tr-sm
                "
              >
                ARTICLES(3)
              </button>
            </div>
          </div>
          <HomeContentBlock>
            <template #title>
              <h3 class="text-xl font-black">About</h3>
            </template>
            <template #content>
              <p class="my-5 text-sm">
                I'm more experienced in eCommerce web projects and mobile
                banking apps, but also like to work with creative <br />
                projects, such as landing pages or unusual corporate websites.
              </p>
              <button
                type="button"
                class="text-sm font-bold text-blue-600 hover:text-blue-400"
              >
                SEE MORE
              </button>
            </template>
          </HomeContentBlock>
          <HomeContentBlock>
            <template #title>
              <h3 class="text-xl font-black">
                Projects <span class="text-gray-500">3 of 12</span>
              </h3>
            </template>
            <template #content>
              <div class="grid grid-cols-3 gap-8 my-5">
                <div v-for="item in projectsArray" :key="item.title">
                  <img
                    :src="item.img"
                    :alt="item.title"
                    class="object-contain w-full"
                  />
                  <h3 class="my-3 text-sm font-bold">{{ item.title }}</h3>
                  <p class="text-xs text-gray-300">{{ item.description }}</p>
                </div>
              </div>
              <button
                type="button"
                class="text-sm font-bold text-blue-600 hover:text-blue-400"
              >
                SHOW ALL(12)
              </button>
            </template>
          </HomeContentBlock>
          <HomeContentBlock>
            <template #title>
              <h3 class="text-xl font-black">Skills & Endoresments</h3>
            </template>
            <template #content>
              <div class="grid grid-cols-3 gap-3 my-5">
                <div
                  class="p-5 border rounded-md"
                  v-for="item in skillsArray"
                  :key="item.title"
                >
                  <div class="flex justify-between mb-3">
                    <h3 class="text-sm font-bold">{{ item.title }}</h3>
                    <span class="text-sm font-black text-blue-500">{{
                      item.num
                    }}</span>
                  </div>
                  <img :src="item.img" :alt="item.title" />
                </div>
              </div>
              <button
                type="button"
                class="text-sm font-bold text-blue-600 hover:text-blue-400"
              >
                SHOW ALL(17)
              </button>
            </template>
          </HomeContentBlock>
          <HomeContentBlock>
            <template #title>
              <h3 class="text-xl font-black">Experience</h3>
            </template>
            <template #content>
              <div class="border-b">
                <div class="flex">
                  <img
                    src="@/assets/home/experience1.png"
                    alt=""
                    class="object-contain"
                  />
                  <div class="py-5 ml-5 space-y-2 text-sm">
                    <h3 class="font-bold">Freelance UX/UI designer</h3>
                    <p class="text-sm">
                      Self Employed
                      <span class="ml-3 text-sm text-gray-300"
                        >Around the world</span
                      >
                    </p>
                    <p class="text-sm text-gray-300">
                      June 2016 - Present
                      <span class="ml-3 text-sm font-bold text-blue-600"
                        >3 yrs 3 mos</span
                      >
                    </p>
                    <p>
                      Work with clients and web studioes as freelancer.Work in
                      next areas.eCommerce web projects;creative landing
                      pages;iOs and Android apps;corporate web sites and
                      corporate identity sometimes.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex">
                  <img
                    src="@/assets/home/experience2.png"
                    alt=""
                    class="object-contain"
                  />
                  <div class="py-5 ml-5 space-y-2">
                    <h3 class="font-bold">UX/UI designer</h3>
                    <p class="text-sm">
                      Upwork
                      <span class="ml-3 text-gray-300">International</span>
                    </p>
                    <p class="text-sm text-gray-300">
                      June 2019 - Present
                      <span class="ml-3 font-bold text-blue-600"> 3 mos</span>
                    </p>
                    <p class="text-sm">
                      New experience with Upwork system. Work in next
                      areas:UX/UI design,graphic,design,UX research.
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </HomeContentBlock>
          <HomeContentBlock>
            <template #title>
              <h3 class="text-xl font-black">Education</h3>
            </template>
            <template #content>
              <div>
                <div class="flex">
                  <img
                    src="@/assets/home/edutication.png"
                    alt=""
                    class="object-contain"
                  />
                  <div class="py-5 ml-5 space-y-2">
                    <h3 class="font-bold">Moscow State Linguistic Unversity</h3>
                    <p class="text-sm">
                      Bachelor's degree Field Of StudyComputer and information
                      Systems Security/Information Assurance
                    </p>
                    <p class="text-sm text-gray-300">2013 - 2017</p>
                    <p class="text-sm">
                      Additional English classes and UX profile courses.
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </HomeContentBlock>
        </div>
      </div>
      <div class="col-span-3">
        <HomeContentBlock>
          <template #title>
            <div class="flex justify-between pb-3 mb-3 border-b">
              <h3 class="text-sm font-bold">YOUR DASHBOARD</h3>
              <button
                type="button"
                class="text-sm font-bold text-blue-400 underline  hover:text-blue-300"
              >
                GO TO STARTS
              </button>
            </div>
          </template>
          <template #content>
            <div class="mb-5" v-for="item in dashboardArray" :key="item.title">
              <h4 class="text-5xl font-black text-[#086DA1]">{{ item.num }}</h4>
              <p>{{ item.title }}</p>
            </div>
          </template>
        </HomeContentBlock>
        <HomeContentBlock>
          <template #title>
            <div class="flex justify-between pb-3 mb-5 border-b">
              <h3 class="text-sm font-bold">VISTORS</h3>
              <button
                type="button"
                class="text-sm font-bold text-blue-400 hover:text-blue-300"
              >
                VIEW ALL
              </button>
            </div>
          </template>
          <template #content>
            <div
              class="flex items-center mb-5"
              v-for="item in vistorsArray"
              :key="item.title"
            >
              <img :src="item.img" :alt="item.title" />
              <div class="ml-5">
                <h3 class="text-sm font-bold">{{ item.name }}</h3>
                <p class="text-xs text-gray-300">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </template>
        </HomeContentBlock>
        <HomeContentBlock>
          <template #title>
            <h3 class="pb-3 mb-5 text-sm font-bold border-b">
              YOU MAY LIKE THESE COURSES
            </h3>
          </template>
          <template #content>
            <div
              class="flex mb-5"
              v-for="item in coursesArray"
              :key="item.title"
            >
              <img
                :src="item.img"
                :alt="item.title"
                class="object-contain w-1/3"
              />
              <div class="ml-5">
                <h3 class="mb-1 text-sm font-bold">
                  {{ item.title }}
                </h3>
                <p class="text-xs">{{ item.num }} viewers</p>
              </div>
            </div>
            <button
              type="button"
              class="text-sm font-bold text-blue-400 hover:text-blue-300"
            >
              SEE ALL RECOMENDATIONS
            </button>
          </template>
        </HomeContentBlock>
      </div>
    </div>
  </div>
</template>

<style>
</style>