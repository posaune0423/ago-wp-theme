<template>
  <div>
    <lower-header title="NEWS" subtitle="お知らせ" />
    <div class="NewsList__OuterWrap">
      <bread-list />
      <div class="NewsList__Wrap">
        <news-list class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/News/List';
import BreadList from '@/components/News/BreadList';
import LowerHeader from '@/components/molecules/LowerHeader';

export default {
  name: 'NewsIndex',
  components: {
    NewsList,
    BreadList,
    LowerHeader
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'NEWS'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.NewsList__OuterWrap {
  background-color: $c_gray-light;
  padding: 2rem 0;
}

.NewsList__Wrap {
  @include pc-screen() {
    padding: 2rem 9rem;
  }
}
</style>
