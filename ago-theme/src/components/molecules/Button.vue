<template functional>
  <div class="Btn__Container">
    <v-btn color="success" block x-large :to="props.path">{{
      props.text
    }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['path', 'text']
};
</script>

<style lang="scss" scoped>
.Btn__Container {
  text-align: center;
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
