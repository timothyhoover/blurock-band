<script setup>
import { onClickOutside, set } from '@vueuse/core'

const route = useRoute()

const openNav = ref(false)
const navRef = ref(null)

watch(route, () => set(openNav, false))

onClickOutside(navRef, () => {
  set(openNav, !openNav)
})
</script>

<template lang="pug">
transition(
  enter-active-class='duration-150 ease-out'
  enter-from-class='transform opacity-0'
  enter-to-class='opacity-100'
  leave-active-class='duration-150 ease-in'
  leave-from-class='opacity-100'
  leave-to-class='transform opacity-0'
)
  div(
    v-if='openNav'
    class='lg:hidden absolute top-0 left-0 z-40 block w-screen h-screen transition-opacity bg-black bg-opacity-30'
  )
nav(class='bg-white relative z-50' ref='navRef')
  div(class='py-5 shadow-md')
    div(class='flex items-center justify-center')
      div(class='w-full flex items-center justify-between px-3 max-w-7xl')
        nuxt-link(class='flex items-center' to='/')
          img(class='lg:h-[100px] w-auto h-[75px]' src='@/assets/img/blurock-logo.png')
        div(class='hidden lg:block')
          div(class='ml-10 flex items-baseline xl:space-x-4')
            nuxt-link(
              class='flex flex-col items-center space-y-3 text-br-primary fill-br-primary hover:fill-br-tertiary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all ease-in-out duration-150'
              to='/'
            ) 
              icon-guitar(class='w-8')
              p Home
            nuxt-link(
              class='flex flex-col items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base transition-all ease-in-out duration-150'
              to='/about'
            ) 
              icon-book(class='w-7')
              p About the band
            nuxt-link(
              class='flex flex-col items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base transition-all ease-in-out duration-150'
              to='/bands-we-cover'
            ) 
              icon-music-note(class='w-7')
              p Bands we cover
            nuxt-link(
              class='flex flex-col items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base transition-all ease-in-out duration-150'
              to='https://www.facebook.com/pages/BluRock-Band/59610364387'
              target='_blank'
            ) 
              icon-facebook(class='w-7')
              p Our Facebook page
            nuxt-link(
              class='flex flex-col items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base transition-all ease-in-out duration-150'
              to='/'
            ) 
              icon-calendar(class='w-7')
              p Upcoming shows
            nuxt-link(
              class='flex flex-col items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base transition-all ease-in-out duration-150'
              to='/contact'
            ) 
              icon-mail(class='w-7')
              p Contact
        button(
          class='relative lg:hidden flex w-11 h-11 appearance-none'
          aria-label='Menu Toggle'
          @click='openNav = !openNav'
        )
          span(
            class='lg:hidden absolute w-6 h-[3px] transition-all ease-in-out origin-right rounded-full bg-br-primary right-2 top-3'
            :class='{ "scale-x-0 opacity-0": openNav }'
          )
          span(
            class='lg:hidden absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full bg-br-primary right-2 top-1/2'
            :class='{ "rotate-[135deg]": openNav }'
          )
          span(
            class='lg:hidden absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full bg-br-primary right-2 top-1/2'
            :class='openNav ? "rotate-[225deg]" : "opacity-0"'
          )
          span(
            class='lg:hidden absolute w-6 h-[3px] transition-all ease-in-out origin-left rounded-full bg-br-primary right-2 bottom-3'
            :class='{ "scale-x-0 opacity-0": openNav }'
          )
  div(
    class='absolute right-0 z-50 bg-white p-2 flex flex-col w-64 transition-transform duration-200 ease-in-out h-[calc(100vh-4rem)] lg:hidden'
    :class='openNav ? "translate-x-0" : "translate-x-[150%]"'
  )
    nuxt-link(
      class='flex space-x-3 items-center space-y-3 text-br-primary fill-br-primary hover:fill-br-tertiary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all ease-in-out duration-150'
      to='/#'
    ) 
      icon-guitar(class='w-8')
      p Home
    nuxt-link(
      class='flex space-x-3 items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all ease-in-out duration-150'
      to='/about'
    ) 
      icon-book(class='w-7')
      p About the band
    nuxt-link(
      class='flex space-x-3 items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all ease-in-out duration-150'
      to='/bands-we-cover'
    ) 
      icon-music-note(class='w-7')
      p Bands we cover
    nuxt-link(
      class='flex space-x-3 items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all ease-in-out duration-150'
      to='https://www.facebook.com/pages/BluRock-Band/59610364387'
      target='_blank'
    ) 
      icon-facebook(class='w-7')
      p Our Facebook page
    nuxt-link(
      class='flex space-x-3 items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all ease-in-out duration-150'
      to='/#'
    ) 
      icon-calendar(class='w-7')
      p Upcoming shows
    nuxt-link(
      class='flex space-x-3 items-center space-y-3 text-br-primary hover:text-br-tertiary px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all ease-in-out duration-150'
      to='/contact'
    ) 
      icon-mail(class='w-7')
      p Contact
</template>
