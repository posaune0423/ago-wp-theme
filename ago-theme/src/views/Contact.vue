<template>
  <div>
    <h1 class="section-heading">Contact Us</h1>
    <div class="container">
      <form id="form1" class="wpcf7-form" method="post">
        <div style="display: none">
          <input type="hidden" name="_wpcf7" value="849" />
          <input type="hidden" name="_wpcf7_version" value="5.1.7" />
          <input type="hidden" name="_wpcf7_locale" value="en_US" />
          <input
            type="hidden"
            name="_wpcf7_unit_tag"
            value="wpcf7-f849-p152-o1"
          />
          <input type="hidden" name="_wpcf7_container_post" value="152" />
        </div>
        <p>
          <label>
            Your Name (required)<br />
            <span class="wpcf7-form-control-wrap your_name">
              <input
                v-model="form.your_name"
                type="text"
                name="your_name"
                size="40"
                class="
                  wpcf7-form-control wpcf7-text wpcf7-validates-as-required
                "
              />
            </span>
          </label>
        </p>
        <p>
          <label>
            Your Email (required)<br />
            <span class="wpcf7-form-control-wrap your_email">
              <input
                v-model="form.your_email"
                type="email"
                name="your_email"
                size="40"
                class="
                  wpcf7-form-control
                  wpcf7-text
                  wpcf7-email
                  wpcf7-validates-as-required
                  wpcf7-validates-as-email
                "
              />
            </span>
          </label>
        </p>
        <p>
          <label>
            Subject<br />
            <span class="wpcf7-form-control-wrap your_subject">
              <input
                v-model="form.your_subject"
                type="text"
                name="your_subject"
                size="40"
                class="wpcf7-form-control wpcf7-text"
              />
            </span>
          </label>
        </p>
        <p>
          <label>
            Your Message<br />
            <span class="wpcf7-form-control-wrap your_message">
              <textarea
                v-model="form.your_message"
                name="your_message"
                cols="40"
                rows="10"
                class="wpcf7-form-control wpcf7-textarea"
              ></textarea>
            </span>
          </label>
        </p>
        <p>
          <button
            type="button"
            style="margin-top: 20px"
            @click.prevent="submitForm()"
          >
            Send
          </button>
        </p>
        <div class="wpcf7-response-output wpcf7-display-none"></div>
      </form>
      <div class="message" style="text-align: center">
        <p v-if="errors.length" class="error-ms">
          {{ errors }}
        </p>
        <p v-if="success.length" class="success-ms">
          {{ success }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Contact',
  mounted() {
    console.log('mounted');
  },
  data() {
    return {
      url: '/wp-json/contact-form-7/v1/contact-forms/5/feedback',
      form: {
        your_name: '',
        your_email: '',
        your_subject: '',
        your_message: ''
      },
      errors: '',
      success: ''
    };
  },
  methods: {
    submitForm() {
      let formData = new FormData(document.forms.form1);
      axios
        .post(this.url, formData)
        .then((response) => {
          if (response.data.status !== 'mail_sent') {
            this.errors = '';
            this.errors = response.data.message;
          } else {
            this.errors = '';
            this.success = response.data.message;
          }
        })
        .catch((error) => {
          console.log(error);
          this.errors = error;
        });
    }
  }
};
</script>

<style>
.container {
  padding: 20px;
}
.wpcf7-form {
  margin-bottom: 30px;
}
input.wpcf7-form-control.wpcf7-text,
textarea.wpcf7-form-control.wpcf7-textarea {
  width: 90%;
  padding: 8px 15px;
  margin-right: 10px;
  margin-top: 10px;
  border: 1px solid #d0d5d8;
  border-radius: 3px;
  outline: none;
}
textarea.wpcf7-form-control.wpcf7-textarea {
  height: 200px;
}
.wpcf7-form p {
  margin-bottom: 15px;
}
/* 送信ボタンを見やすくする */
.wpcf7-form button {
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  background: #353535;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  -webkit-appearance: none;
}
.error-ms {
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
.success-ms {
  color: lightgreen;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
