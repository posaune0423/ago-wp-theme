<template>
  <div class="movie">
    <div class="movie-frame">
      <iframe
        src="https://www.youtube.com/embed/f_41P8qOJUY"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Movie */
.movie {
  margin-bottom: 40px;
}
.movie-frame {
  position: relative;
  height: 0;
  margin: 0 auto;
}
.movie-frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media (min-width: 970px) {
  .movie {
    padding: 50px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .movie-frame {
    width: 80%;
    padding-top: 40%;
  }
}
@media (max-width: 970px) {
  .movie {
    margin-bottom: 40px;
  }
  .movie-frame {
    width: 100%;
    padding-top: 60%;
  }
}
</style>
