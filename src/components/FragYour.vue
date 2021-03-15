<template>
  <div class="fragyour">
    <div class="header">
      <FragHeader></FragHeader>
    </div>
    <div class="allyour">
      <el-carousel :interval="5000" arrow="always">
    <div class="top">
        <div class="logo">
        <img src="../assets/images/background-logo.png" alt="">
      </div>
      <div class="title">
        <h2>你的碎片</h2>
        <span>Fragments of your predcament</span>
      </div>
     </div>
    <el-carousel-item>
      <div class="wriperOne">
          <div class="from">
            <el-form label-width="160px" :model="form">
            <el-form-item label="碎片联系方式">
            <el-input v-model="form.name"  disabled>联系方式</el-input>
            </el-form-item>
             <el-form-item label="困境标签">
            <el-radio-group v-model="form.resource">
              <el-radio label="职场新人"></el-radio>
              <el-radio label="职场PUA"></el-radio>
            </el-radio-group>
            </el-form-item>
              <el-form-item label="是否显示困境时间">
              <el-radio-group v-model="form.resource1">
              <el-radio label="是"></el-radio>
               <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
             <el-form-item label="请输入联系方式">
            <el-input placeholder="联系方式" v-model="form.tel"></el-input>
            </el-form-item>
             <el-form-item label="碎片存活时间">
            <el-input v-model="form.day">3天</el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.desc" placeholder="把你的困境描述出来，为你找到相拥的人"></el-input>
              </el-form-item>
              <el-form-item class="btn">
              <el-button type="primary">发布困境碎片</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="img">
            <div class="photo">
              <img src="../assets/images/debris/dilemma_1.jpg" alt="">
            </div>
          </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="wriperTwo">
        <div class="from">
            <el-form label-width="160px" :model="form2">
            <el-form-item label="碎片存活时间">
            <el-input v-model="form2.day"></el-input>
            </el-form-item>
             <el-form-item label="困境标签">
            <el-radio-group v-model="form.resource">
              <el-radio label="职场新人"></el-radio>
              <el-radio label="职场PUA"></el-radio>
            </el-radio-group>
            </el-form-item>
             <el-form-item label="请输入联系方式">
            <el-input placeholder="联系方式" v-model="form2.tel"></el-input>
            </el-form-item>
             <el-form-item label="困境树洞">
            <el-input v-model="form2.tree"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="form2.text"></el-input>
              </el-form-item>
            </el-form>
          </div>
      </div>
    </el-carousel-item>
    <div class="line_cup"></div>
   </el-carousel>
    </div>
    <div class="footer">
      <FragFooter></FragFooter>
    </div>
  </div>
</template>
<script>
import FragHeader from '../views/FragHeader'
import FragFooter from '../views/FragFooter'
export default {
  data () {
    return {
      form: {
        name: '联系方式',
        resource: '',
        resource1: '',
        tel: '',
        day: '3天',
        desc: ''
      },
      form2: {
        resource: '',
        tel: '1111112@.com',
        day: '3天',
        text: '职场新人',
        tree: '职场新人'
      }
    }
  },
  components: {
    FragHeader,
    FragFooter
  }
}
</script>
<style lang="less" scoped>
.fragyour{
  width: 100%;
  // height: 100%;
  background-color:#06080b;
  box-sizing: border-box;
  overflow: hidden;
  // position: relative;
  // &::after{
  //   content: '';
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //   z-index: -1;
  //   bottom: 0;
  //   top: 496px;
  //   background: url(../../public/shouye/bg_content.png) no-repeat;
  // }
   .header{
      position: relative;
      z-index: 99;
    }
  .allyour{
    width: 100%;
    height: 905px;
    .top{
      position: relative;
      width: 100%;
      display: flex;
      left: 180px;
      z-index: 8;
      padding-bottom: 80px;
      padding-top: 40px;
      .title{
        h2{
          margin: 0;
          color: #fff;
          font-weight: normal;
          margin-left: 175px;
        }
        span{
          margin-left: 145px;
          color: #fff;
          font-size: 5px;
          opacity: .3;
        }
      }
    }
    .line_cup{
      width: 882px;
      height: 1px;
      // margin: 0 auto;
      background:rgba(250, 250, 250, 0.4);
      position: absolute;
      z-index: 99;
      bottom: 27px;
      left: 50%;
      transform: translateX(-30%);
    }
    &/deep/.el-carousel__indicators--horizontal{
      left: 28%;
      bottom: 11px;
      .el-carousel__button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
    .el-carousel--horizontal{
      height: 100%;
      width: 100%;
      &/deep/.el-carousel__container{
        height: 100%;
        .el-carousel__arrow{
          top: 97%;
          background-color: rgba(250, 250, 250, 0);
          border-radius: none;
          font-size: 22px;
        }
        .el-carousel__arrow--left{
          left: 20%;
        }
        .el-carousel__arrow--right{
          right: 74%;
        }
      }
    }
    .el-carousel__item{
      // height: 100%!important;
      .wriperOne{
      width: 100%;
      height: 100%;
      background:#06080b;
      position: relative;
      .from{
        width: 510px;
        height: 616px;
        // background: red;
        position: absolute;
        top: 191px;
        left: 180px;
        .el-form{
          width: 100%;
          height: 100%;
          .el-form-item{
            height: 78px;
            display: flex;
            justify-content: space-around;
            margin-bottom: 32px;

            &/deep/.el-form-item__label{
              height: 32px;
              line-height: 32px;
              text-align: center;
              color: #fff;
              background: #6b63b5;
              border-radius: 20px;
              margin-right: 13px;
            }
            &/deep/.el-form-item__content{
             margin-left: 0!important;
              .el-input.is-disabled .el-input__inner{
                color: #606266;
              }
             .el-input,.el-radio-group,.el-textarea  {
              width: 263px;
              height: 78px;
              text-align: center;
              background: #fff;
              border-radius: 20px;
              .el-input__inner{
                height: 100%;
                border-radius: 20px;
                text-align: center;
              }
             }
             .el-radio-group{
               text-align: center;
               line-height: 78px;
             }
             .el-textarea{
               .el-textarea__inner{
                 width: 100%;
                 height: 100%;
                 border-radius: 20px;
               }
             }
            }
          }
          .btn{
            width: 393px;
            height: 80px;
            margin-bottom: 0;
            position: absolute;
            right: -604px;
            z-index: 8;
            bottom: -13px;
            &/deep/.el-form-item__content{
              width: 100%;
              line-height: 80px;
              .el-button{
                width: 100%;
              height: 100%;
              border-radius: 10px;
              font-size: 20px;
              }
              .el-button--primary{
                background-color: #6b63b5;
                border: none;
              }
            }
          }
        }
      }
      .img{
        height: 617px;
        position: absolute;
        right: 0;
        top: 191px;
      }
    }
    .wriperTwo{
      width: 100%;
      height: 100%;
      background:url(../assets/images/debris/dilemma_2.jpg) no-repeat;
      background-size: 100% 100%;
      position: relative;
      .from{
        width: 510px;
        height: 616px;
        // background: red;
        position: absolute;
        top: 191px;
        left: 180px;
        .el-form{
          width: 100%;
          height: 100%;
          .el-form-item{
            height: 78px;
            display: flex;
            justify-content: space-around;
            margin-bottom: 32px;

            &/deep/.el-form-item__label{
              height: 32px;
              line-height: 32px;
              text-align: center;
              color: #fff;
              // background: #6b63b5;
              border: 1px solid #fff;
              border-radius: 20px;
              margin-right: 13px;
            }
            &/deep/.el-form-item__content{
             margin-left: 0!important;
             .el-input,.el-radio-group {
              width: 263px;
              height: 78px;
              text-align: center;
              border-radius: 20px;
              .el-input__inner{
                height: 100%;
                border-radius: 20px;
                text-align: center;
                border:1px solid #6b63b5;
                background: rgba(250, 250, 250, 0);
                color: #fff;
              }
             }
             .el-radio-group{
               text-align: center;
               line-height: 78px;
                border:1px solid #6b63b5;
                .el-radio{
                 color: #fff;
                }
             }
            }
          }
        }
      }
    }
    }
  }
  .footer{
    height: 78px;
    position: relative;
    z-index: 99;
    .footer{
      padding-top: 0;
    }
  }
}
</style>
