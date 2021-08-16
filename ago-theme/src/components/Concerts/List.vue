<template>
  <div>
    <div class="ConcertList__Container">
      <v-skeleton-loader
        v-for="i in 6"
        v-show="loading"
        :key="i"
        class="mx-auto"
        width="344"
        type="card"
      ></v-skeleton-loader>
      <concert-card
        v-for="concert in concerts"
        v-show="!loading"
        :key="concert.id"
        :concert="concert"
      />
    </div>
    <pager :next="next" :prev="prev" parent="concerts" />
  </div>
</template>

<script>
import ConcertCard from '@/components/Concerts/Card';
import Pager from '@/components/molecules/Pager';

export default {
  name: 'ConcertList',
  components: {
    ConcertCard,
    Pager
  },
  data() {
    return {
      concerts: [],
      current: this.$route.query.page || 1,
      prev: null,
      next: null,
      total: null
    };
  },
  computed: {
    loading() {
      return this.$store.getters['loader/loading'];
    }
  },
  methods: {
    getConcerts(page = 1, limit = 1) {
      this.$axios
        .get(`wp/v2/concerts?per_page=${limit}&page=${page}`)
        .then((res) => {
          this.current = page;
          this.concerts = res.data;
          this.makePagination(res);
        });
    },
    makePagination(data) {
      this.total = data.headers['x-wp-totalpages'];
      //set up prev page
      if (this.current > 1) {
        this.prev = parseInt(this.current) - 1;
      } else {
        this.prev = null;
      }
      //set up next page
      if (this.current != this.total) {
        this.next = parseInt(this.current) + 1;
      } else {
        this.next = null;
      }
    }
  },
  mounted() {
    this.$store
      .dispatch('loader/startLoad')
      .then(() => this.getConcerts(this.$route.query.page || 1))
      .then(() => this.$store.dispatch('loader/endLoad'));
  },
  watch: {
    $route: function() {
      this.$store
        .dispatch('loader/startLoad')
        .then(() => this.getConcerts(this.$route.query.page || 1))
        .then(() => this.$store.dispatch('loader/endLoad'));
    }
  }
};
</script>

<style lang="scss" scoped>
.ConcertList__Container {
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
}
</style>
