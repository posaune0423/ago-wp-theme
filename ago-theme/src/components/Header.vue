<template>
  <div>
    <slide-out-menu />

    <nav>
      <span id="menu-icon">
        <v-icon>mdi-menu</v-icon>
      </span>
      <div id="logo-img">
        <router-link to="/">
          <img src="@/assets/images/logo.jpg" alt="AGOLogo" />
        </router-link>
      </div>
      <ul>
        <li><router-link to="/about/">ABOUT</router-link></li>
        <li><router-link to="/concerts/">CONCERTS</router-link></li>
        <li><router-link to="/instructors/">INSTRUCTORS</router-link></li>
        <li>
          <a href="https://agonew2019.wixsite.com/2020-ago-new">WELCOME</a>
        </li>
        <li><router-link to="/contact/">CONTACT</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import SlideOutMenu from '@/components/SlideOutMenu.vue';
export default {
  name: 'TheHeader',
  components: {
    SlideOutMenu
  }
};
</script>

<style lang="scss" scoped>
nav {
  top: 0;
  height: $h_header;
  background: #fff;
  width: 100%;
  position: fixed;
  margin: 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px 0 0;
  box-sizing: border-box;
  z-index: 1;

  a {
    padding-left: 16px;
    padding-right: 32px;
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
      &:hover {
        text-decoration: none;
        opacity: 0.7;
      }
    }
  }
}

#logo-img {
  display: flex;
  background: #fff;
  padding: 0 32px;
  align-items: center;
  color: white;
  transition: 0.4s;
  img {
    height: 52px;
  }
}
/* Menu Icon */
#menu-icon {
  padding-top: 5px;
  height: 100%;
  line-height: 1;
  font-size: 28px;
  color: #343434;
  /* display: none; */
  align-items: center;
  z-index: 3;
  a {
    color: #454545;
  }
}
@media (min-width: 946px) {
  #menu-icon {
    display: none;
  }
}
@media (max-width: 946px) {
  nav {
    padding: 0;
    ul {
      display: none;
    }
  }
  #logo-img {
    padding-top: 10px;
    padding-right: 0;
    img {
      height: 40px;
    }
  }
  #menu-icon {
    display: flex;
    a {
      padding-bottom: 10px;
    }
  }
}
</style>
