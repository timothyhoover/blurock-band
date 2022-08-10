<script setup>
defineProps(['photos'])
</script>

<template lang="pug">
div(class='flex flex-col lg:flex-row justify-between items-center w-full p-10')
  div(class='flex flex-col w-full md:w-3/4 lg:w-1/2 order-2 lg:order-1')
    div(class='d-carousel w-full rounded-md border-8 border-br-tertiary')
      #item1(class='d-carousel-item w-full')
        img(:src='photo1' class='w-full')
      #item2(class='d-carousel-item w-full')
        img(:src='photo2' class='w-full')
      #item3(class='d-carousel-item w-full')
        img(:src='photo3' class='w-full')
      #item4(class='d-carousel-item w-full')
        img(:src='photo4' class='w-full')
      #item5(class='d-carousel-item w-full')
        img(:src='photo5' class='w-full')
      #item6(class='d-carousel-item w-full')
        img(:src='photo6' class='w-full')
      #item7(class='d-carousel-item w-full')
        img(:src='photo7' class='w-full')
      #item8(class='d-carousel-item w-full')
        img(:src='photo8' class='w-full')
      #item9(class='d-carousel-item w-full')
        img(:src='photo9' class='w-full')
    div(class='flex justify-center w-full py-2 gap-2')
      a(href='#item1' class='d-btn d-btn-xs') 1
      a(href='#item2' class='d-btn d-btn-xs') 2
      a(href='#item3' class='d-btn d-btn-xs') 3
      a(href='#item4' class='d-btn d-btn-xs') 4
      a(href='#item4' class='d-btn d-btn-xs') 5
      a(href='#item4' class='d-btn d-btn-xs') 6
      a(href='#item4' class='d-btn d-btn-xs') 7
      a(href='#item4' class='d-btn d-btn-xs') 8
      a(href='#item4' class='d-btn d-btn-xs') 9
  div(class='flex flex-col items-center w-full lg:w-1/2 order-1 lg:order-2 mb-5 lg:mb-0')
    div
      h3(class='text-3xl font-medium') Gallery
      div(class='bg-br-success h-2 w-12 mb-4')
    p Scroll through to check out our live setup
</template>
