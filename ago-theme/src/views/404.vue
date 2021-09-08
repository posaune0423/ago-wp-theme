<template>
  <div class="NotFound">
    <lower-header
      title="NOTFOUND"
      subtitle="お探しのページは見つかりません。"
    />
    <div class="NotFound__Container">
      <div class="NotFound__Header">
        <h2 class="NotFound__Header__Inner">
          お探しのページは見つかりません。
        </h2>
      </div>
      <p class="NotFound__Body">
        お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
      </p>
      <button path="/" text="TOPに戻る" />
    </div>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import Button from '@/components/molecules/Button';

export default {
  components: {
    LowerHeader,
    Button
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'NOTFOUND'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.NotFound {
  &__Container {
    background-color: $c_gray-light;

    @include pc-screen() {
      padding: 3rem 4rem;
    }
    @include sp-screen() {
      padding: 2rem;
    }
  }
  &__Header__Inner {
    font-size: 2rem;
    text-align: center;
    margin: 2rem auto;
  }
  &__Body {
    @include pc-screen() {
      text-align: center;
    }
    margin: 2rem auto;
  }
}
</style>
