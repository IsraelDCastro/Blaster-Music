<template lang="pug">
  #app.container
    img(src='https://israeldcastro.github.io/Blaster-Music/dist/logo.png')
    h1 BlasterMusic
    .form-group.row.justify-content-md-center
      select.form-control.col-4(v-model="selectCountry")
        option(v-for="country in countries" v-bind:value="country.value") {{ country.name}}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" :key="artist.mbid")
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {

    return {
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina'},
        { name: 'Colombia', value: 'colombia'},
        { name: 'España', value: 'spain'}
      ],
      selectCountry: 'argentina',
      loading: '',
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists (){
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectCountry)
        .then( function (artists) {
          self.loading = false
          self.artists = artists
        })
    }
  },
  mounted (){

  },
  watch: {
    selectCountry (){
    return  this.refreshArtists()
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
