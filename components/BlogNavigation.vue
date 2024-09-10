<template>
  <div class="lg:col-span-3 order-first lg:order-last">
    <nav
      class="sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]"
    >
      <div
        class="py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3"
      >
        <button
          class="flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group"
          tabindex="-1"
        >
          <span class="font-semibold text-sm/6 truncate">Table of Contents</span
          ><span
            class="iconify i-heroicons:chevron-down-20-solid lg:!hidden w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"
            aria-hidden="true"
            style=""
          ></span>
        </button>
        <ul class="space-y-1 hidden lg:block">
          <li class="space-y-1 hidden lg:block">
            <a
              href="#the-evolution-of-cryptocurrencies"
              class="block text-sm/6 truncate text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >The Evolution of Cryptocurrencies</a
            >
          </li>
          <li class="space-y-1 hidden lg:block">
            <a
              href="#opportunities-in-cryptocurrencies"
              class="block text-sm/6 truncate text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >📈 Opportunities in Cryptocurrencies</a
            >
          </li>
          <li class="space-y-1 hidden lg:block">
            <a
              href="#challenges-and-risks"
              class="block text-sm/6 truncate text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >📉 Challenges and Risks</a
            >
          </li>
          <li class="space-y-1 hidden lg:block">
            <a
              href="#here-are-the-most-well-known-cryptocurrencies"
              class="block text-sm/6 truncate text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >Here are the most well-known cryptocurrencies</a
            >
          </li>
          <li class="space-y-1 hidden lg:block">
            <a
              href="#conclusion"
              class="block text-sm/6 truncate text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >Conclusion</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
