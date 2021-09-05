<template>
  <div class="Top">
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
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'TOP'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.Top {
  @include pc-screen() {
    margin-top: $h_header;
  }
  @include sp-screen() {
    margin-top: $h_header_sp;
  }
}
</style>
