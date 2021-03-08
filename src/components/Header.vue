<template>
  <div class="Header-Comtainer">
    <div class="wrap">
      <p>🥰</p>
      <img src="../../public/shouye/bear hug1.png" alt="">
    </div>
    <div class="line"></div>
    <div class="nav">
    <el-menu :default-active="activeIndex" mode="horizontal">
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
      activeIndex: '1'
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.Header-Comtainer {
  width: 1100px;
  height: 77px;
  text-align: center;
  box-sizing: border-box;
  .wrap {
    p {
      margin: 0;
      padding-top: 16px;
    }
    padding-bottom: 16px;
  }
  .line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(250, 250, 250, 0.4);
  }
  .nav{
    width: 100%;
  .el-menu{
    background-color:none;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  }
}

</style>
