<template>
  <div class="about">
    <lower-header title="ABOUT" subtitle="私達について" />
    <section class="about__whoWeAre">
      <h2 class="section_title">
        <span class="section_title__body"
          >Who we <span class="-green">are</span></span
        >
        <span class="section_title__subtitle">青山管弦楽団とは</span>
      </h2>
      <p>
        青山学院管弦楽団は、青山学院大学文化連合会オーケストラ部、青山学院女子短期大学オーケストラ部が一緒になって活動している団体です。
        創立当初は15名弱であったという団員も、現在は青大・青短の学生だけでなく、他大生の団員も含め、130名を越える大所帯となっています。
      </p>
      <p>
        ｢真剣に楽しむ」ことを基本コンセプトとし、音楽に対する真剣さや、皆で音楽をつくっていく喜びのなかに楽しさを見出していくという理念に基づき活動しています。
        練習はＯＢ・ＯＧも交えて、通常週３回、青山学院大学・青山キャンパスで行われています。
        <br />
        各パートのトレーナーにNHK交響楽団の諸先生方をお迎えし、熱のこもったご指導を頂いております。
      </p>
      <p>
        主な活動としては年2回の定期演奏会を中心に、12月のオール青山メサイア公演、学位授与式での演奏、青山祭への参加、各種依頼演奏があります。
        また、毎年6月には部内アンサンブル大会を開いており、フル編成のみならずアンサンブルを楽しむ機会もあります。最近は遠ざかってはいますが、海外演奏旅行やオーケストラ大会への参加も過去に行っています。
      </p>
    </section>

    <div class="image_container">
      <figure>
        <img
          src="https://aoyamaorchestra.com/wp-content/themes/vuejs-wordpress-theme-starter/src/assets/img/0042_Cb15.jpg"
          alt="定期演奏会の様子"
        />
        <figcaption>(定期演奏会の様子)</figcaption>
      </figure>
    </div>

    <section class="about__regularConcert">
      <h2 class="section_title">
        <span class="section_title__body"
          ><span class="-green">Regular</span> Concert</span
        >
        <span class="section_title__subtitle">定期演奏会</span>
      </h2>
      <p>
        年2回、5月と11月頃に開催する当楽団の最大の行事です。会場は都内もしくは近郊のホールを利用させていただき、毎回多くのお客様にご来場いただいております。この数年では東京オペラシティ、ミューザ川崎、横浜みなとみらいホール、文京シビック大ホールなどで演奏会を行いました。演奏会終了後はレセプションが行われ、演奏会と同じくとても盛り上がります。
        1954年の第1回定期演奏会を皮切りに演奏会は100回以上を数え、これもひとえに皆様の支えがあってのことと思います。
      </p>
    </section>

    <div class="image_container">
      <figure>
        <img
          src="https://aoyamaorchestra.com/wp-content/themes/vuejs-wordpress-theme-starter/src/assets/img/AoM_10.jpg"
          alt="メサイア公演の様子"
        />
        <figcaption class="text--white">(メサイア公演の様子)</figcaption>
      </figure>
    </div>

    <section class="about__messiah">
      <h2 class="section_title">
        <span class="section_title__body"
          >Messiah <span class="-green">Concert</span></span
        >
        <span class="section_title__subtitle">オール青山メサイア公演</span>
      </h2>
      <p>
        オール青山メサイア公演は、毎年12月に青山学院のクリスマスの行事として1976年から行われています。普段は別々に活動している学内7つの音楽団体（合唱６、管弦楽１）が一堂に集まり、G.F.ヘンデル作曲のオラトリオ「メサイア」を演奏します。
        <br />
        オーケストラでは4年生が中心となって取り組んでおり、現役最後の演奏会となります。他団体との交流により、管弦楽のみとはまた違った魅力のある演奏会です。
      </p>
    </section>

    <div class="image_container">
      <figure>
        <img
          src="https://aoyamaorchestra.com/wp-content/themes/vuejs-wordpress-theme-starter/src/assets/img/aoyama_fes.jpg"
          alt="青山祭の様子"
        />
        <figcaption class="text--white">(青山祭の様子)</figcaption>
      </figure>
    </div>

    <section class="about__aoyamaFestival">
      <h2 class="section_title">
        <span class="section_title__body"
          ><span class="-green">Aoyama</span> Festival</span
        >

        <span class="section_title__subtitle">青山祭</span>
      </h2>

      <p>
        毎年11月に青山キャンパスで行われる「青山祭」に青山学院管弦楽団も参加しています。毎年音楽喫茶を開催しており、ケーキとドリンクをオーケストラの生演奏を聴きながら共に楽しめるということで、ご好評をいただいております。<br />
        フル編成のオーケストラではクラシック音楽のみならず、ディズニーやジブリなど誰もが耳にしたことのある曲も演奏しています。また、オーケストラのみならず小編成のアンサンブル発表も行っています。
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
  }
};
</script>

<style scoped lang="scss">
.about {
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
  &__whoWeAre {
    background-color: $c_gray-light;
  }
  &__messiah {
    color: $c_white;
    background-color: $c_black;
  }
  &__aoyamaFestival {
    color: $c_white;
    background-color: rgba(0, 74, 112, 0.9);
  }
}
.section_title {
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
  &__body {
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
        bottom: 3.6vw;
        width: 19rem;
      }
      @include sp-screen() {
        bottom: 8.6vw;
        width: 11rem;
      }
    }
  }
  &__subtitle {
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

.image_container {
  @include pc-screen() {
    height: 500px;
    img {
      height: 500px;
    }
  }
  @include sp-screen() {
    height: 260px;
    img {
      height: 260px;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
  }

  figcaption {
    color: #898989;
    font-size: 0.7rem;
    text-align: right;
    margin-right: 2rem;
  }
}
</style>
