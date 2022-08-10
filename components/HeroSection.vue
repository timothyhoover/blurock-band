<script setup>
const router = useRouter()

const { data } = await useAsyncData('home', () => {
  return queryContent('/').findOne()
})
</script>

<template lang="pug">
section(
  class='flex flex-col justify-center lg:flex-row lg:justify-between w-full items-center lg:space-x-10 px-5 py-12'
)
  div(
    class='flex flex-col items-center space-y-3 w-full md:w-3/4 lg:w-1/2 mb-10 lg:mb-0 lg:items-start'
  )
    div(class='flex flex-col')
      h1(class='text-2xl lg:text-3xl font-semibold text-white') {{ data?.title }}
      div(class='self-end bg-br-tertiary h-2 w-3/5')
    p(class='pb-5 text-center lg:text-left text-white') {{ data?.description }}
    form-kit(
      type='button'
      @click='router.push({ path: "/contact" })'
      input-class='btn-secondary btn-md max-w-md border-white bg-transparent text-white hover:bg-white hover:bg-opacity-10'
      outer-class='w-full'
      wrapper-class='w-full flex justify-center lg:justify-start'
    )
      div(class='flex items-center space-x-2')
        p {{ data?.button }}
        icon-calendar(class='w-5')
  div(class='shadow-md p-2 bg-br-tertiary rounded-md w-full md:w-3/4 lg:w-1/2 max-w-2xl')
    iframe(
      class='w-full h-[500px]'
      :src='data?.video'
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    )
</template>
