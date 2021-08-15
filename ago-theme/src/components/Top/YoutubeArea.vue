<template>
  <div class="movie_container">
    <div class="movie_frame">
      <iframe
        src="https://www.youtube.com/embed/vJpIiOI4UYw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.movie_container {
  margin-bottom: 40px;
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
  .movie_container {
    padding: 50px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .movie_frame {
    width: 80%;
    padding-top: 40%;
  }
}
@include sp-screen() {
  .movie_container {
    margin-bottom: 40px;
  }
  .movie_frame {
    width: 100%;
    padding-top: 60%;
  }
}
</style>
