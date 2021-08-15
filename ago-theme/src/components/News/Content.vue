<template>
  <div class="post_content__container" v-html="content"></div>
</template>

<script>
export default {
  name: 'PostContent',
  props: ['content']
};
</script>

<style lang="scss" scoped>
.post_content__container {
  padding: 1rem;
}
</style>
