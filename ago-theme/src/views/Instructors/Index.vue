<template>
  <div class="Instructors">
    <lower-header title="INSTRUCTORS" subtitle="講師陣" />

    <div class="Instructors__Container">
      <instructor-card
        v-for="(instructor, i) in instructors"
        :key="i"
        class="my-6"
        :person="instructor"
      />
    </div>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import InstructorCard from '@/components/Instructors/Card';

export default {
  name: 'InstructorsListPage',
  components: {
    LowerHeader,
    InstructorCard
  },
  data() {
    return {
      instructors: [
        {
          name: '田渕 彰 (タブチ アキラ)',
          belonging: 'NHK交響楽団団友',
          image: '/wp-content/themes/ago-theme/static/instructors/tabuchi.png',
          part: 'Violine',
          description:
            '芸大付属高校を経て芸大音楽学部を卒業。同時にＮＨＫ交響楽団に入団し、３８年間Ｎ響のステージを務めるとともに、Ｎ響室内合奏団などでも活動してきた。またライブラリアンも２０数年にわたり兼務し、主として弦楽器の楽譜の整備に尽力してきた。　\
            ２００６年より２０１７年まで洗足学園音楽大学で後進の指導にも当たってきた。青山学院管弦楽団、早稲田大学交響楽団の指導にも永年にわたり携わっている。現在洗足学園音楽大学名誉教授、日本弦楽指導者協会会員',
          position: 'top',
          visible: false
        },
        {
          name: '井野邊 大輔（いのべ だいすけ）',
          belonging: 'NHK交響楽団',
          image: '/wp-content/themes/ago-theme/static/instructors/inobe.jpg',
          part: 'Viola',
          description:
            '1991～2013年　NHK交響楽団在籍。第68回日本音楽コンクール作曲部門　委員会特別賞受賞。霧島国際音楽祭等数々の音楽祭やベルリンフィルハーモニー管弦楽団演奏会、ロンドンフィル及びBBC響メンバーによるツアーなどに参加。東京都響、兵庫PAC管、九州響の客演首席奏者やソリストとしても活躍。現在、仙台フィルハーモニー管弦楽団　ソロ主席、大阪フィルハーモニー交響楽団 特別契約首席奏者を兼任する。洗足学園大学及び大学院講師。桐朋オーケストラ・アカデミー講師。',
          visible: false,
          position: 'top'
        },
        {
          name: '丹羽 経彦(ニワ ツネヒコ)',
          belonging: 'NHK交響楽団団友',
          image: '/wp-content/themes/ago-theme/static/instructors/niwa.jpg',
          part: 'Violoncello',
          description:
            '1958年大阪音楽大学附属高等学校入学。1962年大阪音楽大学入学。\
            1965年桐朋音楽学園大学音楽部入学。\
            1970年読売交響楽団、1976年NHK交響楽団入団。\
            2003年同楽団定年退職。伊達三郎、斉藤秀雄両氏に師事。',
          visible: false,
          position: 'top'
        },
        {
          name: '西山 真二 (ニシヤマ シンジ)',
          belonging: 'NHK交響楽団',
          image:
            '/wp-content/themes/ago-theme/static/instructors/nishiyama.png',
          part: 'Contrabass',
          description:
            '東京藝術大学附属音楽高等学校を経て、東京藝術大学器楽科を2001年卒業。学内にて安宅賞、アカンサス音楽賞受賞。第9回宝塚ベガ音楽コンクール弦楽器部門第3位。これまでに、永島義男、西田直文、石川滋、マシュー・マクドナルドの各氏に師事。現在、NHK交響楽団首席代行奏者。日本大学芸術学部非常勤講師。',
          visible: false,
          position: 'top'
        },
        {
          name: '細川 順三 (ホソカワ ジュンゾウ)',
          belonging: 'NHK交響楽団団友',
          image: '/wp-content/themes/ago-theme/static/instructors/hosokawa.png',
          part: 'Flute',
          description:
            '東京藝術大学卒業。スイス・バーゼル市立音楽院留学。 第40回日本音楽コンクール第2位入賞。ジュネーブ国際音楽コンクール入賞。 札幌交響楽団に13年間、NHK 交響楽団に22年間在籍。 ソロ、室内楽の活動の他、東京藝大、東京音大、フェリス女学院大などで後進の指導 にも当たった。',
          visible: false
        },
        {
          name: '北島 章 (キタジマ アキラ)',
          belonging: 'NHK交響楽団団友',
          image: '/wp-content/themes/ago-theme/static/instructors/kitajima.jpg',
          part: 'Oboe',
          description:
            '1973年武蔵野音楽大学器楽科卒業。同年、旧西ドイツ、北西ドイツ音楽アカデミーに入学し、ヘルムート・ヴィンシャーマン氏に学ぶ。 \
          その後、ケルン国立音楽大学に移り、1976年北西ドイツ・フィルハーモニー交響楽団に入団。 \
          1980年に東京・金沢でリサイタルを開催。\
          1982年に帰国しNHK交響楽団に入団。2010年12月退団。',
          visible: false
        },
        {
          name: '加藤 明久 (カトウ アキヒサ)',
          belonging: 'NHK交響楽団',
          image: '/wp-content/themes/ago-theme/static/instructors/katoh.png',
          part: 'Clarinet',
          description:
            '国立音楽大学卒業、矢田部賞受賞。第16回民音室内楽コンクール第1位。 第1回及び第2回日本クラリネットコンクール入賞。 第35回ミュンヘン国際コンクール木管五重奏ファイナリスト。 1990年NHK交響楽団入団。東京クラリネットアンサンブル団員。2019年NHK交響楽団を退団し、昭和音楽大学教授及び、武蔵音楽大学非常勤講師。',
          visible: false
        },
        {
          name: '霧生 吉秀(キリュウ ヨシヒデ)',
          belonging: 'NHK交響楽団団友',
          image: '/wp-content/themes/ago-theme/static/instructors/kiryu.png',
          part: 'Fagotto',
          description:
            '1940年生まれ。東京藝術大学、同大学院を卒業。1965年、第34回NHK毎日音楽コンクール(日本音楽コンクール)管楽器部門第1位入賞。\
          ジュリアード音楽院に留学。1968年、帰国後NHK交響楽団に入団。\
          2000年8月15日、NHK交響楽団退団。1990年、第10回有馬賞受賞。',
          visible: false
        },
        {
          name: '阿部 麿(アベ マロ)',
          image: '/wp-content/themes/ago-theme/static/instructors/abe2.png',
          part: 'Horn',
          description:
            '1996年、国立音楽大学器楽科卒業。97年、第14回日本管打楽器コンクール第2位入賞。\
            98年、桐朋学園大学研究科修了。02年、第71回日本音楽コンクール第1位。\
            これまでに東京交響楽団と共演する他、2000年よりサイトウ・キネンオーケストラメンバーに。\
            これまでに安原正幸、山岸博、猶井正幸、水野信行に師事。現在国立音楽大学講師。',
          visible: false
        },
        {
          name: '北村 源三 (キタムラ ゲンゾウ)',
          belonging: 'NHK交響楽団団友',
          image: '/wp-content/themes/ago-theme/static/instructors/kitamura.png',
          part: 'Trumpet',
          description:
            '1937年生まれ。東京藝術大学卒業と同時にNHK交響楽団に入団。\
            1962年、NHK交響楽団在籍のままウィーン・アカデミーに留学。\
            1965年帰国。1991年11月、第11回有馬賞受賞。\
            1993年7月NHK交響楽団退団。国立音楽大学招聘教授、日本音楽コンクール顧問。',
          visible: false
        },
        {
          name: '奥村 晃 (オクムラ コウ)',
          belonging: '新日本フィルハーモニー交響楽団',
          image: '/wp-content/themes/ago-theme/static/instructors/okumura.png',
          part: 'Trombone',
          description:
            '1991年、東京芸術大学に入学。伊藤清氏に師事。第８回日本管打楽器コンクールに入選。 1995年、東京藝術大学卒業。翌年、(財)新日本フィルハーモニー交響楽団入団。 1997年、第14回 日本管打楽器コンクール第1位及び文部大臣賞、東京都知事賞を受賞。 エマーノンブラスクインテット、ローブラスカルテット『bottom’s bells』各メンバー。尚美ミュージックカレッジ専門学校講師。',
          visible: false
        },
        {
          name: '百瀬 和紀(モモセ カズノリ)',
          belonging: 'NHK交響楽団団友',
          image: '/wp-content/themes/ago-theme/static/instructors/momose.png',
          part: 'Percussion',
          description:
            '長野県松本市生まれ。1965年東京藝術大学卒業。同年NHK交響楽団入団。\
            2001年9月退団まで 36年間首席ティンパニ奏者として活躍。\
            第17回有馬賞受賞。東京パーカッションクラブ主宰。\
            元国立音楽大学教授。日本打楽器協会理事長、日本管打・吹奏楽学会理事、NHK交響楽団団友。',
          visible: false
        }
      ]
    };
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'INSTRUCTORS'
      };
    }
  }
};
</script>

<style scoped lang="scss">
.Instructors__Container {
  background-color: $c_gray-light;
  @include pc-screen() {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 3rem;
  }
  @include sp-screen() {
    padding: 2rem 1rem;
  }
}
</style>
