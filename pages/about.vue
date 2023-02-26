<script setup>
const { data } = await useAsyncData('about', () => {
  return queryContent('/').findOne()
})
watchEffect(() => {
  console.log(data)
})
</script>

<template lang="pug">
section(class='py-10 px-5')
  div(class='border-2 border-br-tertiary p-5 rounded-md shadow-md')
    h1(class='text-3xl font-semibold mb-3') Experienced Band with hundreds of gigs
    p The number one comment is about their diverse range of music. One club owner said, “I’ve been in the business a long time and can usually tell what a band’s next song will be, but with you guys, you never know.” From dance to just listening, the band has the music to satisfy. They are an experienced band with 100’s of performances and years of experience in all types of venues. Quality equipment and great sound are very important to the band. They enjoy playing Classic Vinyl, Blues, Rock, Country and Gospel. They play gigs of all types including clubs, civic functions, weddings, private and holiday parties. They also play smaller venue and acoustic gigs.
  h2(class='text-xl font-medium mt-10 mb-2') Members
  div(class='space-y-2')
    p John Hoover – Lead Vocals and Rhythm guitar
    p Amy Hoover – Bass Guitar and Vocals
    p Daniel Cagle – Lead Guitar, Keyboard and Vocals
    p Richey Bennett – Drums
</template>
