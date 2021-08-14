<template>
  <footer>
    <div id="left-footer">
      <h3>Quick link</h3>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about/">About</router-link></li>
        <li><router-link to="/instructors/">Instructors</router-link></li>
        <li><router-link to="/concerts/">Concerts</router-link></li>
        <li>
          <a href="https://agonew2019.wixsite.com/2020-ago-new">Welcome</a>
        </li>
        <li><router-link to="/contact/">Contact</router-link></li>
      </ul>
    </div>
    <div id="right-footer">
      <h3>Follow us on</h3>
      <div id="social-media-footer">
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
footer {
  background-color: #eceae6;
  padding: 8px;
  color: #454545;
  display: flex;
  a {
    color: #454545 !important;
    font-weight: 700;
    text-decoration: none;
  }
  h3 {
    color: #454545;
    margin-top: 18px;
    margin-bottom: 18px;
    font-size: 1.17em;
    font-weight: normal;
  }
}

#left-footer {
  flex: 1;
  border-left: 32px;
  padding-left: 80px;
  ul {
    padding: 0;
    list-style: none;
    line-height: 1.5;
  }
}
#right-footer {
  flex: 2;
  padding: 8px;
  text-align: center;
}
#social-media-footer {
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

@media (min-width: 719) {
  #left-footer {
    flex: 1;
    border-right: 0;
    padding-left: 0;
    margin-left: 80;
  }
}
@media (max-width: 719px) {
  footer {
    flex-direction: column;
    text-align: center;
  }
  #left-footer {
    flex: 1;
    border-right: 0;
    padding-left: 0;
    margin-left: 0;
  }
  #right-footer {
    background: #eee;
    a {
      color: black;
    }
  }
  #social-media-footer {
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
