<template>
  <div class="fragyour">
    <div class="allyour">
      <el-carousel :interval="5000" arrow="always">
      <div class="header">
      <FragHeader></FragHeader>
    </div>
    <div class="top">
        <div class="logo">
        <img src="../assets/images/background-logo.png" alt="">
      </div>
      <div class="title">
        <h2>你的碎片在困境空间中漂泊3天没有被发现</h2>
        <span>Your fragments drift in the difficult space and were not found</span>
      </div>
     </div>
    <el-carousel-item>
      <div class="wriperOne">1</div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="wriperTwo">2</div>
    </el-carousel-item>
   </el-carousel>
    </div>
  </div>
</template>
<script>
import FragHeader from '../views/FragHeader'
export default {
  components: {
    FragHeader
  }
}
</script>
<style lang="less" scoped>
.fragyour{
  width: 100%;
  height: 100%;
  .allyour{
    width: 100%;
    height: 100%;
    .header{
      position: relative;
      z-index: 99;
    }
    .top{
      // position: relative;
      display: flex;
      margin-left: 180px;
      .title{
        h2{
          margin: 0;
          color: #fff;
          font-weight: normal;
          margin-left: 90px;
        }
        span{
          margin-left: 145px;
          color: #fff;
          font-size: 5px;
          opacity: .3;
        }
      }
    }
    .el-carousel__item{
      height: 100%!important;
      .wriperOne{
      width: 100%;
      height: 100%;
      background: red;
    }
    .wriperTwo{
      width: 100%;
      height: 100%;
      background: orange;
    }
    }
  }
}
</style>
