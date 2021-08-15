<template>
  <div>
    <lower-header title="CONCERTS" subtitle="演奏会情報" />
    <div class="ConcertList__OuterWrap">
      <bread-list parent="Concerts" />
      <div class="ConcertListt__Wrap">
        <concert-list class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import ConcertList from '@/components/Concerts/List';
import BreadList from '@/components/News/BreadList';

export default {
  name: 'ConcertIndex',
  components: {
    LowerHeader,
    ConcertList,
    BreadList
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'CONCERTS'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ConcertList__OuterWrap {
  background-color: $c_gray-light;
  padding: 2rem 0;
}

.ConcertListt__Wrap {
  @include pc-screen() {
    padding: 2rem 4rem;
  }
}
</style>
