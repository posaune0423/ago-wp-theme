<template>
  <button
    class="menu-trigger"
    :class="{ 'menu-trigger active': isActive }"
    @click="isActive = !isActive"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 40px;
  height: 14px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 50%;
  height: 2px;
  background-color: rgb(0, 0, 0);
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 6px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger.active span:nth-of-type(1) {
  transform: translateY(6px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  transform: translateY(-6px) rotate(45deg);
}
</style>
