<template>
  <ul class="BreadList">
    <li>
      <router-link to="/">
        Home
      </router-link>
      <span class="mx-2"> > </span>
    </li>
    <li>
      <router-link :to="parent ? `/${parent.toLowerCase()}/` : '/news/'">
        {{ parent || 'News' }}
      </router-link>
      <span v-if="title" class="mx-2"> > </span>
    </li>
    <li v-if="title">
      <router-link :to="`/news/${this.$route.params.id}`">
        {{ title | truncate(10) }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BreadList',
  props: ['title', 'parent'],
  filters: {
    truncate: function(val, len) {
      if (val) {
        const length = len ? parseInt(len, 10) : 20;
        if (val.length <= length) {
          return val;
        }
        return val.substring(0, length) + '...';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.BreadList {
  display: flex;
  li {
    text-decoration: none;
    list-style: none;
    a {
      color: $c_black;
      text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
