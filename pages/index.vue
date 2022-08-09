<script setup>
definePageMeta({
  layout: false
})

const { data } = await useAsyncData('home', () => {
  return queryContent('/').findOne()
})

if (process.client) {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }
}
</script>

<template lang="pug">
nuxt-layout(name='full-width')
  div(class='flex flex-col items-center w-full justify-center')
    div(class='bg-br-primary w-full flex justify-center border-b-8 border-br-tertiary')
      hero-section(class='max-w-screen-xl')
    band-photos(class='max-w-screen-xl' :photos='data?.photos')
</template>
