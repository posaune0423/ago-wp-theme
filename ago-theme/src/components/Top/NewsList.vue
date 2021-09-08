<template>
  <section class="Top__NewsList">
    <section-title class="newsList__header" title="NEWS" subtitle="お知らせ" />
    <div class="NewsCard__Container">
      <news-card v-for="news in topNews" :key="news.id" :post="news" />
    </div>
    <link-button path="/news/" text="VIEW MORE" />
  </section>
</template>

<script>
import SectionTitle from '@/components/molecules/SectionTitle';
import LinkButton from '@/components/molecules/LinkButton';
import NewsCard from '@/components/News/Card';

export default {
  name: 'TopNewsList',
  components: {
    SectionTitle,
    NewsCard,
    LinkButton
  },
  computed: {
    topNews() {
      return this.$store.getters['news/getNews'];
    }
  }
};
</script>

<style lang="scss" scoped>
.Top__NewsList {
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
.NewsCard__Container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @include pc-screen() {
    padding: 2rem 6rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}
</style>
