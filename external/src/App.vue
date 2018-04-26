<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/>-->
    <components :is="currentView"></components>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import IndexHome from './components/IndexHome'
import Ocookie from './mixins/oCookies'

export default {
  name: 'App',
  mixins: [ Ocookie ],
  data () {
    return {
      currentView: 'IndexHome'
    }
  },
  components: {
    HelloWorld: HelloWorld,
    IndexHome: IndexHome
  },
  created () {
    let _this = this
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
