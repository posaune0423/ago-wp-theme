<template>
  <nav class="Mobile__Menu" :class="{ active: isActive }">
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about/">ABOUT</router-link></li>
      <li><router-link to="/news/">NEWS</router-link></li>
      <li><router-link to="/concerts/">CONCERTS</router-link></li>
      <li><router-link to="/instructors/">INSTRUCTORS</router-link></li>
      <li><router-link to="/contact/">CONTACT</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MobileMenu',
  computed: {
    isActive() {
      return this.$store.getters['menu/getIsActive'];
    }
  }
};
</script>

<style scoped lang="scss">
.Mobile__Menu {
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

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1.7rem;
    color: #757575;
    text-decoration: none;
  }
  ul {
    margin-bottom: $h_header_sp;
    list-style: none;
    padding-left: 0;
    padding-top: 2rem;
    li {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
}

.active {
  pointer-events: auto !important;
  opacity: 1 !important;
  transition: opacity 0.225s;
  overflow-y: hidden;
}
</style>
