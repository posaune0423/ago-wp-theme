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
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.header_title {
  font-size: 3rem;
  font-weight: 700;
}

.header_subtitle {
  font-size: 0.9rem;
  color: #565656;
  margin-left: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
}

.bg-text {
  @include pc-screen {
    font-size: 9rem;
    top: 0;
    left: 21vw;
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
