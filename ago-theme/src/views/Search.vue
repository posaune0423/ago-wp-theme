<template>
  <div class="Search">
    <lower-header title="SEARCH" subtitle="検索" />
    <div class="Search__OuterWrap">
      <div class="Search__Wrap">
        <search-box />
      </div>
    </div>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import SearchBox from '@/components/Search/SearchBox';

export default {
  name: 'SearchPage',
  components: {
    LowerHeader,
    SearchBox
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
    async getPosts(page = 1, limit = 6, q = '') {
      this.$axios
        .get(`wp/v2/posts?search=${q}&per_page=${limit}&page=${page}`)
        .then((res) => {
          this.posts = res.data;
          console.log(this.posts);
          this.current = page;
          this.makePagination(res);
        });
    }
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
  },
  watch: {
    $route: function() {
      this.$store
        .dispatch('loader/startLoad')
        .then(() =>
          this.getPosts(this.$route.query.page || 1, 6, this.$route.query.q)
        )
        .then(() => this.$store.dispatch('loader/endLoad'));
    }
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'SEARCH'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.Search__OuterWrap {
  background-color: $c_gray-light;
  padding: 2rem 0;
}

.Search__Wrap {
  @include pc-screen() {
    padding: 6rem 9rem;
  }
  @include sp-screen() {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 30vh;
  }
}
</style>
