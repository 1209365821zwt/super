<template>
  <div class="toplist">
     <span v-for="item in toplist" :key='item.title' class="title" :class='{active:num===item.id}' @click="handclick(item.id)">
         {{item.title}}
     </span>
  </div>
</template>

<script>
export default {
  props: {
    toplist: {
      type: Array,
      default: () => []
    },
    num: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handclick (id){
      this.$emit('changelist', id)
    }
  }
}
</script>

<style lang='scss' scoped>
.toplist{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;
    span{
        flex: 1;
        text-align: center;
        font-size: 20px;
        &.active{
            color: #f56;
        }
    }
}
</style>
