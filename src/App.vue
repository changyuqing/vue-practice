<template>
<div class="container">
  <app-header></app-header>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 ">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Header from './components/Header';

export default {

  data () {
    return {

    }
  },
  components:{
    appHeader:Header
  }
}
</script>

<style>
body{
  padding: 30px;
}
</style>
