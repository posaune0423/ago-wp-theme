<template>
  <div>
    <div class="concertList__container">
      <concert-card
        v-for="concert in concerts"
        :key="concert.id"
        :concert="concert"
      />
    </div>
    <pager :next="next" :prev="prev" />
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
  methods: {
    getConcerts(page = 1) {
      this.$axios.get(`wp/v2/concerts?per_page=3&page=${page}`).then((res) => {
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
  created() {
    this.getConcerts(this.$route.query.page || 1);
  },
  watch: {
    $route: function() {
      this.getConcerts(this.$route.query.page || 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.concertList__container {
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
}
</style>
