<template>
  <div>
    <lower-header title="CONTACT" subtitle="お問い合わせ" />
    <div class="thanks_container">
      <div class="thanks_header_wrap">
        <h2 class="thanks_header">
          お問い合わせありがとうございました。
        </h2>
      </div>
      <p class="thanks_body">
        この度は青山学院管弦楽団へお問い合わせいただき、ありがとうございます。<br />
        お問い合わせ内容を確認の上、担当者より連絡いたしますので、少々お待ちください。
      </p>
      <div class="text-center btn_container">
        <v-btn color="success" block x-large to="/">TOPに戻る</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
export default {
  components: {
    LowerHeader
  }
};
</script>

<style lang="scss" scoped>
.thanks_container {
  background-color: $c_gray-light;

  @include pc-screen() {
    padding: 2rem 4rem;
  }
  @include sp-screen() {
    padding: 2rem;
  }
}
.thanks_header {
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
}

.thanks_body {
  text-align: center;
  margin: 2rem auto;
}

.btn_container {
  @include pc-screen() {
    width: 26%;
  }
  @include sp-screen() {
    width: 46%;
  }
  margin: 0 auto;
}
</style>
