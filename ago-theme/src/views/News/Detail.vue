<template>
  <article>
    <lower-header title="NEWS" subtitle="お知らせ" />
    <div class="NewsDetail">
      <v-skeleton-loader
        v-if="!post.title"
        class="mx-auto my-2"
        width="400"
        height="1rem"
        type="heading"
      ></v-skeleton-loader>
      <bread-list v-else :title="post.title.rendered" />
      <div class="NewsDetail__Inner">
        <v-skeleton-loader
          v-if="!post.title"
          class="mx-auto my-2"
          width="600"
          height="1.5rem"
          type="heading"
        ></v-skeleton-loader>
        <h1 v-else class="my-2 NewsDetail__Title">
          {{ post.title.rendered }}
        </h1>
        <div class="my-2 NewsDetail__Date">{{ post.date }}</div>
        <div class="my-3 NewsDetail__Category">
          <v-chip
            v-for="(name, i) in post.category_name"
            :key="i"
            small
            class="mx-2"
          >
            {{ name }}
          </v-chip>
        </div>
        <v-skeleton-loader
          v-if="!post.featured_image"
          class="mx-auto"
          width="94%"
          type="image"
        ></v-skeleton-loader>
        <div v-else class="NewsDetail__Image">
          <v-img :src="post.featured_image.src" alt="おしらせ画像" />
        </div>
        <post-content
          v-if="post.content"
          class="mt-3"
          :content="post.content.rendered"
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
  name: 'NewsDetail',
  components: { PostContent, BreadList, LowerHeader },
  data() {
    return {
      post: {}
    };
  },
  methods: {
    async getPost() {
      this.$axios.get(`wp/v2/posts/${this.$route.params.id}`).then((res) => {
        this.post = res.data;
      });
    }
  },
  mounted() {
    this.getPost();
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'NEWS'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.NewsDetail {
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
    text-align: right;
    color: $c_black-light;
    padding-right: 1rem;
  }

  &__Category {
    padding: 0.7rem;
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
