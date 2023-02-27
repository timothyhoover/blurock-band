<script setup>
const props = defineProps(['images'])
</script>

<template lang="pug">
div(class='flex flex-col lg:flex-row justify-between items-center w-full p-10')
  div(class='flex flex-col w-full md:w-3/4 lg:w-1/2 order-2 lg:order-1')
    div(class='d-carousel w-full rounded-md border-8 border-br-tertiary')
      div(
        v-for='(image, index) in images'
        :key='index'
        :id='index'
        class='d-carousel-item w-full'
      )
        img(:src='image?.image' :alt='image?.alt' class='w-full')
    div(class='flex justify-center w-full py-2 gap-2')
      a(
        v-for='(image, index) in images'
        :key='index'
        :href='`#${index}`'
        class='d-btn d-btn-xs'
      ) {{ index + 1 }}
  div(class='flex flex-col items-center w-full lg:w-1/2 order-1 lg:order-2 mb-5 lg:mb-0')
    div
      h3(class='text-3xl font-medium') Gallery
      div(class='bg-br-success h-2 w-12 mb-4')
    p Scroll through to check out our live setup
</template>
