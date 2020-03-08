<template>
  <div class="footer">
      <router-link tag='dl' v-for='(item,index) in navList' :key='index' :to='item.path'>
         <dt>
             <img :src="require('../../../assets/icon/'+item.icon)" alt="">
         </dt>
         <dd>
             <span>{{item.title}}</span>
         </dd>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'footerlist',
  data (){
    return {
      navList: [
        {
          path: '/homePage',
          title: '首页',
          icon: 'home.png'
        },
        {
          path: '/classify',
          title: '分类',
          icon: 'classify.png'
        },
        {
          path: '/shoppingCar',
          title: '购物车',
          icon: 'shoppingCar.png'
        },
        {
          path: '/mine',
          title: '我的',
          icon: 'mine.png'
        }

      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.footer{
    width: 100%;
    display: flex;
    dl{
        flex: 1;
        margin:0 auto ;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &.router-link-active{
            color: #f56;
        }
        dt{
      margin-top: 10px;
      width: 52px;
      height: 52px;
    img{
      width: 52px;
      height: 52px;
    }
  }
         dd{
             flex: 1;
      margin:-5px auto;
      line-height: 100%;
   span{
      display: inline-block;
      font-size:6px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;

   }
  }
    }
}
</style>
