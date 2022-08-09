<script setup>
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const modules = [EffectCoverflow, Pagination, Navigation]

defineProps(['photos'])
</script>

<template lang="pug">
div(
  v-if='photos?.length'
  class='flex flex-col lg:flex-row justify-center items-center w-full p-10'
)
  div(class='flex flex-col')
    h3(class='text-3xl font-medium') Gallery
    div(class='bg-br-success h-2 w-16')
  swiper(
    :effect='"coverflow"'
    :pagination='{ clickable: true }'
    :grabCursor='true'
    :slidesPerView='"auto"'
    navigation
    :coverflowEffect='{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }'
    :modules='modules'
    class='mySwiper'
  )
    swiper-slide(v-for='photo in photos' :key='photo')
      img(:src='photo')
</template>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

img {
  width: auto;
}
.swiper-slide {
  border: 8px solid #000;
  background-position: center;
  background-size: cover;
  width: 300px;
}

.swiper-button-next {
  color: black;
}
.swiper-button-prev {
  color: black;
}
</style>
