<script setup>
const { data } = await useAsyncData('upcoming-shows', () => {
  return queryContent('/upcoming-shows').findOne()
})
</script>

<template lang="pug">
h1 {{ data?.title }}
p {{ data?.description }}
div(v-for='show in data?.shows' :key='show?.date' class='font-medium')
  p {{ show?.venue }}
  p {{ show?.description }}
  p {{ show?.date }}
  p {{ show?.address?.address_line_1 }}
  p {{ show?.address?.address_line_2 }}
  p {{ show?.address?.city }}
  p {{ show?.address?.state }}
  p {{ show?.address?.zip }}
</template>
