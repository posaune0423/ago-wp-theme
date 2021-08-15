<template>
  <div>
    <lower-header title="CONCERT" subtitle="演奏会情報" />
    <h1 class="my-2 concertTitle">{{ concert.title.rendered }}</h1>
    <div class="my-2 gray--text concertDate">{{ concert.date }}</div>
    <div class="d-flex justify-center">
      <v-img :src="concert.featured_image.src" max-width="400" />
    </div>
    <post-content :content="concert.content.rendered" />
  </div>
</template>

<script>
import PostContent from '@/components/News/Content';
import LowerHeader from '@/components/molecules/LowerHeader';

export default {
  name: 'ConcertDetail',
  components: { PostContent, LowerHeader },
  data() {
    return {
      concert: {}
    };
  },
  methods: {
    getConcert() {
      this.$axios.get(`wp/v2/concerts/${this.$route.params.id}`).then((res) => {
        this.concert = res.data;
      });
    }
  },
  created() {
    this.getConcert();
  }
};
</script>

<style lang="scss" scoped>
.concertTitle {
  @include sp-screen() {
    font-size: 1.5rem;
    padding: 1rem;
  }
}

.concertDate {
  @include sp-screen() {
    padding: 1rem;
  }
  text-align: right;
}
</style>
