<template>
  <div class="Search">
    <lower-header title="SEARCH" subtitle="検索" />
    <div class="Search__OuterWrap">
      <div class="Search__Wrap">
        <search-box />
        <div v-if="results.length" class="Search__Result">
          <v-skeleton-loader
            v-for="i in 6"
            v-show="loading"
            :key="i"
            class="mx-auto"
            width="344"
            type="card"
          ></v-skeleton-loader>
          <post-card
            v-for="result in results"
            v-show="!loading"
            :key="result.id"
            :post="result"
          />
        </div>
        <div v-if="!results.length && searched" class="Search__NotFound">
          <h3>{{ this.$route.query.q }} の検索結果が見つかりませんでした</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import PostCard from '@/components/News/Card';
import SearchBox from '@/components/Search/SearchBox';

export default {
  name: 'SearchPage',
  components: {
    LowerHeader,
    SearchBox,
    PostCard
  },
  data() {
    return {
      results: [],
      searched: false
    };
  },
  computed: {
    loading() {
      return this.$store.getters['loader/loading'];
    }
  },
  methods: {
    async getPosts(q = '', page = 1, limit = 6) {
      this.$axios
        .get(`wp/v2/posts?search=${q}&per_page=${limit}&page=${page}`)
        .then((res) => {
          this.results = res.data;
          this.searched = true;
        });
    }
  },
  mounted() {
    if (this.$route.query.q) {
      this.$store
        .dispatch('loader/startLoad')
        .then(() => this.getPosts(this.$route.query.q))
        .then(() => this.$store.dispatch('loader/endLoad'));
    }
  },
  watch: {
    $route: function() {
      if (this.$route.query.q) {
        this.$store
          .dispatch('loader/startLoad')
          .then(() => this.getPosts(this.$route.query.q))
          .then(() => this.$store.dispatch('loader/endLoad'));
      }
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
.Search {
  &__OuterWrap {
    background-color: $c_gray-light;
    padding: 2rem 0;
  }
  &__Wrap {
    @include pc-screen() {
      padding: 6rem 9rem;
    }
    @include sp-screen() {
      padding-top: 1rem;
      // padding-bottom: 30vh;
    }
  }
  &__Result {
    flex-wrap: wrap;
    display: flex;
    gap: 2rem;
  }
  &__NotFound {
    text-align: center;
    padding: 1rem;
    @include pc-screen() {
      font-size: 2rem;
    }
    @include sp-screen() {
      font-size: 0.8rem;
    }
  }
}
</style>
