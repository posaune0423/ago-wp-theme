<template>
  <vue-progress-bar></vue-progress-bar>
</template>

<script>
export default {
  name: 'ProgressBar',
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.parseMeta({});
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  }
};
</script>
