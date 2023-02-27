<script setup>
const { data } = await useAsyncData('upcoming-shows', () => {
  return queryContent('/upcoming-shows').findOne()
})
console.log(data.value)
</script>

<template lang="pug">
h1 Upcoming shows
</template>
