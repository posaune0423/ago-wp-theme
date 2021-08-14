<template>
  <div>
    <lower-header title="NEWS" subtitle="お知らせ" />
    <bread-list />
    <v-container class="my-4">
      <post-list />
    </v-container>
  </div>
</template>

<script>
import PostList from '@/components/News/List';
import BreadList from '@/components/News/BreadList';
import LowerHeader from '@/components/molecules/LowerHeader';

export default {
  name: 'PostIndex',
  components: {
    PostList,
    BreadList,
    LowerHeader
  }
};
</script>

<style lang="scss" scoped></style>
