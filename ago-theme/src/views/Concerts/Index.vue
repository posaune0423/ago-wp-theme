<template>
  <div>
    <lower-header title="CONCERTS" subtitle="演奏会情報" />
    <v-container class="my-4">
      <concert-list />
    </v-container>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import ConcertList from '@/components/Concerts/List';

export default {
  name: 'ConcertIndex',
  components: {
    LowerHeader,
    ConcertList
  }
};
</script>

<style lang="scss" scoped></style>
