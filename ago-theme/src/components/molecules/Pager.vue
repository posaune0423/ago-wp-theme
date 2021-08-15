<template>
  <div class="text-center mt-6">
    <div class="pagination text-center">
      <v-btn :disabled="!prev" @click="$router.push(`/news/?page=${prev}`)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn :disabled="!next" @click="$router.push(`/news/?page=${next}`)">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pager',
  props: ['prev', 'next']
};
</script>

<style lang="scss" scoped></style>
