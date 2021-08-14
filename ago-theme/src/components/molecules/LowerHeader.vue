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
  position: relative;

  @include pc-screen {
    padding-right: 2rem;
    padding-left: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    overflow: hidden;
  }
  @include sp-screen {
    padding-right: 1rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.header_title {
  @include pc-screen {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @include sp-screen {
    font-size: 2rem;
  }
}

.header_subtitle {
  margin-left: 0.8rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
  @include pc-screen {
    font-size: 0.9rem;
  }
  @include sp-screen {
    font-size: 0.7rem;
  }
}

.bg-text {
  @include pc-screen {
    font-size: 14rem;
    top: 1.8rem;
    left: 31vw;
    color: #fff;
    -webkit-text-stroke: 2px #cfcfcf;
    position: absolute;
    opacity: 0.3;
  }
  @include sp-screen {
    display: none;
  }
}
</style>
