<template>
  <div>
     <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="/"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b" router>
                    <el-menu-item index="/">
                        <i class="el-icon-setting"></i>
                        <span slot="title">首页</span>
                    </el-menu-item> 
                    <template v-for="item in user.menus">
                        <el-submenu :index="item.title" :key="item.id" v-if="item.children">
                        <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="i in item.children" :key="i.id" :index="'/'+i.url">{{i.title}}</el-menu-item>                
                    </el-submenu>
                        <el-menu-item v-else :key="item.id" :index="'/'+item.url">{{item.title}}</el-menu-item>                
                    
                    </template>
                    
                   
                
            </el-menu>
        </el-aside>
        <el-container>
            <el-header height="80px">
            {{user.username}}
            <el-button type="primary" @click="logout">退出</el-button>
        </el-header>
        <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 二级路由出口 -->
            <router-view></router-view>
        </el-main>
        </el-container>
    </el-container> 
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({
            'user':'user'
        })
    },
    methods:{
        ...mapActions({
            "requestUser":"userActions"
        }),
        logout(){
            this.requestUser(null)
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.el-aside{
  height: 100vh;
  background: #20222A;
  color:white;
}
.el-header{
  background: #B3C0D1;
  /* height: 80px; */
  line-height: 80px;
  text-align:right;
}
</style>