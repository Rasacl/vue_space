<template>
  <div class="fragfind">
    <div class="header">
      <FragHeader></FragHeader>
    </div>
    <div class="main">
     <div class="top">
        <div class="logo">
        <img src="../assets/images/background-logo.png" alt="">
      </div>
      <div class="title">
        <h2>你的碎片在困境空间中漂泊3天没有被发现</h2>
        <span>Your fragments drift in the difficult space and were not found</span>
      </div>
     </div>
     <div class="photo">
       <div class="bottom">
         <div class="pimg">
         <div class="imgs">
           <img src="../assets/images/matching/matching_3.jpg" alt="">
         </div>
         <div class="cub"></div>
         <div class="text">
           <h2>继续漂泊</h2>
         </div>
       </div>
       <div class="pimg">
         <div class="imgs">
           <img src="../assets/images/matching/matching_2.jpg" alt="">
         </div>
         <div class="cub"></div>
         <div class="text">
           <h2>结束漂泊</h2>
         </div>
       </div>
       </div>
     </div>
     <div class="footer">
       <FragFooter></FragFooter>
     </div>
    </div>
  </div>
</template>
<script>
import FragHeader from '../views/FragHeader'
import FragFooter from '../views/FragFooter'
export default {
  components: {
    FragHeader,
    FragFooter
  }
}
</script>
<style lang="less" scoped>
.fragfind{
  width: 100%;
  // height: 100%;
  box-sizing: border-box;
  background: url(../assets/images/matching/matching_4.jpg) no-repeat;
  background-size: 100% 86%;
  position: relative;
  overflow: hidden;
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 6;
    bottom: 0;
    top: 496px;
    background: url(../../public/shouye/bg_content.png) no-repeat;
  }
  .main{
    width: 100%;
    height: 100%;
    padding-top: 40px;
    position: relative;
    z-index: 8;
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
    .photo{
      width: 1100px;
      margin: 60px auto 0;
      text-align: center;
      .bottom{
        display: flex;
        justify-content: space-between;
        .pimg{
          position: relative;
          cursor: pointer;
          .imgs{
            width: 452px;
            height: 600px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .cub{
            width: 450px;
            height: 598px;
            border: 1px solid #303461;
            position: absolute;
            top: 30px;
            left: 30px;
          }
          .text{
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);

            h2{
              color: #fff;
              font-weight: normal;
            }
          }
        }
      }
    }
    .footer{
      margin-top: 60px;
      width: 100%;
    }
  }
}
</style>
