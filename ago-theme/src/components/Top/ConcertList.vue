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
    <button path="/concerts/" text="VIEW MORE" />
  </section>
</template>

<script>
import SectionTitle from '@/components/molecules/SectionTitle';
import ConcertCard from '@/components/Concerts/Card';
import Button from '@/components/molecules/Button';

export default {
  name: 'TopConcertList',
  components: {
    SectionTitle,
    ConcertCard,
    Button
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
