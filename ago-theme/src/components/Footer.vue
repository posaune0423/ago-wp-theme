<template>
  <footer class="Footer">
    <div class="Footer__left">
      <h3>Quick link</h3>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about/">ABOUT</router-link></li>
        <li><router-link to="/news/">NEWS</router-link></li>
        <li><router-link to="/instructors/">INSTRUCTORS</router-link></li>
        <li><router-link to="/concerts/">CONCERTS</router-link></li>
        <li>
          <a href="https://agonew2019.wixsite.com/2020-ago-new">WELCOME</a>
        </li>
        <li><router-link to="/contact/">CONTACT</router-link></li>
      </ul>
    </div>
    <div class="Footer__right">
      <h3>Follow us on</h3>
      <div class="Footer__sns">
        <ul>
          <li>
            <a href="https://www.facebook.com/aoyamagakuinorchestra/">
              <v-icon>mdi-facebook</v-icon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aoyamaorchestra">
              <v-icon>mdi-twitter</v-icon>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC6_-dbI_cSZbOf95QjBuaLg">
              <v-icon>mdi-youtube</v-icon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aoyamaorchestra/?hl=ja">
              <v-icon>mdi-instagram</v-icon>
            </a>
          </li>
        </ul>
        <p>
          All rights reserved by AGO
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
};
</script>

<style lang="scss">
.Footer {
  background-color: #eceae6;
  padding: 2rem;
  color: $c_black-light;
  display: flex;
  a {
    color: $c_black-light !important;
    font-weight: 700;
    text-decoration: none;
  }
  h3 {
    color: $c_black-light;
    margin-top: 18px;
    margin-bottom: 18px;
    font-size: 1.17em;
    font-weight: normal;
  }
}

.Footer__left {
  flex: 1;
  border-left: 32px;
  padding-left: 80px;
  ul {
    padding: 0;
    list-style: none;
    line-height: 1.5;
    li {
      margin: 1rem auto;
    }
  }
}
.Footer__right {
  flex: 2;
  padding: 8px;
  text-align: center;
}
.Footer__sns {
  a {
    .fa-facebook,
    .fa-twitter,
    .fa-github {
      color: black;
      transition: 0.4s;
    }
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
    li {
      font-size: 32px;
      padding: 16px;
      transition: 0.4s;
    }
  }
}

@include pc-screen() {
  .Footer__left {
    flex: 1;
    border-right: 0;
    padding-left: 0;
    margin-left: 80;
  }
}
@include sp-screen() {
  footer {
    flex-direction: column;
    text-align: center;
  }
  .Footer__left {
    flex: 1;
    border-right: 0;
    padding-left: 0;
    margin-left: 0;
  }
  .Footer__right {
    background: #eee;
    a {
      color: black;
    }
  }
  .Footer__sns {
    a {
      .fa-facebook,
      .fa-twitter,
      .fa-github {
        color: black;
        transition: 0.4s;
      }
    }
  }
}
</style>
