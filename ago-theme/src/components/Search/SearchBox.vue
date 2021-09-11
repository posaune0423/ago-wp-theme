<template>
  <form class="SearchBox" @submit.prevent>
    <v-text-field
      v-model="searchQuery"
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
  </form>
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
        const activeElement = document.activeElement;
        if (activeElement) {
          activeElement.blur();
        }
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
