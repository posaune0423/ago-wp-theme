<template>
  <header class="Header">
    <nav class="Header__Nav">
      <div class="Header__Logo">
        <router-link to="/">
          <img src="@/assets/images/logo.jpg" alt="ロゴ画像" />
        </router-link>
      </div>
      <ul>
        <li><router-link to="/about/">ABOUT</router-link></li>
        <li><router-link to="/news/">NEWS</router-link></li>
        <li><router-link to="/concerts/">CONCERTS</router-link></li>
        <li><router-link to="/instructors/">INSTRUCTORS</router-link></li>
        <li><router-link to="/contact/">CONTACT</router-link></li>
        <li><router-link to="/search/">SEARCH</router-link></li>
      </ul>
      <span class="Header__Menu">
        <router-link to="/search/" class="Header__Menu__SearchIcon">
          <v-icon color="black">mdi-magnify</v-icon>
        </router-link>
        <menu-button />
      </span>
    </nav>

    <mobile-menu />
  </header>
</template>

<script>
import MobileMenu from '@/components/MobileMenu';
import MenuButton from '@/components/molecules/MenuButton';

export default {
  name: 'TheHeader',
  components: {
    MobileMenu,
    MenuButton
  },
  computed: {
    isActive() {
      return this.$store.getters['menu/getIsActive'];
    }
  }
};
</script>

<style lang="scss" scoped>
.Header__Nav {
  top: 0;
  background: #fff;
  width: 100%;
  position: fixed;
  margin: 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0 0;
  box-sizing: border-box;
  z-index: 1;

  a {
    color: #343434;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    margin: 0;
  }
  li {
    a {
      padding-left: 16px;
      padding-right: 32px;
      &:hover {
        text-decoration: none;
        opacity: 0.7;
      }
    }
  }

  @include pc-screen() {
    height: $h_header;
  }
  @include sp-screen() {
    padding: 0;
    height: $h_header_sp;
    ul {
      display: none;
    }
  }
}

.Header__Logo {
  display: flex;
  align-items: center;
  transition: 0.4s;
  color: white;
  background: #fff;

  a {
    padding-left: 16px;
    padding-right: 32px;
  }

  @include pc-screen() {
    padding: 0 32px;
    img {
      height: 52px;
    }
  }
  @include sp-screen() {
    padding-right: 0;
    img {
      height: 40px;
    }
  }
}

.Header__Menu {
  height: 100%;
  line-height: 1;
  font-size: 28px;
  color: #343434;
  align-items: center;
  z-index: 3;
  a {
    color: #454545;
  }
  @include pc-screen() {
    display: none;
  }

  @include sp-screen() {
    display: flex;
  }
}

.Header__Menu__SearchIcon {
  margin-right: 1.4rem;
}
</style>
