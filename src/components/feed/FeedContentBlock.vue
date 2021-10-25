<script>
export default {
  props: {
    img: {
      type: String,
      default: '/src/assets/feed/feedHead1.png',
    },
    name: {
      type: String,
      default: 'Theresa Steward',
    },
    job: {
      type: String,
      default: 'iOs developer',
    },
    thumbs: {
      type: Number,
      default: 42,
    },
    messages: {
      type: Number,
      default: 9,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
<template>
  <div class="mb-5 overflow-hidden bg-white rounded-md">
    <div class="flex items-center justify-between p-5 border-b">
      <slot name="title"></slot>

      <button type="button" class="hover:text-gray-300">
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
      </button>
    </div>
    <div class="p-5">
      <div class="flex">
        <img :src="props.img" :alt="props.name" />
        <div class="ml-3">
          <h3 class="font-bold">{{ props.name }}</h3>
          <p class="text-xs">{{ props.job }}</p>
        </div>
      </div>
      <div class="my-3">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="flex border-t">
      <button
        type="button"
        class="px-5 py-3 font-bold border-r hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block w-6 h-6 mr-1 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        {{ props.thumbs }}
      </button>
      <button
        type="button"
        class="px-5 py-3 font-bold border-r hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block w-6 h-6 mr-1 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        {{ props.messages }}
      </button>
      <button
        type="button"
        class="px-5 py-3 ml-auto font-bold border-l hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block w-6 h-6 mr-1 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        SHARE
      </button>
    </div>
  </div>
</template>
<style>
</style>