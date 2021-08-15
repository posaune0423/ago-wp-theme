<template>
  <div class="newsList__container">
    <section-title class="newsList__header" title="NEWS" subtitle="お知らせ" />
    <div class="newsCard__container">
      <news-card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/molecules/SectionTitle';
import NewsCard from '@/components/News/Card';

export default {
  name: 'TopNewsList',
  components: {
    SectionTitle,
    NewsCard
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getPosts() {
      this.$axios
        .get('wp/v2/posts', { params: { per_page: 3 } })
        .then((res) => {
          this.posts = res.data;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style lang="scss" scoped>
.newsList__container {
  padding-bottom: 2rem;
}
.newsList__header {
  @include pc-screen() {
    padding: 2rem 6rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}
.newsCard__container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @include pc-screen() {
    padding: 2rem 6rem;
  }
}
</style>
