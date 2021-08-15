<template>
  <div>
    <lower-header title="NEWS" subtitle="お知らせ" />
    <div class="newsDetail__container">
      <bread-list :title="post.title.rendered" />
      <div class="newsDetail__wrap">
        <h1 class="my-2 newsTitle">{{ post.title.rendered }}</h1>
        <div class="my-2 newsDate gray--text">{{ post.date }}</div>
        <div class="my-3 newsDetail__category">
          <v-chip
            v-for="(name, i) in post.category_name"
            :key="i"
            small
            class="mx-2"
          >
            {{ name }}
          </v-chip>
        </div>
        <div class="newsDetail__image">
          <v-img :src="post.featured_image.src" />
        </div>
        <post-content class="mt-3" :content="post.content.rendered" />
      </div>
    </div>
  </div>
</template>

<script>
import PostContent from '@/components/News/Content';
import BreadList from '@/components/News/BreadList';
import LowerHeader from '@/components/molecules/LowerHeader';

export default {
  name: 'PostDetail',
  components: { PostContent, BreadList, LowerHeader },
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPost() {
      this.$axios.get(`wp/v2/posts/${this.$route.params.id}`).then((res) => {
        this.post = res.data;
      });
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<style lang="scss" scoped>
.newsDetail__container {
  padding: 1rem 0;
}

.newsTitle {
  font-size: 1.5rem;
  padding: 1rem;
}

.newsDate {
  text-align: right;
  padding-right: 1rem;
}

.newsDetail__category {
  padding: 0.7rem;
}

.newsDetail__image {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @include sp-screen() {
    width: 94%;
    max-width: 94%;
  }
}

.newsDetail__container {
  background-color: $c_gray-light;
  @include pc-screen() {
    padding: 2rem 0;
  }
}
.newsDetail__wrap {
  background-color: $c_gray-light;
  @include pc-screen() {
    padding: 2rem 8rem;
  }
}
</style>
