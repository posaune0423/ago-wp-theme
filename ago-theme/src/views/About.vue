<template>
  <div>
    <lower-header title="ABOUT" subtitle="私達について" />
    <div class="card">
      <img src="@/assets/images/about_cover.jpeg" />
      <div class="card-info">
        <div class="card-head">
          <h1 class="about-head">What is AGO?</h1>
        </div>
        <div class="card-desc">
          <p>
            青山学院管弦楽団は、青山学院大学文化連合会オーケストラ部、青山学院女子短期大学オーケストラ部が一緒になって活動している団体です。創立当初は15名弱であったという団員も、現在は青大・青短の学生だけでなく、他大生の団員も含め、130名を越える大所帯となっています。｢真剣に楽しむ」ことを基本コンセプトとし、音楽に対する真剣さや、皆で音楽をつくっていく喜びのなかに楽しさを見出していくという理念に基づき活動しています。
            練習はＯＢ・ＯＧも交えて、通常週３回、青山学院大学・青山キャンパスで行われています。
            各パートのトレーナーにNHK交響楽団の諸先生方をお迎えし、熱のこもったご指導を頂いております。
            主な活動としては年2回の定期演奏会を中心に、12月のオール青山メサイア公演、学位授与式での演奏、青山祭への参加、各種依頼演奏があります。また、毎年6月には部内アンサンブル大会を開いており、フル編成のみならずアンサンブルを楽しむ機会もあります。最近は遠ざかってはいますが、海外演奏旅行やオーケストラ大会への参加も過去に行っています。
          </p>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="@/assets/images/regular-concert.jpeg" />
      <div class="card-info">
        <div class="card-head">
          <h1 class="about-head">Regular Concert</h1>
        </div>
        <div class="card-desc">
          <p>
            年2回、5月と11月頃に開催する当楽団の最大の行事です。会場は都内もしくは近郊のホールを利用させていただき、毎回多くのお客様にご来場いただいております。この数年では東京オペラシティ、ミューザ川崎、横浜みなとみらいホール、文京シビック大ホールなどで演奏会を行いました。演奏会終了後はレセプションが行われ、演奏会と同じくとても盛り上がります。
            1954年の第1回定期演奏会を皮切りに演奏会は100回以上を数え、これもひとえに皆様の支えがあってのことと思います。
          </p>
        </div>
      </div>
    </div>

    <div class="card">
      <img
        src="https://pbs.twimg.com/media/EMXKBNqU0AAeI4t?format=jpg&name=large"
      />
      <div class="card-info">
        <div class="card-head">
          <h1 class="about-head">All Aoyama Messiah Concert</h1>
        </div>
        <div class="card-desc">
          <p>
            オール青山メサイア公演は、毎年12月に青山学院のクリスマスの行事として1976年から行われています。普段は別々に活動している学内7つの音楽団体（合唱６、管弦楽１）が一堂に集まり、G.F.ヘンデル作曲のオラトリオ「メサイア」を演奏します。オーケストラでは4年生が中心となって取り組んでおり、現役最後の演奏会となります。他団体との交流により、管弦楽のみとはまた違った魅力のある演奏会です。
          </p>
        </div>
      </div>
    </div>

    <div class="card">
      <img src="@/assets/images/agu_fes.jpeg" />
      <div class="card-info">
        <div class="card-head">
          <h1 class="about-head">Aoyama Festival</h1>
        </div>
        <div class="card-desc">
          <p>
            毎年11月に青山キャンパスで行われる「青山祭」に青山学院管弦楽団も参加しています。毎年音楽喫茶を開催しており、ケーキとドリンクをオーケストラの生演奏を聴きながら共に楽しめるということで、ご好評をいただいております。フル編成のオーケストラではクラシック音楽のみならず、ディズニーやジブリなど誰もが耳にしたことのある曲も演奏しています。また、オーケストラのみならず小編成のアンサンブル発表も行っています。
          </p>
        </div>
      </div>
    </div>
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
.about-head {
  font-weight: 400;
  font-size: 2em;
}
.card img {
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}
.card-info {
  padding: 20px;
  margin: 20px;
  p {
    line-height: 1.7;
  }
}

.card-head {
  padding: 10px 32px;
}
@media (min-width: 970px) {
  .card img {
    height: 600px;
  }
  .card-desc {
    width: 50%;
  }
}
</style>
