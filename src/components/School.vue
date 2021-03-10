<template>
  <div class="school">
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">
      <div class="wrap">
      <el-carousel height="483px">
      <el-carousel-item >
        <img src="../assets/images/xykjkj_bg_banner.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/xykjkj_bg_banner.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/xykjkj_bg_banner.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
      </div>
      <div class="card">
        <h3>身份</h3>
        <span>IDENTITY</span>
      </div>
      <div class="photo">
         <div class="card-img">
         <div class="img">
            <img src="../assets/images/space/xykjkj_bg_identity_01.jpg" alt="">
            <div class="cub"></div>
         </div>
          <div class="text">
            <h4>老师</h4>
            <span>REACHER</span>
          </div>
        </div>
        <div class="card-img">
          <div class="img">
            <img src="../assets/images/space/xykjkj_bg_identity_02.jpg" alt="">
            <div class="cub"></div>
         </div>
          <div class="text">
            <h4>学生</h4>
            <span>STUDENT</span>
          </div>
        </div>
      </div>
    </div>
     <div class="line"></div>
     <div class="footer">
       <Footer></Footer>
     </div>
  </div>
</template>
<script>
import Header from '../views/Header'
import Footer from '../views/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less" scoped>
.school{
  width: 100%;
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
    .card{
      height: 160px;
      width: 100%;
      box-sizing: border-box;
      padding: 57px 0 54px 0;
      text-align: center;
      h3{
        margin: 0;
        font-size: 30px;
        font-weight: normal;
      }
      span{
        font-size: 14px;
        color: #afafb1;
      }
    }
    .photo{
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      padding: 0 30px;
      margin-bottom: 120px;
      .card-img{
        cursor: pointer;
        width: 320px;
        height: 475px;
        text-align: center;
        .img{
          position: relative;
          display: block;
          width: 320px;
          height: 420px;
          img{
            width: 100%;
            height: 100%;
          }
          .cub{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 298px;
          height: 398px;
          border: 1px solid #cccecc;
        }
        }
        .text{
          margin-top: 20px;
          h4{
            margin: 0;
          }
          span{
            font-size: 9px;
            color: #b7b7c1;
          }
        }
      }
    }
  }
  .line{
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
