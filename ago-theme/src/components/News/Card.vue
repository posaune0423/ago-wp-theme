<template>
  <v-card class="mx-auto" width="344" :to="'/news/' + post.id" hover>
    <v-img :src="post.featured_image.src" height="200px"></v-img>

    <v-card-title>
      {{ post.title.rendered }}
    </v-card-title>

    <v-card-subtitle>{{ post.excerpt }} </v-card-subtitle>

    <v-card-text>
      <v-chip
        v-for="(name, i) in post.category_name"
        :key="i"
        class="mr-1"
        small
      >
        {{ name }}
      </v-chip>
    </v-card-text>

    <v-card-text class="text-right">
      {{ post.date }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post'],
  data: () => ({
    show: false
  })
};
</script>

<style lang="scss" scoped></style>
