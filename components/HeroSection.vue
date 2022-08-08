<script setup>
const router = useRouter()
</script>

<template lang="pug">
section(
  class='flex flex-col justify-center lg:flex-row lg:justify-between w-full items-center lg:space-x-10 px-5 py-12'
)
  div(class='flex flex-col items-center space-y-3 mb-10 lg:mb-0 lg:items-start')
    h1(class='text-2xl lg:text-3xl font-semibold') Welcome to BluRock Band
    p(class='pb-5 text-center lg:text-left') Here you can find videos or our live performances, useful links and our up-to-date schedule.
    form-kit(
      type='button'
      @click='router.push({ path: "/contact" })'
      input-class='btn-secondary btn-md max-w-md'
      outer-class='w-full'
      wrapper-class='w-full flex justify-center lg:justify-start'
    )
      div(class='flex items-center space-x-2')
        p Book Us
        icon-calendar(class='w-5')
  div(class='shadow-md p-2 bg-br-tertiary rounded-md w-full max-w-2xl')
    iframe(
      class='w-full h-[500px]'
      src='https://www.youtube.com/embed/G3OmXFFdryA'
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    )
</template>
