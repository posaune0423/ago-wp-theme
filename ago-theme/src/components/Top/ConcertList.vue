<template>
  <div class="concertList__container">
    <section-title
      class="concertList__header"
      title="CONCERT"
      subtitle="演奏会情報"
    />
  </div>
</template>

<script>
import SectionTitle from '@/components/molecules/SectionTitle';

export default {
  name: 'TopConcertList',
  components: {
    SectionTitle
  }
};
</script>

<style lang="scss" scoped>
.concertList__header {
  @include pc-screen() {
    padding: 2rem 6rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}
</style>
