<template lang="pug">
  #app
    google_translate_element
    img(src='/assets/logo.png')
    //- img(src='https://jeysong.github.io/demo-vue-cli/dist/logo.png')
    h1 {{ msg }}

    select(v-model="selectedCountry")
      option(v-for="country in countries" v.bind:value="country.value") {{country.name}}

    spinner(v-show="loading")

    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import GoogleTranslate from './components/GoogleTranslate.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './service'
import Artist from './components/Artist.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Demo Vue-CLI',
      artists: [],
      countries: [
        {
          name: 'Colombia',
          value: 'Colombia'
        },
        {
          name: 'Argentina',
          value: 'Argentina'
        },
        {
          name: 'Brazil',
          value: 'Brazil'
        }
      ],
      selectedCountry: 'Colombia',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    resfreshArtists () {
      const self = this
      this.loading = true
      this.artists = false
      getArtists(this.selectedCountry)
      .then(function (artists) {
        self.loading = false
        self.artists = artists
      })
    }
  },
  mounted: function () {
    this.resfreshArtists()
  },
  watch: {
    selectedCountry () {
      this.resfreshArtists()
    }
  }
}
</script>

<style lang="stylus">
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

h1, h2
    font-weight normal

ul
    list-style-type none
    padding 0

li
    display inline-block
    margin 0 10px

a
    color #42b983
</style>
