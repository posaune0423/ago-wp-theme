<template>
  <button
    class="MenuButton"
    :class="{ 'MenuButton active': isActive }"
    @click="toggleMenu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'MenuButton',
  computed: {
    isActive() {
      return this.$store.getters['menu/getIsActive'];
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('menu/toggleMenu');
    }
  }
};
</script>

<style lang="scss" scoped>
.MenuButton {
  position: relative;
  width: 40px;
  height: 14px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
  span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 6px;
    }
    &:nth-of-type(3) {
      bottom: 0;
    }
  }
}

.active {
  span:nth-of-type(1) {
    transform: translateY(6px) rotate(-45deg);
  }
  span:nth-of-type(2) {
    opacity: 0;
  }
  span:nth-of-type(3) {
    transform: translateY(-6px) rotate(45deg);
  }
}
</style>
