<script setup lang="ts">
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <div class="grid grid-cols-12 gap-8 mt-6">
    <div
      v-for="demoPath in theme.projectDemoFolders"
      :key="demoPath"
      class="flex flex-col col-span-12 overflow-hidden text-black bg-gray-100 rounded dark:bg-black dark:text-white md:col-span-6 dark:bg-opacity-10"
    >
      <div class="p-8 text-lg font-medium capitalize">
        {{ demoPath.split('-').join(' ') }}
      </div>
      <div
        class="flex border-t border-gray-300 justify-evenly dark:border-gray-700"
      >
        <a
          :href="`${demoPath}/`"
          class="flex-1 p-4 text-center !text-black border-r dark:border-gray-700 border-gray-300 dark:!text-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5 hover:text-black dark:hover:text-white"
        >
          Demo
        </a>
        <a
          target="_blank"
          :href="`https://github.com/learnvueco/tutorial-code/blob/main/tutorials/${demoPath}`"
          class="flex-1 p-4 text-center !text-black dark:!text-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5 hover:text-black dark:hover:text-white"
        >
          Repo
        </a>
      </div>
    </div>
  </div>
</template>
