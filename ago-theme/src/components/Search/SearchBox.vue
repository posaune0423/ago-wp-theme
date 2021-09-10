<template>
  <v-text-field
    solo
    label="Search Post..."
    @keypress.enter="search"
    v-model="searchQuery"
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
