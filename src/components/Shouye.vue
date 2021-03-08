<template>
  <div class="Shou">
    <div class="wrap">
      <el-container>
      <el-header>
  <div class="Header-Comtainer">
    <div class="wrap">
      <p>🥰</p>
      <img src="../../public/shouye/bear hug1.png" alt="">
    </div>
    <div class="line"></div>
    <div class="nav">
    <el-menu
  :default-active="activeIndex"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff">
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
  </el-header>
      <el-main>
        <div class="main">
    <div class="logo">
      <div class="logoN">
        <img src="../../public/shouye/bear hug.png" alt="">
      </div>
      <div class="logoT">
        <img src="../../public/shouye/text.png" alt="">
      </div>
    </div>
    <div class="photo">
      <div class="one">
        <img src="../../public/shouye/shaoe_space.png" alt="">
        <span>困境空间</span>
      </div>
      <div class="twe">
        <img src="../../public/shouye/shape_sachet.png" alt="">
        <span>困境精囊</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="wriper">
      <div class="text">
        <p>困境空间</p>
        <p class="two">Dilemma Space</p>
      </div>
    </div>
  </div>
      </el-main>
      </el-container>
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
.Shou{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -2;
  background:
  url(../../public/shouye/background.png) no-repeat;
}
.Shou::after{
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 0;
  top: 343px;
  height: 100%;
  width: 100%;
  background: url(../../public/shouye/bg_content.png) no-repeat;
}
.wrap{
  width: 1127px;
  height: 100%;
  // background: red;
  margin: 0 auto;
}
.el-header{
  padding: 0;
  height: 153px !important;
  .Header-Comtainer {
  width: 1100px;
  height: 77px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  .wrap {
    p {
      margin: 0;
      padding-top: 16px;
    }
    padding-bottom: 0px;
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
    width: 390px;
    left: 50%;
    transform: translateX(-50%);
    .el-menu-item{
      padding: 0 9px;
    }
  }
   .el-menu--horizontal>.el-menu-item.is-active {
      border-bottom: 3px solid #8e049b;
      color: #303133;
    }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  }
}
}
.el-main{
  padding: 0;
  .main{
  width: 100%;
  height: 100%;
  position: relative;
  top:175px;
  margin-bottom: 60px;
  box-sizing: border-box;
}
.logo{
  height: 115px;
  width: 100%;
  margin: 0 auto;
}
.logoN{
  width: 100%;
  text-align: center;
}
.logoT{
  width: 100%;
  text-align: center;
  margin-top: 22px;
}
.photo{
  display: flex;
  justify-content: center;
  margin-top: 62px;
  margin-bottom: 119px;
  position: relative;
  span{
    color:#fff;
    position: absolute;
    bottom: 20px;
    margin-left: 120px;
  }
}
.one{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 279px;
  margin-right: 26px;
  background: url(../../public/shouye/button_sachet1.png) no-repeat;
}
.twe{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 26px;
  width: 255px;
  height: 279px;
  background: url(../../public/shouye/button_sachet.png) no-repeat;
}
.line{
  // position: absolute;
  // left: 0;
  width: 100%;
  height: 1px;
  background: rgba(250, 250, 250, 0.4);
  margin-bottom: 37px;
}
.wriper{
  width: 100%;
  height: 615px;
  .text{
    p{
      margin: 0;
      color: #fff;
      font-size: 25px;
      &.two{
        font-size: 12px;
        color:rgba(250, 250, 250, 0.4);
      }
    }
  }
}
}
</style>
