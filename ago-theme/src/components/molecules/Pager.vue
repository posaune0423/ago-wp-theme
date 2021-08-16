<template>
  <div class="Pager">
    <div class="Pager__Inner">
      <v-btn
        :disabled="!prev"
        @click="$router.push(`/${parent}/?page=${prev}`)"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        :disabled="!next"
        @click="$router.push(`/${parent}/?page=${next}`)"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pager',
  props: ['prev', 'next', 'parent']
};
</script>

<style lang="scss" scoped>
.Pager {
  text-align: center;
  margin-top: 3rem;
  &__Inner {
    width: 42%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
}
</style>
