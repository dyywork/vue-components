<template>
  <div class="home">
    <mg-search-form />
    <mg-table />
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/utils/HelloWorld.vue'
import Loadash from 'lodash'

export default {
  name: 'Home',
  mounted() {
    let obj = {
      a: function a(){
        console.log('123')
      },
      b: [1,2,4, function (){console.log('12')}],
      c: {name: '123'}
    }




    let objStr = JSON.stringify(obj, function (key,value){
      console.log(key);
      console.log(value);
      if (typeof value === 'function') {
        return value.toString()
      }
      return value
    })
    console.log(objStr.replaceAll(/\"function|\'function/g, 'function').replaceAll(/\}\"|\}\'/g, '}'));
    console.log('str',objStr);
    console.log('============================')
    console.log(JSON.parse(objStr, function (key, value) {
      console.log(key);
      console.log(value);
      if( typeof value === 'string' && /function/g.test(value)){
        console.log(/function/g.test(value));
        console.log(value);
        return value.replaceAll(/\"|\'/g, '')
      }
      return value
    }));
  }
}
</script>
