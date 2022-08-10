<script setup>
defineProps(['photos'])
</script>

<template lang="pug">
div(class='flex flex-col lg:flex-row justify-between items-center w-full p-10')
  div(
    v-for='photo in photos'
    :key='photos'
    class='flex flex-col w-full md:w-3/4 lg:w-1/2 order-2 lg:order-1'
  )
    div(class='d-carousel w-full rounded-md border-8 border-br-tertiary')
      #item1(class='d-carousel-item w-full')
        img(:src='photo' class='w-full')
      #item2(class='d-carousel-item w-full')
        img(:src='photo' class='w-full')
      #item3(class='d-carousel-item w-full')
        img(:src='photo' class='w-full')
      #item4(class='d-carousel-item w-full')
        img(:src='photo' class='w-full')
    div(class='flex justify-center w-full py-2 gap-2')
      a(href='#item1' class='d-btn d-btn-xs') 1
      a(href='#item2' class='d-btn d-btn-xs') 2
      a(href='#item3' class='d-btn d-btn-xs') 3
      a(href='#item4' class='d-btn d-btn-xs') 4
  div(class='flex flex-col items-center w-full lg:w-1/2 order-1 lg:order-2 mb-5 lg:mb-0')
    div
      h3(class='text-3xl font-medium') Gallery
      div(class='bg-br-success h-2 w-12 mb-4')
    p Scroll through to check out our live setup
</template>
