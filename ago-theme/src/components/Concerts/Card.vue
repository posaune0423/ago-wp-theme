<template>
  <v-card class="mx-auto" width="344" :to="'/concerts/' + concert.id" hover>
    <v-img :src="concert.featured_image.src"></v-img>
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
