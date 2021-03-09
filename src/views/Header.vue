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
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">困境空间</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">困境树洞</el-menu-item>
  <el-menu-item index="4">困境碎片</el-menu-item>
  <el-menu-item index="5">困境匹配</el-menu-item>
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
  .logo{
    height: 79px;
    background: #242633;
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
    background: #10141b;
    .el-menu{
      width: 477px;
      margin: 0 auto;
    }
    .el-menu.el-menu--horizontal{
      border-bottom: none;
    }
  }
}
</style>
