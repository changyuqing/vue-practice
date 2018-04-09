<template>
<div class="container">
  <app-header></app-header>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
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
