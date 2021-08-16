<template>
  <section class="Top__HeroArea">
    <video
      src="@/assets/images/hero_movie.mp4"
      poster="@/assets/images/hero_movie_poster.jpg"
      playsinline
      muted="muted"
      loop
      autoplay="true"
      loading="lazy"
      class="Top__HeroAreea__BgVideo"
    ></video>
    <div class="Top__HeroAreea__BgVideo-wrap">
      <h1>Welcome to our House</h1>
      <p>A place to take in a spectacular horizon, then broaden your own.</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.Top__HeroAreea__BgVideo {
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  background-size: cover;
  &-wrap {
    h1 {
      font-weight: 900;
      padding: 0 27px;
    }
    p {
      font-weight: bold;
      padding: 0 27px;
    }
  }
}
@media (min-width: 1268px) {
  .Top__HeroAreea__BgVideo-wrap {
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
  .Top__HeroAreea__BgVideo-wrap {
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
  .Top__HeroAreea__BgVideo-wrap {
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
  .Top__HeroAreea__BgVideo-wrap {
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
  .Top__HeroAreea__BgVideo-wrap {
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
  .Top__HeroAreea__BgVideo-wrap {
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
  .Top__HeroAreea__BgVideo-wrap {
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
  .Top__HeroAreea__BgVideo-wrap {
    position: absolute;
    top: 200px;
    width: 60%;
  }
}
@media (max-width: 793px) {
  .Top__HeroAreea__BgVideo-wrap {
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
