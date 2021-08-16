<template>
  <footer class="Footer">
    <div class="Footer__Left">
      <h3>Quick link</h3>
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
    <div class="Footer__Right">
      <h3>Follow us on</h3>
      <div class="Footer__SNS">
        <ul>
          <li>
            <a href="https://www.facebook.com/aoyamagakuinorchestra/">
              <v-icon large>mdi-facebook</v-icon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aoyamaorchestra">
              <v-icon large>mdi-twitter</v-icon>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC6_-dbI_cSZbOf95QjBuaLg">
              <v-icon large>mdi-youtube</v-icon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aoyamaorchestra/?hl=ja">
              <v-icon large>mdi-instagram</v-icon>
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
    font-size: 1.5rem;
    font-weight: normal;
  }
  &__Left {
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
  &__Right {
    flex: 2;
    padding: 8px;
    text-align: center;
    h3 {
      margin: 1rem auto;
    }
  }
  &__SNS {
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
      padding: 2rem 0;
      li {
        font-size: 32px;
        padding: 16px;
        transition: 0.4s;
      }
    }
  }
}

@include pc-screen() {
  .Footer__Left {
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
  .Footer__Left {
    flex: 1;
    border-right: 0;
    padding-left: 0;
    margin-left: 0;
  }
  .Footer__Right {
    background-color: #eceae6;
    a {
      color: black;
    }
  }
  .Footer__SNS {
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
