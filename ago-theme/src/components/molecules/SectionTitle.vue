<template>
  <div class="Section__Title__Container">
    <h2 class="Section__Title">
      <span class="Section__Title__Body">{{ title }}</span>
      <span class="Section__Title__Subtitle">{{ subtitle }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: ['title', 'subtitle']
};
</script>

<style lang="scss" scoped>
.Section__Title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.9rem;
  @include pc-screen() {
    margin-bottom: 4rem;
  }
  @include sp-screen() {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  &__Body {
    @include pc-screen() {
      font-size: 2.4rem;
    }
    @include sp-screen() {
      font-size: 1.4rem;
    }
    &::after {
      position: absolute;
      left: 0;
      height: 3px;
      background-color: #222;
      content: '';
      @include pc-screen() {
        bottom: 3vw;
        width: 16rem;
      }
      @include sp-screen() {
        bottom: 8.6vw;
        width: 10rem;
      }
    }
  }
  &__Subtitle {
    margin-left: 1rem;
    @include pc-screen() {
      margin-top: 2rem;
    }
    @include sp-screen() {
      margin-top: 1rem;
    }
  }
  .-green {
    color: $c_green;
  }
}
</style>
