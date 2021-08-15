<template>
  <div class="hero-panel">
    <video
      id="bg-video"
      src="@/assets/images/hero_movie.mp4"
      muted="muted"
      loop
      autoplay="true"
    ></video>
    <div class="video-wrap">
      <h1>Welcome to our House</h1>
      <p>A place to take in a spectacular horizon, then broaden your own.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#bg-video {
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  background-size: cover;
}
.video-wrap {
  h1 {
    font-weight: 900;
    padding: 0 27px;
  }
  p {
    font-weight: bold;
    padding: 0 27px;
  }
}
@media (min-width: 1268px) {
  .video-wrap {
    h1 {
      color: #fff;
      font-size: 125px;
    }
    p {
      color: #fff;
      font-size: 35px;
    }
  }
}
@media (max-width: 1268px) {
  .video-wrap {
    h1 {
      color: #fff;
      font-size: 100px;
    }
    p {
      color: #fff;
      font-size: 28px;
    }
  }
}
@media (max-width: 1107px) {
  .video-wrap {
    h1 {
      color: #fff;
      font-size: 90px;
    }
    p {
      color: #fff;
      font-size: 25px;
    }
  }
}
@media (max-width: 997px) {
  .video-wrap {
    h1 {
      color: #fff;
      font-size: 85px;
    }
    p {
      color: #fff;
      font-size: 20px;
    }
  }
}
@media (max-width: 922px) {
  .video-wrap {
    h1 {
      color: #fff;
      font-size: 70px;
    }
    p {
      color: #fff;
      font-size: 17px;
    }
  }
}
@media (max-width: 946px) {
  .video-wrap {
    h1 {
      color: #fff;
      font-size: 62px;
    }
    p {
      color: #fff;
      font-size: 17px;
    }
  }
}
@media (max-width: 860px) {
  .video-wrap {
    h1 {
      color: #fff;
      font-size: 57px;
    }
    p {
      color: #fff;
      font-size: 17px;
    }
  }
}
@media (min-width: 793px) {
  .video-wrap {
    position: absolute;
    top: 200px;
    width: 60%;
  }
}
@media (max-width: 793px) {
  .video-wrap {
    h1 {
      padding-top: 10px;
      color: #111;
      font-size: 40px;
    }
    p {
      color: #111;
      font-size: 25px;
    }
  }
}
</style>
