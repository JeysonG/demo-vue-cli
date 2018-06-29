<template lang="pug">
  #google_translate_element
</template>

<script>

export default {
  name: 'google_translate_element',

  mounted () {
    this.googleTranslateElementInit()
  },

  methods: {
    googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      // script(type='text/javascript', src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
    }
  }
}
</script>

<style lang="stylus">

</style>
