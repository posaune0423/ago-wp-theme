<template>
  <div class="lower_header">
    <h1 class="header_title">
      {{ title }}
    </h1>
    <span class="header_subtitle">
      {{ subtitle }}
    </span>
    <p class="bg-text">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LowerHeader',
  props: ['title', 'subtitle']
};
</script>

<style lang="scss" scoped>
.lower_header {
  margin-top: $h_header;
  padding-right: 2rem;
  padding-left: 4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  overflow: hidden;
}

.header_title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.header_subtitle {
  font-size: 0.9rem;
  margin-left: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
}

.bg-text {
  @include pc-screen {
    font-size: 14rem;
    top: 1.8rem;
    left: 31vw;
  }
  @include sp-screen {
    font-size: 2.6rem;
    top: 0;
    left: 32vw;
  }
  color: #fff;
  -webkit-text-stroke: 2px #cfcfcf;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
}
</style>
