<template>
  <div class="NewsDetail__Content" v-html="content"></div>
</template>

<script>
export default {
  name: 'PostContent',
  props: ['content']
};
</script>

<style lang="scss">
.NewsDetail__Content {
  padding: 1rem;
  .wp-block-image {
    img {
      height: auto !important;
      width: auto !important;
      object-fit: contain;
    }
  }
}
</style>
