<template>
  <div class="contentlist">
      <div class="main-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Bscroll',
  props: {
    scrollY: {
      type: Boolean
    }
  },
  mounted (){
    this.init()
  },
  methods: {
    init (){
      const bs=new BScroll('.contentlist', {
        scrollY: this.scrollY,
        scrollX: !this.scrollY,
        probeType: 3,
        click: true
      });
      bs.on('scroll', this.throttle(this.onScroll.bind(this, bs), 300));
      bs.on('scrollEnd', this.onScrollEnd.bind(this, bs))
    },
    onScroll (bs){
      this.$emit('bsScroll', bs)
    },
    onScrollEnd (bs){
      bs.refresh()
    },
    // 设置一个过期时间
    throttle (func, delay) {
      let prev=Date.now();
      return function (){
        const now=Date.now();
        if (now-prev>=delay){
          func();
          prev=Date.now()
        }
      }
    }
  }
}
</script>

<style>

</style>
