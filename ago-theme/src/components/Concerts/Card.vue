<template>
  <v-card class="mx-auto" width="344" :to="'/concerts/' + concert.id" hover>
    <v-img
      :lazy-src="concert.featured_image.src"
      :src="concert.featured_image.src"
      alt="演奏会画像"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  name: 'ConcertCard',
  props: ['concert'],
  data: () => ({
    show: false
  })
};
</script>

<style lang="scss" scoped></style>
