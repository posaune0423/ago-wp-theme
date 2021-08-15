<template>
  <div class="concertList__container">
    <section-title
      class="concertList__header"
      title="CONCERTS"
      subtitle="演奏会情報"
    />
    <div class="concertCard__container">
      <concert-card
        v-for="concert in topConcerts"
        :key="concert.id"
        :concert="concert"
      />
    </div>
    <div class="text-center btn_container">
      <v-btn color="success" block x-large to="/concerts/">VIEW MORE</v-btn>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/molecules/SectionTitle';
import ConcertCard from '@/components/Concerts/Card';

export default {
  name: 'TopConcertList',
  components: {
    SectionTitle,
    ConcertCard
  },
  computed: {
    topConcerts() {
      return this.$store.getters['concerts/getConcerts'];
    }
  }
};
</script>

<style lang="scss" scoped>
.concertList__container {
  padding-bottom: 2rem;
  background-color: $c_gray-light;
}
.concertList__header {
  @include pc-screen() {
    padding: 2rem 6rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}
.concertCard__container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @include pc-screen() {
    padding: 2rem 6rem;
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
