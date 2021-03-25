<template>
    <div>
      <van-nav-bar
        title="商品列表"
        left-arrow
        right-text="搜索"
        @click-left="$router.go(-1)"
        bind:click-right="onClickRight"
      />
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item,index) in firstCate" :key="item.id" :title="item.catename" @click="changeCate(index)" />
      </van-sidebar>
      <div class="main">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in secondCate" :key="item.id" :to="`/goodsList?fid=${item.id}`">
            <van-image :src="$preImg+item.img" />
            <p>{{item.catename}}</p>
          </van-grid-item>

        </van-grid>
      </div>
    </div>
</template>

<script>
import {getCate} from '../utils/request'
export default {
  data(){
    return{
      activeKey:0,
      firstCate:[],
      secondCate:[],
    }
  },
  methods: {
      requestCate(){
        getCate().then(res=>{
          this.firstCate = res.data.list;
          this.changeCate(0)
        })
      },
      changeCate(index){
        this.secondCate = this.firstCate[index].children
      }
  },
  mounted () {
    this.requestCate();
  }
}
</script>

<style scoped>
.main{
  position: absolute;
  top:55px;
  right:0;
  margin-left:80px;
}

</style>
