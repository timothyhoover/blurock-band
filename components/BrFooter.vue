<script setup></script>

<template lang="pug">
footer(
  class='flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-200 p-5 mt-auto'
)
  p(
    class='text-gray-500 text-sm order-2 md:order-1 font-medium md:self-end self-center mt-10 md:mt-0'
  ) © 2022 BluRock Band
  div(class='order-1 md:order-2')
    h3(class='font-bold mb-2') Useful Links
    div(class='grid grid-cols-2 gap-2')
      nuxt-link(
        to='https://youtu.be/G3OmXFFdryA'
        target='_blank'
        class='hover:underline cursor-pointer text-br-tertiary'
      ) All My Loving
      nuxt-link(
        to='https://m.youtube.com/channel/UC12yz-QznrmMEO9nGhk960g'
        target='_blank'
        class='hover:underline cursor-pointer text-br-tertiary'
      ) BluRock Demo
      nuxt-link(
        to='https://www.facebook.com/pages/BluRock-Band/59610364387'
        target='_blank'
        class='hover:underline cursor-pointer text-br-tertiary'
      ) Facebook Page
      nuxt-link(
        to='https://youtu.be/dnNVL0QKcsw'
        target='_blank'
        class='hover:underline cursor-pointer text-br-tertiary'
      ) Denison Fall Fest
      nuxt-link(
        to='https://youtu.be/O4eicZCdnQk'
        target='_blank'
        class='hover:underline cursor-pointer text-br-tertiary'
      ) Kansas City
      nuxt-link(
        to='https://youtu.be/JBm0iayxkyE'
        target='_blank'
        class='hover:underline cursor-pointer text-br-tertiary'
      ) Never Been to Spain
</template>
