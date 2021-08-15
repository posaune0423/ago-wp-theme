<template>
  <div class="top_container">
    <hero-area />
    <top-news-list />
    <top-concert-list />
    <youtube-area />
  </div>
</template>

<script>
import TopConcertList from '@/components/Top/ConcertList';
import TopNewsList from '@/components/Top/NewsList';
import YoutubeArea from '@/components/Top/YoutubeArea';
import HeroArea from '@/components/Top/HeroArea';

export default {
  name: 'TopPage',
  components: {
    TopConcertList,
    TopNewsList,
    YoutubeArea,
    HeroArea
  },
  methods: {
    setupTopPage() {
      this.$store.dispatch('news/fetchNews');
      this.$store.dispatch('concerts/fetchConcerts');
    }
  },
  mounted() {
    this.setupTopPage();
  }
};
</script>

<style lang="scss" scoped>
.top_container {
  @include pc-screen() {
    margin-top: $h_header;
  }
  @include sp-screen() {
    margin-top: $h_header_sp;
  }
}
</style>
