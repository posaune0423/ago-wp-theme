<template>
  <div class="Contact">
    <lower-header title="CONTACT" subtitle="お問い合わせ" />
    <contact-form />
  </div>
</template>

<script>
import LowerHeader from '@/components/molecules/LowerHeader';
import ContactForm from '@/components/Contact/Form';

export default {
  name: 'ContactPage',
  components: {
    LowerHeader,
    ContactForm
  },
  head: {
    title: function() {
      return {
        inner: '青山学院管弦楽団',
        separator: '|',
        complement: 'CONTACT'
      };
    }
  }
};
</script>
