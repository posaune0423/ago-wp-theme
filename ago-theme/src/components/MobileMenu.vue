<template>
  <div id="mobile_menu" :class="{ active: getIsActive }">
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about/">ABOUT</router-link></li>
      <li><router-link to="/news/">NEWS</router-link></li>
      <li><router-link to="/concerts/">CONCERTS</router-link></li>
      <li><router-link to="/instructors/">INSTRUCTORS</router-link></li>
      <li>
        <a href="https://agonew2019.wixsite.com/2020-ago-new">WELCOME</a>
      </li>
      <li><router-link to="/contact/">CONTACT</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MobileMenu',
  computed: {
    ...mapGetters('menu', ['getIsActive'])
  }
};
</script>

<style scoped lang="scss">
#mobile_menu {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: #fff;
  width: 100%;
  height: calc(100% - #{$h_header_sp});
  text-align: center;
  opacity: 0;
  overflow-y: auto;
  backface-visibility: hidden;
  pointer-events: none;
  transition: opacity 0.225s;

  a {
    font-size: 1.3rem;
    color: #757575;
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding-left: 0;
    padding-top: 6rem;
    li {
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
      height: 57px;
    }
  }
}

.active {
  pointer-events: auto !important;
  opacity: 1 !important;
  transition: opacity 0.225s;
}
</style>
