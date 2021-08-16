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
      <h1>Welcome to <span class="-large">AGO</span></h1>
      <p>A place to make music with best mates</p>
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
      font-size: 110px;
      .-large {
        font-size: 130px;
      }
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
      font-weight: 900;
      padding: 0 27px;
      color: #fff;
      font-size: 110px;
      .-large {
        font-size: 130px;
      }
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
      font-size: 80px;
      .-large {
        font-size: 90px;
      }
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
      font-size: 65px;
      .-large {
        font-size: 75px;
      }
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
      font-size: 60px;
      .-large {
        font-size: 70px;
      }
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
      font-size: 55px;
      .-large {
        font-size: 65px;
      }
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
      font-size: 2rem;
      .-large {
        font-size: 2.5rem;
      }
    }
    p {
      color: #111;
      font-size: 25px;
    }
  }
}
</style>
