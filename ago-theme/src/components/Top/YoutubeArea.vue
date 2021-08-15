<template>
  <section class="Top__youtubeArea">
    <section-title
      class="youtubeArea__header"
      title="PERFORMANCE"
      subtitle="過去の演奏"
    />
    <div class="movie_frame">
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
.youtubeArea__header {
  @include pc-screen() {
    padding: 2rem 6rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}

.movie_frame {
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
  .Top__youtubeArea {
    padding-bottom: 2rem;
  }
  .movie_frame {
    width: 80%;
    padding-top: 40%;
  }
}
@include sp-screen() {
  .Top__youtubeArea {
    margin-bottom: 2rem;
  }
  .movie_frame {
    width: 100%;
    padding-top: 60%;
  }
}
</style>
