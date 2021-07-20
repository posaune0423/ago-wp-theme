<template>
  <div>
    <bread-list />
    <v-container class="my-4">
      <post-list />
    </v-container>
  </div>
</template>

<script>
import PostList from '@/components/News/List';
import BreadList from '@/components/News/BreadList';

export default {
  name: 'PostIndex',
  components: {
    PostList,
    BreadList
  }
};
</script>

<style lang="scss" scoped></style>
