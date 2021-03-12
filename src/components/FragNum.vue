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
        <h2>你的碎片在困境空间中漂泊倒计时</h2>
        <span>Your fragments drift in the difficult space and were not found</span>
      </div>
     </div>
     <div class="photo">
       <div class="bottom">
         <div class="bottom_text">
           <h2>倒计时</h2>
           <span>Countdown</span>
         </div>
         <div class="bottom_num">
           <h2 class="num">2天24小时29分</h2>
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
  height: 100%;
  box-sizing: border-box;
  background: url(../assets/images/matching/matching_1.jpg) no-repeat;
  background-size: 100% 100%;
  .main{
    width: 100%;
    height: 100%;
    padding-top: 40px;
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
      height: 565px;
      .bottom{
        display: flex;
        justify-content: space-between;
        .bottom_text{
          color: #fff;
          h2{
            margin: 0;
            font-weight: normal;
          }
          span{
            font-size: 5px;
            opacity: .3;
          }
        }
        .bottom_num{
          width: 530px;
          height: 400px;
          background: #fff;
          position: relative;
          .num{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            color: #6666cc;
            font-size: 37px;
            margin: 0;
          }
        }
      }
    }
    .footer{
      // margin-top: 60px;
      width: 100%;
    }
  }
}
</style>
