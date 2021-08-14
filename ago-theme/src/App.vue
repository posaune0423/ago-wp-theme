<template>
  <div>
    <v-app>
      <the-header />
      <v-main>
        <router-view></router-view>
      </v-main>
      <the-footer />
    </v-app>
  </div>
</template>

<script>
import TheHeader from '@/components/Header';
import TheFooter from '@/components/Footer';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
