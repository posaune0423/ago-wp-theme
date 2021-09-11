<template>
  <v-text-field
    v-model="searchQuery"
    class="SearchBox"
    solo
    label="キーワードを入力..."
    type="search"
    @keypress.enter="search"
  >
    <template v-slot:append>
      <v-icon @click="search">
        mdi-magnify
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      if (this.searchQuery.replace(/ |　/g, '')) {
        this.$router.push(`/search?q=${this.searchQuery}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.SearchBox {
  width: 80%;
  margin: 0 auto;
}
</style>
