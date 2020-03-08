<template>
  <div class="header">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='scss' scoped>
.header{
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  background: rgba(255,255,245,205);
  line-height: 100px;
  span{
    display: block;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
  }
}
</style>
