<template lang="pug" src="./People.tpl.pug"></template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../store'
import router from '../../router'
Vue.use(Vuex)

export default {
  name: 'People',
  router: router,
  data () {
    return {
      slug: this.$route.params.slug,
      person: null
    }
  },
  methods: {
    getPeople (i) {
      if (store.state.persons.length === 0) {
        this.$router.push('/peopleList')
      } else {
        this.person = store.state.persons[i]
      }
    }
  },
  created () {
    this.getPeople(this.$route.params.slug)
    Vue.nextTick(function () {
    // // list is rendered
    })
  }
}
</script>
<style lang='scss' src='./style.scss'></style>
