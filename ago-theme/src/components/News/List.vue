<template>
  <div>
    <div class="newsList__container">
      <post-card v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <pager :next="next" :prev="prev" />
  </div>
</template>

<script>
import PostCard from '@/components/News/Card';
import Pager from '@/components/molecules/Pager';

export default {
  name: 'PostList',
  components: {
    PostCard,
    Pager
  },
  data() {
    return {
      posts: [],
      current: this.$route.query.page || 1,
      prev: null,
      next: null,
      total: null
    };
  },
  methods: {
    getPosts(page = 1) {
      this.$axios.get(`wp/v2/posts?per_page=3&page=${page}`).then((res) => {
        this.current = page;
        this.posts = res.data;
        this.makePagination(res);
      });
    },
    makePagination(data) {
      this.total = data.headers['x-wp-totalpages'];
      //set up prev page
      if (this.current > 1) {
        this.prev = parseInt(this.current) - 1;
      } else {
        this.prev = null;
      }
      //set up next page
      if (this.current != this.total) {
        this.next = parseInt(this.current) + 1;
      } else {
        this.next = null;
      }
    }
  },
  created() {
    this.getPosts(this.$route.query.page || 1);
  },
  watch: {
    $route: function() {
      this.getPosts(this.$route.query.page || 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.newsList__container {
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
}
</style>
