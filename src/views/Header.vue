<template>
  <div class="head">
    <div class="logo">
      <div class="imgs">
        <img src="../assets/images/logo.png" alt="">
      </div>
    </div>
    <div class="line"></div>
    <div class="nav">
      <el-menu :default-active="activeIndex" mode="horizontal" background-color="#10141b" active-text-color="#6b63b5" text-color="#fff">
  <el-menu-item index="1">
    <router-link to="/shou">首页</router-link>
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">困境空间</template>
    <el-menu-item index="2-1">
      <router-link to="/all">家庭困境</router-link>
    </el-menu-item>
    <el-menu-item index="2-2">
      <router-link to="/allschool">校园困境</router-link>
    </el-menu-item>
    <el-menu-item index="2-3">
      <router-link to="/alljob">职场困境</router-link>
    </el-menu-item>
  </el-submenu>
  <el-menu-item index="3">
    <router-link to="/tree">困境树洞</router-link>
  </el-menu-item>
  <el-menu-item index="4">
    <router-link to="/fragyour">困境碎片</router-link>
  </el-menu-item>
  <el-menu-item index="5">
    <router-link to="/family">困境匹配</router-link>
  </el-menu-item>
</el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '2-1'
    }
  }
}
</script>
<style lang="less" scoped>
.head{
  width: 100%;
  height: 139px;
  a{
    color: #fff;
  }
  .logo{
    height: 79px;
    // background: #242633;
    position: relative;
    .imgs{
      width: 54px;
      height: 54px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .line{
    width: 100%;
    height: 1px;
    background:rgba(250, 250, 250, .3);
  }
  .nav{
    box-sizing: border-box;
    height: 60px;
    // background: #10141b;
    .el-menu{
      width: 477px;
      margin: 0 auto;
    }
    &/deep/.el-menu.el-menu--horizontal{
      border-bottom: none;
      background-color: rgba(16, 20, 27, 0)!important;
    }
    .el-menu--horizontal>.el-menu-item{
        background-color: rgba(16, 20, 27 ,0)!important;
    }
    &/deep/.el-menu--horizontal>.el-submenu .el-submenu__title{
      background-color: rgba(16, 20, 27 ,0)!important;
    }
  }
}
</style>
