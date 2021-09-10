<template>
  <div>
    <div class="newsList__container">
      <v-skeleton-loader
        v-for="i in 6"
        v-show="loading"
        :key="i"
        class="mx-auto"
        width="344"
        type="card"
      ></v-skeleton-loader>
      <post-card
        v-for="post in posts"
        v-show="!loading"
        :key="post.id"
        :post="post"
      />
    </div>
    <pager v-if="prev || next" :next="next" :prev="prev" parent="news" />
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
  computed: {
    loading() {
      return this.$store.getters['loader/loading'];
    }
  },
  methods: {
    async getPosts(page = 1, limit = 6) {
      this.$axios
        .get(`wp/v2/posts?per_page=${limit}&page=${page}`)
        .then((res) => {
          this.posts = res.data;
          this.current = page;
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
  mounted() {
    this.$store
      .dispatch('loader/startLoad')
      .then(() => this.getPosts(this.$route.query.page || 1))
      .then(() => this.$store.dispatch('loader/endLoad'));
  },
  watch: {
    $route: function() {
      this.$store
        .dispatch('loader/startLoad')
        .then(() => this.getPosts(this.$route.query.page || 1))
        .then(() => this.$store.dispatch('loader/endLoad'));
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
