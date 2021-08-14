<template>
  <div>
    <lower-header title="CONTACT" subtitle="お問い合わせ" />
    <div class="form_container">
      <form id="form1">
        <p>
          下記フォームからお問い合わせください。担当の者より折り返しご連絡させていただきます。
        </p>
        <v-text-field
          v-model="name"
          class="my-2"
          :error-messages="nameErrors"
          label="お名前 *"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          class="my-2"
          :error-messages="emailErrors"
          label="メールアドレス *"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="subject"
          class="my-2"
          :error-messages="subjectErrors"
          label="件名 *"
          required
          @input="$v.subject.$touch()"
          @blur="$v.subject.$touch()"
        ></v-text-field>
        <v-textarea
          v-model="body"
          class="my-2"
          :error-messages="bodyErrors"
          label="お問い合わせ内容 *"
          required
          @input="$v.body.$touch()"
          @blur="$v.body.$touch()"
        ></v-textarea>

        <v-btn
          block
          large
          class="mr-4"
          color="success"
          :disabled="$v.$invalid"
          @click="submit"
        >
          送信
        </v-btn>
      </form>
    </div>
    <v-snackbar v-model="snackbar.visible" :timeout="2000">
      <span :class="{ 'red--text': !snackbar.isSuccess }">
        {{ snackbar.message }}
      </span>
      <template #action="{ attrs }">
        <v-icon v-bind="attrs" @click="snackbar.visible = false"
          >mdi-close-circle</v-icon
        >
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'ContactPage',
  components: {
    LowerHeader
  },
  validations: {
    name: { required },
    email: { required, email },
    subject: { required },
    body: { required }
  },
  data: () => ({
    url: 'contact-form-7/v1/contact-forms/6/feedback',
    name: '',
    email: '',
    subject: '',
    body: '',
    snackbar: {
      visible: false,
      message: ''
    }
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push('入力してください');
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.required && errors.push('入力してください');
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.required && errors.push('入力してください');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email &&
        errors.push('正しいメールアドレスを入力してください');
      !this.$v.email.required && errors.push('入力してください');
      return errors;
    }
  },
  methods: {
    submit() {
      if (!this.$v.$invalid) {
        const formData = this.convertJsontoUrlencoded({
          your_name: this.name,
          your_email: this.email,
          your_subject: this.subject,
          your_body: this.body
        });
        this.$axios
          .post(this.url, formData)
          .then((res) => {
            if (res.data.status == 'mail_sent') {
              return this.$router.push('/thanks/');
            } else {
              this.snackbar.visible = true;
              this.snackbar.message = '入力内容に誤りがあります。';
            }
          })
          .catch((error) => {
            console.log(error);
            this.snackbar.visible = true;
            this.snackbar.message =
              '予期せぬエラーが発生しました。しばらく待ってからもう一度お試しください。';
          });
      }
    },
    convertJsontoUrlencoded(obj) {
      let str = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          str.push(
            encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
          );
        }
      }
      return str.join('&');
    }
  }
};
</script>

<style lang="scss" scoped>
.form_container {
  background-color: $c_gray-light;

  form {
    padding: 2rem;
    background-color: $c_white;
  }

  @include pc-screen() {
    padding: 2rem 14rem;
  }
  @include sp-screen() {
    padding: 2rem;
  }
}
</style>
