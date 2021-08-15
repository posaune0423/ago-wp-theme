<template>
  <section class="Top__ConcertList">
    <section-title
      class="Top__ConcertList__Header"
      title="CONCERTS"
      subtitle="演奏会情報"
    />
    <div class="ConcertCard__Container">
      <concert-card
        v-for="concert in topConcerts"
        :key="concert.id"
        :concert="concert"
      />
    </div>
    <view-more-btn path="/concerts/" />
  </section>
</template>

<script>
import SectionTitle from '@/components/molecules/SectionTitle';
import ConcertCard from '@/components/Concerts/Card';
import ViewMoreBtn from '@/components/molecules/ViewMoreBtn';

export default {
  name: 'TopConcertList',
  components: {
    SectionTitle,
    ConcertCard,
    ViewMoreBtn
  },
  computed: {
    topConcerts() {
      return this.$store.getters['concerts/getConcerts'];
    }
  }
};
</script>

<style lang="scss" scoped>
.Top__ConcertList {
  padding-bottom: 2rem;
  background-color: $c_gray-light;
}
.Top__ConcertList__Header {
  @include pc-screen() {
    padding: 2rem 6rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}
.ConcertCard__Container {
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
