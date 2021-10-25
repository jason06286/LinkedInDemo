<script>
export default {};
</script>

<template>
  <footer class="bg-[#F5F8FB] py-10 font-Roboto text-xs border-t">
    <div class="grid grid-cols-12 overflow-hidden">
      <div class="col-start-2">
        <img src="@/assets/logo.png" class="w-12 h-12 mb-3" alt="" />
        <p class="text-base font-bold">
          Linked<span class="text-blue-400">In</span>
        </p>
      </div>
      <div class="col-span-4">
        <h3 class="mb-5 text-sm font-bold">Navigation</h3>
        <div class="flex space-x-10">
          <ul class="space-y-3 list-none">
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >About</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Carrers</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Advertising</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Small Business</a
              >
            </li>
          </ul>
          <ul class="space-y-3 list-none">
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Talent Solutions</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Marketing Solutions</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Sales Solutions</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Safety Center</a
              >
            </li>
          </ul>
          <ul class="space-y-3 list-none">
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Community Guidelines</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Privacy & Terms</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="text-gray-800 no-underline hover:underline"
                >Mobile App</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-2">
        <h3 class="mb-5 text-sm font-bold">Fast access</h3>
        <button
          type="button"
          class="
            w-[170px]
            px-3
            py-1
            text-white
            bg-[#0275B1]
            flex
            justify-between
            items-center
            duration-200
            hover:bg-blue-800
            rounded-md
            border border-[#0275B1]
            mb-3
            font-semibold
          "
        >
          <span class="uppercase">questions?</span>
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
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          type="button"
          class="
            w-[170px]
            px-3
            py-1
            text-[#0275B1]
            border border-[#0275B1]
            flex
            justify-between
            items-center
            duration-200
            hover:bg-[#0275B1] hover:text-white
            rounded-md
            font-semibold
          "
        >
          <span class="uppercase">settings</span>
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <div class="col-span-2">
        <h3 class="mb-5 text-sm font-bold">Language</h3>
        <select class="w-full py-1 text-xs font-bold rounded-sm form-select">
          <option value="ENGLISH" class="py-2">ENGLISH</option>
          <option value="JAPANESE" class="py-2">JAPANESE</option>
          <option value="FRANCE" class="py-2">FRANCE</option>
          <option value="CHINESE" class="py-2">CHINESE</option>
        </select>
      </div>
    </div>
  </footer>
</template>

<style>
</style>