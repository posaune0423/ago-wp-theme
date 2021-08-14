<template>
  <div>
    <slide-out-menu />

    <nav>
      <span id="menu-icon">
        <a href="#" style="text-decoration: none"> ☰ </a>
      </span>
      <div id="logo-img">
        <router-link to="/">
          <img src="@/assets/images/logo.jpg" alt="AGOLogo" />
        </router-link>
      </div>
      <ul>
        <li><router-link to="/about/">About</router-link></li>
        <li><router-link to="/concerts/">Concerts</router-link></li>
        <li><router-link to="/instructors/">Instructors</router-link></li>
        <li>
          <a href="https://agonew2019.wixsite.com/2020-ago-new">Looking for</a>
        </li>
        <li><router-link to="/contact/">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import SlideOutMenu from '@/components/SlideOutMenu.vue';
export default {
  components: {
    SlideOutMenu
  }
};
</script>

<style lang="scss" scoped>
nav {
  top: 0;
  height: 83px;
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
  box-shadow: 0 10px 10px -12px #676767;

  a {
    padding-left: 16px;
    padding-right: 32px;
    color: #111;
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
      :hover {
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
  color: #111;
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
