<script setup></script>

<template lang="pug">
div(class='flex flex-col h-screen overflow-x-hidden')
  br-header
  div(class='mx-auto flex-1 w-full max-w-screen-xl')
    slot
  br-footer
</template>
