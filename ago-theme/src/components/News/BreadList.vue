<template>
  <div>
    <ul class="d-flex breadList">
      <li>
        <router-link to="/">
          Home
        </router-link>
        <span class="mx-2"> > </span>
      </li>
      <li>
        <router-link to="/news/">
          News
        </router-link>
        <span v-if="title" class="mx-2"> > </span>
      </li>
      <li v-if="title">
        <router-link :to="`/news/${this.$route.params.id}`">
          {{ title | truncate(10) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BreadList',
  props: ['title'],
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
.breadList {
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
