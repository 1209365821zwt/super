<template>
  <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
      <Footerlist></Footerlist>
  </div>
</template>

<script>
import Footerlist from './components/footer'
export default {
  name: 'minePage',
  components: {
    Footerlist
  }
}
</script>

<style lang='scss' scoped>
.main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
   box-sizing: border-box;
}
.content{
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  max-width: 750px;
}
.footer{
  width: 100%;
  height:120px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 2px -6px rgba(0,0,0,0.03);
  border:1px solid rgba(235,235,235,1);
}
</style>
