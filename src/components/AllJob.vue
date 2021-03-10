<template>
  <div class="FamliyParents">
    <div class="header">
        <Header></Header>
    </div>
    <div class="main">
       <div class="wrap">
      <el-carousel height="483px">
      <el-carousel-item >
        <img src="../assets/images/jtkjkj_bg_banner.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/jtkjkj_bg_banner.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/jtkjkj_bg_banner.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
      </div>
      <div class="select">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#6b63b5" text-color="#000" @select="handleSelect">
         <el-menu-item index="1">
           <!-- <router-link to="/cparents"> -->
           初入职场新人
           <!-- </router-link> -->
         </el-menu-item>
        <el-menu-item index="2">
          <!-- <router-link to="/cchild"> -->
          职场老人
          <!-- </router-link> -->
        </el-menu-item>
       <el-menu-item index="3">
         <!-- <router-link to="/cmarry"> -->
         领导
         <!-- </router-link> -->
       </el-menu-item>
        </el-menu>
      </div>
      <div class="line"></div>
      <div class="choose">
        <router-view></router-view>
      </div>
    </div>
    <div class="footerLine"></div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '../views/Header'
import Footer from '../views/Footer'
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    handleSelect (key, keyPath) {
      const ret = keyPath
      // console.log(key, keyPath)
      // console.log(ret)
      this.activeIndex = ret[0]
      // console.log(this.activeIndex)
      if (this.activeIndex === '1') {
        this.$router.push('/fersh')
      } else if (this.activeIndex === '3') {
        this.$router.push('/senior')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.FamliyParents{
  .header /deep/ .head .logo{
      background: #242633;
    }
    .header /deep/ .head .nav{
      background: #10141b;
    }
  .main{
    .el-carousel--horizontal{
      width: 100%;
    }
    .el-menu-item *{
        text-decoration: none;
      }
    .el-menu--horizontal>.el-menu-item a:hover{
      color: #000;
    }
    .el-carousel{
      .el-carousel__indicators{
        .el-carousel__button{
          width: 5px;
          height: 5px;
        }
      }
    }
    .select{
      width: 1100px;
      height: 50px;
      margin: -3px auto;
      .el-menu{
        width: 330px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
      }
      .el-menu--horizontal>.el-menu-item{
        height:47px;
        line-height: 47px;
      }
    }
    .line{
      width: 1100px;
      height: 1px;
      background: #e6e6e6;
      margin: 0 auto;
    }
    .choose{
      height: 550px;
      width: 1100px;
      margin: 0 auto;
      // background: orangered;
      box-sizing: border-box;
      padding-top: 80px;
    }
  }
  .footerLine{
    width: 100%;
    height: 1px;
    background: #707174;
  }
  .footer{
    background: #17171a;
    color: #808080;
  }
}
</style>
