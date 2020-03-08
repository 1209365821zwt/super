<template>
  <div class="listdl">
   <dl v-for='(item) in productlist' :key='item.name'>
       <dt>
           <img :src="item.cover" alt="">
       </dt>
       <dd>
           <h4>{{item.name}}</h4>
              <p>已售出{{item.count}}</p>
              <span>￥{{item.price}}</span>
       </dd>
   </dl>
  </div>
</template>

<script>
export default {
  name: 'Dlist',
  props: {
    productlist: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
