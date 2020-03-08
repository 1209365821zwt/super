<template>
  <div class="homepage">
    <s-header>
      <span>校园超市</span>
    </s-header>
    <Search></Search>
    <Top :toplist='toplist' @changelist='changelist' v-if='tabBarSticky' ref="tabBar" :num='num'></Top>
    <s-bscroll @bsScroll='bsScroll' scrollY>
     <s-swiper :swiperlist='swiperlist'></s-swiper>
    <div class="icon">
       <div v-for='item in imglist' :key='item' class="imgs">
         <img :src="require('../../../assets/'+item)" alt="">
       </div>
    </div>
    <div class="list">
      <Top :toplist='toplist' @changelist='changelist' v-if='!tabBarSticky' ref="tabBar" :num='num'></Top>
      <div class="main-list">
      <Dlist :productlist='productlist'></Dlist>
      </div>
    </div>
    <span class="loading" v-show='loading'>loading......</span>


    </s-bscroll>

  </div>
</template>

<script>
import Search from './components/search'
import Swiper from 'swiper'
import Top from './components/top'
import Dlist from './components/dlist'
export default {
  name: 'homePage',
  components: {
    Search,
    Top,
    Dlist
  },
  data (){
    return {
      swiperlist: [],
      imglist: [
        'images/1.png',
        'images/2.png',
        'images/3.png'
      ],
      toplist: [],
      num: 1,
      productlist: [],
      formData: {
        type: 1,
        page: 0,
        pageSize: 3
      },
      loading: false,
      flag: true,
      tabBarTop: 0,
      tabBarSticky: false
    }
  },
  watch: {
    formData: {
      handler: 'getProducts',
      immediate: true,
      deep: true
    }
  },
  mounted (){
    this.getTabBarTop()
  },
  methods: {
    changelist (id){
      this.num=id;
      this.formData.type=id;
      this.formData.page = 0;
      this.flag=true;
    },
    async getProducts (){
      const { type, page, pageSize }=this.formData;
      const res=await this.$api.home.product({ type, page, pageSize });
      console.log(res.data.data)
      if (page<=0){
        this.productlist=res.data.data
      } else {
        this.productlist=[...this.productlist, ...res.data.data]
      }
      this.loading=false;
      if (res.data.data<=0){
        this.flag=false
      }
    },
    bsScroll (bs){
      if (this.flag){
        if (bs.y<bs.maxScrollY){
          this.loadMore();
        }
      }
      if (bs.y < -this.tabBarTop) {
        this.tabBarSticky = true;
      } else {
        this.tabBarSticky = false;
      }
    },
    getTabBarTop (){
      const rect = this.$refs.tabBar.$el.getBoundingClientRect();
      console.log(rect)
      this.tabBarTop = rect.top;
    },
    loadMore (){
      console.log('滚到底了');
      this.loading=true;
      this.formData.page+=1
    }
  },
  created (){
    this.$api.user.carouel().then(res => {
      this.swiperlist=res.data.message;
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: true,
          click: true
        })
      })
    });
    this.$api.home.menu().then(res => {
      this.toplist=res.data.data
    })
  }


}
</script>

<style lang='scss' scoped>
.homepage{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.contentlist{
   flex: 1;
   width: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;

}
.main-content{
  width: 100%;
}
.icon{
  width: 100%;
  height: 300px;
  display: flex;
  border-bottom: 1px solid #f66;
  .imgs{
    flex: 1;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.list{
  flex: 1;
  width: 100%;
}
.main-list{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
