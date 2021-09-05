<template>
  <div class="Thanks">
    <lower-header title="CONTACT" subtitle="お問い合わせ" />
    <div class="Thanks__Container">
      <div class="Thanks__Header">
        <h2 class="Thanks__Header__Inner">
          お問い合わせありがとうございました。
        </h2>
      </div>
      <p class="Thanks__Body">
        この度は青山学院管弦楽団へお問い合わせいただき、ありがとうございます。<br />
        お問い合わせ内容を確認の上、担当者より連絡いたしますので、少々お待ちください。
      </p>
      <view-more-btn path="/" text="TOPに戻る" />
    </div>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import ViewMoreBtn from '@/components/molecules/ViewMoreBtn';

export default {
  components: {
    LowerHeader,
    ViewMoreBtn
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'THANKS'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.Thanks {
  &__Container {
    background-color: $c_gray-light;

    @include pc-screen() {
      padding: 2rem 4rem;
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
