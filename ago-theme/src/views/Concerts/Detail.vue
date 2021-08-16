<template>
  <article>
    <lower-header title="CONCERTS" subtitle="演奏会情報" />
    <div class="ConcertsDetail">
      <v-skeleton-loader
        v-if="!concert.title"
        class="mx-auto my-2"
        width="600"
        height="1rem"
        type="heading"
      ></v-skeleton-loader>
      <bread-list
        v-if="concert.title"
        :title="concert.title.rendered"
        parent="Concerts"
      />
      <div class="ConcertsDetail__Inner">
        <v-skeleton-loader
          v-if="!concert.title"
          class="mx-auto my-2"
          width="600"
          height="1.5rem"
          type="heading"
        ></v-skeleton-loader>
        <h1 v-else class="my-2 ConcertsDetail__Title">
          {{ concert.title.rendered }}
        </h1>
        <div class="my-2 gray--text ConcertsDetail__Date">
          {{ concert.date }}
        </div>
        <v-skeleton-loader
          v-if="!concert.featured_image"
          class="mx-auto"
          width="360"
          height="460"
          type="image"
        ></v-skeleton-loader>
        <div v-else class="ConcertsDetail__Image">
          <v-img
            :src="concert.featured_image.src"
            :lazy-src="concert.featured_image.src"
            alt="演奏会画像"
          />
        </div>
        <post-content
          v-if="concert.content"
          :content="concert.content.rendered"
        />
      </div>
    </div>
  </article>
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
.ConcertsDetail {
  background-color: $c_gray-light;
  padding: 2rem 0;

  &__Inner {
    background-color: $c_gray-light;
    @include pc-screen() {
      width: 50%;
      margin: 0 auto;
    }
  }
  &__Title {
    @include pc-screen() {
      font-size: 2rem;
    }
    @include sp-screen() {
      font-size: 1.5rem;
    }
    padding: 1rem;
    color: $c_black;
  }
  &__Date {
    @include sp-screen() {
      padding: 1rem;
    }
    text-align: right;
  }
  &__Image {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    @include sp-screen() {
      width: 94%;
      max-width: 94%;
    }
    @include pc-screen() {
      width: 70%;
    }
  }
}
</style>
