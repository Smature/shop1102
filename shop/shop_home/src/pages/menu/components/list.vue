<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="菜单编号" ></el-table-column>
      <el-table-column prop="title" label="菜单名称" ></el-table-column>
      <el-table-column prop="icon" label="菜单图标"></el-table-column>
      <el-table-column prop="url" label="菜单地址"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template v-slot="prop">
         <el-button type="primary" v-if="prop.row.status==1">启动</el-button>
        <el-button type="danger" v-else>禁止</el-button> 
        </template>
      </el-table-column>
      <el-table-column prop="status" label="操作">
        <template v-slot="prop">
         <el-button type="primary" @click="edit(prop.row.id)">编辑</el-button>
        <el-button type="danger" @click="del(prop.row.id)">删除</el-button> 
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {delMenu} from '../../../utils/request'
import {mapGetters,mapActions} from 'vuex'
import { successAlert } from '../../../utils/alert';
export default {
   data() {
      return {
        // tableData: [],

      }
    },
    computed:{
      ...mapGetters({
        "tableData":"menu/menuList"
      })
    },

    methods:{
      ...mapActions({
        "requestMenuList":"menu/menuListActions"
      }),
      edit(id){
        // console.log(id)
        this.$emit('edit',id)
      },
      del(id){
    
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除
          delMenu({id}).then(res=>{
            successAlert(res.data.msg);
            this.requestMenuList()
          })  
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        })
     
        
      }
    },
    mounted(){
      this.requestMenuList()
    }
};
</script>

<style>
</style>