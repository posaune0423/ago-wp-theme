<template>
  <div class="About">
    <lower-header title="ABOUT" subtitle="私達について" />
    <section class="About__WhoWeAre">
      <h2 class="SectionTitle">
        <span class="SectionTitle__Body"
          >Who we <span class="-green">are</span></span
        >
        <span class="SectionTitle__Subtitle">青山学院管弦楽団とは</span>
      </h2>
      <p>
        青山学院管弦楽団は青山学院大学文化連合会に所属する学生オーケストラ団体です。当団は1954年に創設され、現在は他大学の学生を含め現役生110名を超える団員で構成されています。練習は通常週３回、青山キャンパスで行なっています。
        各パートのトレーナーにはNHK交響楽団の諸先生方をお迎えし、熱のこもったご指導を頂いております。
      </p>
      <p>
        主な活動として例年は年2回の定期演奏会(東京オペラシティ等)を中心に、12月のオール青山メサイア公演、学位授与式での演奏、各種依頼演奏を行なっています。
      </p>
      <p>
        また、毎年6月には部内アンサンブル大会を開いており、フル編成のみならずアンサンブルを楽しむ機会もあります。最近は遠ざかってはいますが、海外演奏旅行やオーケストラ大会への参加も過去に行っています。
      </p>
    </section>

    <div class="ImageContainer">
      <figure>
        <v-img
          src="/wp-content/themes/ago-theme/static/about/regular_concert.jpg"
          lazy-src="/wp-content/themes/ago-theme/static/about/regular_concert.jpg"
          alt="定期演奏会の様子"
        />
        <figcaption>(定期演奏会の様子)</figcaption>
      </figure>
    </div>

    <section class="About__RegularConcert">
      <h2 class="SectionTitle">
        <span class="SectionTitle__Body"
          ><span class="-green">Regular</span> Concert</span
        >
        <span class="SectionTitle__Subtitle">定期演奏会</span>
      </h2>
      <p>
        年2回、5月と11月頃に開催する当楽団の最大の行事です。会場は都内もしくは近郊のホールを利用させていただき、毎回多くのお客様にご来場いただいております。この数年では東京オペラシティ、ミューザ川崎、横浜みなとみらいホール、文京シビック大ホールなどで演奏会を行いました。演奏会終了後はレセプションが行われ、演奏会と同じくとても盛り上がります。
        1954年の第1回定期演奏会を皮切りに演奏会は100回以上を数え、これもひとえに皆様の支えがあってのことと思います。
      </p>
    </section>

    <div class="ImageContainer">
      <figure>
        <v-img
          src="/wp-content/themes/ago-theme/static/about/messiah.jpg"
          lazy-src="/wp-content/themes/ago-theme/static/about/messiah.jpg"
          alt="メサイア公演の様子"
        />
        <figcaption class="white--text">(メサイア公演の様子)</figcaption>
      </figure>
    </div>

    <section class="About__Messiah">
      <h2 class="SectionTitle">
        <span class="SectionTitle__Body"
          >Messiah <span class="-green">Concert</span></span
        >
        <span class="SectionTitle__Subtitle">オール青山メサイア公演</span>
      </h2>
      <p>
        オール青山メサイア公演は、毎年12月に青山学院のクリスマスの行事として1976年から行われています。普段は別々に活動している学内7つの音楽団体（合唱６、管弦楽１）が一堂に集まり、G.F.ヘンデル作曲のオラトリオ「メサイア」を演奏します。
        <br />
        オーケストラでは4年生が中心となって取り組んでおり、現役最後の演奏会となります。他団体との交流により、管弦楽のみとはまた違った魅力のある演奏会です。
      </p>
    </section>

    <div class="ImageContainer">
      <figure>
        <v-img
          src="/wp-content/themes/ago-theme/static/about/ensemble.jpg"
          lazy-src="/wp-content/themes/ago-theme/static/about/ensemble.jpg"
          alt="部内アンサンブル大会の様子"
        />
        <figcaption class="white--text">
          (部内アンサンブル大会の様子)
        </figcaption>
      </figure>
    </div>

    <section class="About__Ensemble">
      <h2 class="SectionTitle">
        <span class="SectionTitle__Body"
          ><span class="-green">Ensemble</span> Contest</span
        >
        <span class="SectionTitle__Subtitle">部内アンサンブル大会</span>
      </h2>
      <p>
        毎年6〜7月に部内アンサンブル大会を開催しています。アンサンブル大会は、新入生が実際に演奏に参加することによって当団の雰囲気や魅力を実感してもらおうということを目標に開催されています。少人数のアンサンブルからフル編成のオーケストラまで多くの団体が、様々なジャンルの曲を約1ヶ月間の練習を経て発表をします。
      </p>
      <p>
        パートやセクション、学年の垣根を超えて多くの団員がお互いの演奏を楽しみ、吹奏楽やコーラス付きのミュージカル曲、コンチェルトなど普段演奏することのない楽曲にも取り組むことができる機会となっています。
      </p>
    </section>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';

export default {
  name: 'AboutPage',
  components: {
    LowerHeader
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'ABOUT'
      };
    }
  }
};
</script>

<style scoped lang="scss">
.About {
  section {
    @include pc-screen() {
      padding: 3rem;
    }
    @include sp-screen() {
      padding: 1rem;
    }
  }
  p {
    @include pc-screen() {
      padding: 1rem 6rem;
      line-height: 2.4;
    }
    @include sp-screen() {
      padding: 0.6rem;
      line-height: 2.2;
      font-size: 0.9rem;
    }
  }
  &__WhoWeAre {
    background-color: $c_gray-light;
  }
  &__Messiah {
    color: $c_white;
    background-color: $c_black;
  }
  &__Ensemble {
    color: $c_white;
    background-color: rgba(0, 74, 112, 0.9);
  }
}
.SectionTitle {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.9rem;
  @include pc-screen() {
    margin-bottom: 4rem;
  }
  @include sp-screen() {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  &__Body {
    @include pc-screen() {
      font-size: 2.4rem;
    }
    @include sp-screen() {
      font-size: 1.4rem;
    }
    &::after {
      position: absolute;
      left: 0;
      height: 3px;
      background-color: #222;
      content: '';
      @include pc-screen() {
        bottom: 3.1vw;
        width: 19rem;
      }
      @include sp-screen() {
        bottom: 8.6vw;
        width: 11rem;
      }
    }
  }
  &__Subtitle {
    margin-left: 1rem;
    @include pc-screen() {
      margin-top: 2rem;
    }
    @include sp-screen() {
      margin-top: 1rem;
    }
  }
  .-green {
    color: $c_green;
  }
}

.ImageContainer {
  @include pc-screen() {
    height: 500px;
    figure > div {
      height: 500px;
    }
  }
  @include sp-screen() {
    height: 260px;
    figure > div {
      height: 260px;
    }
  }
  figure > div {
    width: 100%;
    object-fit: cover;
  }

  figcaption {
    color: #898989;
    font-size: 0.7rem;
    text-align: right;
    margin-right: 2rem;
    margin-top: 8px;
  }
}
</style>
