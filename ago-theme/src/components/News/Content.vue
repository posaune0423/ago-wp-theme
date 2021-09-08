<template>
  <div class="NewsDetail__Content" v-html="content"></div>
</template>

<script>
export default {
  name: 'PostContent',
  props: ['content']
};
</script>

<style lang="scss" scoped>
.NewsDetail__Content {
  padding: 1rem;
}
</style>
