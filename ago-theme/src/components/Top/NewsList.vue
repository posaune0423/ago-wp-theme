<template>
  <div class="newsList__container">
    <section-title class="newsList__header" title="NEWS" subtitle="お知らせ" />
    <div class="newsCard__container">
      <news-card v-for="news in topNews" :key="news.id" :post="news" />
    </div>
    <div class="text-center btn_container">
      <v-btn color="success" block x-large to="/news/">VIEW MORE</v-btn>
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
  computed: {
    topNews() {
      return this.$store.getters['news/getNews'];
    }
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
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}

.btn_container {
  @include pc-screen() {
    width: 20%;
    margin: 0 auto;
  }
  @include sp-screen() {
    width: 46%;
    margin: 2rem auto;
  }
}
</style>
