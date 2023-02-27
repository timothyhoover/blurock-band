<script setup>
const { data } = await useAsyncData('about', () => {
  return queryContent('/about').findOne()
})
</script>

<template lang="pug">
section(class='py-10 px-5')
  div(class='border-2 border-br-tertiary p-5 rounded-md shadow-md')
    h1(class='text-3xl font-semibold mb-3') {{ data?.title }}
    p {{ data?.description }}
  h2(class='text-xl font-medium mt-10 mb-2') Members
  div(class='space-y-2')
    template(v-for='(member, index) of data.members' :key='index')
      p {{ member?.name }} – {{ member?.role }}
</template>
