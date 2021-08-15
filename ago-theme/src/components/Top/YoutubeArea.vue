<template>
  <section class="Top__YoutubeArea">
    <section-title
      class="Top__YoutubeArea__Header"
      title="PERFORMANCE"
      subtitle="過去の演奏"
    />
    <div class="Top__YoutubeArea__MovieFrame">
      <iframe
        src="https://www.youtube.com/embed/vJpIiOI4UYw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/molecules/SectionTitle';
export default {
  name: 'YoutubeArea',
  components: {
    SectionTitle
  }
};
</script>

<style lang="scss" scoped>
.Top__YoutubeArea__Header {
  @include pc-screen() {
    padding: 2rem 6rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}

.Top__YoutubeArea__MovieFrame {
  position: relative;
  height: 0;
  margin: 0 auto;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
@include pc-screen() {
  .Top__YoutubeArea {
    padding-bottom: 2rem;
  }
  .Top__YoutubeArea__MovieFrame {
    width: 80%;
    padding-top: 40%;
  }
}
@include sp-screen() {
  .Top__YoutubeArea {
    margin-bottom: 2rem;
  }
  .Top__YoutubeArea__MovieFrame {
    width: 100%;
    padding-top: 60%;
  }
}
</style>
