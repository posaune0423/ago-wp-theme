<template>
  <div>
    <lower-header title="CONCERTS" subtitle="演奏会情報" />
    <div class="concertDetail__container">
      <bread-list
        v-if="concert.title"
        :title="concert.title.rendered"
        parent="Concerts"
      />
      <div class="concertDetail__wrap">
        <h1 v-if="concert.title" class="my-2 concertTitle">
          {{ concert.title.rendered }}
        </h1>
        <div class="my-2 gray--text concertDate">{{ concert.date }}</div>
        <div v-if="concert.featured_image" class="d-flex justify-center">
          <v-img :src="concert.featured_image.src" max-width="400" />
        </div>
        <post-content
          v-if="concert.content"
          :content="concert.content.rendered"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostContent from '@/components/News/Content';
import BreadList from '@/components/News/BreadList';
import LowerHeader from '@/components/molecules/LowerHeader';

export default {
  name: 'ConcertDetail',
  components: { PostContent, LowerHeader, BreadList },
  data() {
    return {
      concert: {}
    };
  },
  methods: {
    getConcert() {
      this.$axios.get(`wp/v2/concerts/${this.$route.params.id}`).then((res) => {
        this.concert = res.data;
      });
    }
  },
  created() {
    this.getConcert();
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'CONCERTS'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.concertDetail__container {
  background-color: $c_gray-light;
  @include pc-screen() {
    padding: 2rem 0;
  }
  @include sp-screen() {
    padding: 1rem 0;
  }
}
.concertDetail__wrap {
  background-color: $c_gray-light;
  @include pc-screen() {
    width: 50%;
    margin: 0 auto;
  }
}

.concertTitle {
  color: $c_black;
  @include sp-screen() {
    font-size: 1.5rem;
    padding: 1rem;
  }
}

.concertDate {
  @include sp-screen() {
    padding: 1rem;
  }
  text-align: right;
}
</style>
