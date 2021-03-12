<template>
  <div class="fragfinded">
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
     <div class="loop">
       <div class="loop_wrap">
         <div class="form">
           <el-form label-width="120px">
           <el-form-item label="困境标签">
              <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="用户管理" name="first">
                <el-form-item label="联系方式">
                  <p>111111@.com</p>
                </el-form-item>
                <el-form-item label="困境树洞">
                  <p>职场新人</p>
                </el-form-item>
                <el-form-item label="备注">
                  <p>职场新人</p>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">
                <el-form-item label="联系方式">
                  <p>22222222@.com</p>
                </el-form-item>
                <el-form-item label="困境树洞">
                  <p>职场PUA</p>
                </el-form-item>
                <el-form-item label="备注">
                  <p>职场PUA</p>
                </el-form-item>
              </el-tab-pane>
              </el-tabs>
           </el-form-item>
           </el-form>
         </div>
         <div class="inter">
           <div class="allto">
             <div class="to">
             <div class="img">
               <img src="../assets/images/matching/matching_5.jpg" alt="">
               <div class="cub"></div>
                <div class="text">
               <h2>继续漂泊</h2>
             </div>
             </div>
           </div>
           <div class="to">
             <div class="img">
               <img src="../assets/images/matching/matching_6.jpg" alt="">
               <div class="cub"></div>
                <div class="text">
               <h2>发布新的困境</h2>
             </div>
             </div>
           </div>
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
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    FragHeader,
    FragFooter
  }
}
</script>
<style lang="less" scoped>
.fragfinded{
  width: 100%;
  height: 100%;
  background: url(../assets/images/matching/matching_7.jpg);
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
    .loop{
      width: 1270px;
      margin: 60px auto 0;
      .loop_wrap{
        display: flex;
        justify-content: space-between;
        .form{
          width: 705px;
          height: 492px;
          background: #6b63b5;
          box-sizing: border-box;
          padding: 45px 135px;
          margin-top: 100px;
          .el-form{
            width: 440px;
            height: 405px;
            p{
              display: inline-block;
              margin: 0 0 15px 0;
              width: 266px;
              height: 80px;
              background: #fff;
              line-height: 80px;
              text-align: center;
              border-radius: 15px;
            }
            &/deep/.el-form-item{
            margin: 0;
            width: 100%;
            height: 100%;
            .el-form-item__label{
              text-align: center;
              background: #fff;
              margin-right: 32px;
              border-radius: 47%;
              color: #000;
            }
            .el-form-item__content{
              margin-left: 0!important;
              .el-tabs--card>.el-tabs__header{
                border-bottom: none;
              }
              .el-tabs--card>.el-tabs__header .el-tabs__nav{
                border: none;
                width: 266px;
                height: 80px;
                background: #fff;
                border-radius: 15px;
                line-height: 80px;
                text-align: center;
              }
              .el-tabs--card>.el-tabs__header .el-tabs__item{
                border-bottom: none;
                border-left: none;
              }
            }
          }
          }
        }
        .inter{
          // position: relative;
          .img{
            width: 452px;
            height: 310px;
            position: relative;
            margin-bottom: 52px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .cub{
             width: 450px;
            height: 308px;
            border: 1px solid #8082d1;
            position: absolute;
            left: 28px;
            top: 14px;
          }
          .text{
            position: absolute;
            left: 50%;
            bottom: 0;
            color: #fff;
            transform: translateX(-50%);
          }
        }
      }
    }
    .footer{
      width: 100%;
    }
  }
}
</style>
