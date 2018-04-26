<template>
  <div class="welcomeWaith">
    <ul>
      <li>
        <input
          v-model="gName"
          type="text" placeholder="getName">
      </li>
      <li>
        <button
          @click.stop="getsCookie">获取cookie</button>
      </li>
    </ul>
    <ul>
      <li>
        <input
          v-model="cName"
          type="text" placeholder="setName">
      </li>
      <li>
        <input
          v-model="cValue"
          type="text" placeholder="setValue">
      </li>
      <li>
        <button
          @click.stop="saveCookie">
          设置cookie
        </button>
      </li>
    </ul>
    <ul>
      <li>
        <input
          v-model="rName"
          type="text" placeholder="removeName">
      </li>
      <li>
        <button
          @click.stop="removeCookie">移除cookie</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Ocookie from './../mixins/oCookies'
export default {
  mixins: [ Ocookie ],
  name: 'IndexHome',
  data () {
    return {
      gName: '',
      cName: '',
      cValue: '',
      rName: ''
    }
  },
  methods: {
    getsCookie () {
      let gName = this.gName
      if (gName === '') {
        console.log("获取的cookie的name不能为空")
      } else {
        console.log(this.getCookie(gName))
      }
    },
    saveCookie () {
      let cName = this.cName,
          cValue = this.cValue
      if (cName === '') {
        console.log("cookie的name不能为空")
      } else if (cValue === '') {
        console.log("cookie的value不能为空")
      } else {
        this.setCookie(cName, cValue, 1)
      }
    },
    removeCookie () {
      let rName = this.rName
      if (rName === '') {
        console.log("移除的cookie的name不能为空")
      } else {
        this.remCookie(rName)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
