<template>
  <div class="Shou">
    <div>
      <el-container>
      <el-header>
  <div class="Header-Comtainer">
    <div class="wrap wrap1">
      <p>🥰</p>
      <img src="../../public/shouye/bear hug1.png" alt="">
    </div>
    <div class="line"></div>
    <div class="nav wrap1">
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
    <div class="logo wrap1">
      <div class="logoN">
        <img src="../../public/shouye/bear hug.png" alt="">
      </div>
      <div class="logoT">
        <img src="../../public/shouye/text.png" alt="">
      </div>
    </div>
    <div class="photo wrap1">
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
    <div class="wriper wrap1">
      <div class="text">
        <p>困境空间</p>
        <p class="two">Dilemma Space</p>
      </div>
      <div class="wrap_img">
        <div class="img">
          <div class="top">
            <img src="../../public/shouye/bg_space_family.png" alt="">
          </div>
          <div class="outer">
            <img src="../../public/shouye/wireframe_family.png" alt="">
            <p class="title">困境空间</p>
          </div>
        </div>
        <div class="img">
          <div class="top">
            <img src="../../public/shouye/bg_space_school.png" alt="">
          </div>
          <div class="outer">
            <img src="../../public/shouye/wireframe_school.png" alt="">
            <p class="title">校园困境空间</p>
          </div>
        </div>
        <div class="img">
          <div class="top">
            <img src="../../public/shouye/bg_space_work.png" alt="">
          </div>
          <div class="outer">
            <img src="../../public/shouye/wireframe_work.png" alt="">
            <p class="title">职场困境空间</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line1 wrap1"></div>
    <div class="tree">
      <div class="introudce wrap2">
        <div class="car">
          <img src="../../public/shouye/img_tree hole.png" alt="">
        </div>
        <div class="titleText">
          <div class="topTitle">
            <h3>困境树洞</h3>
            <span>Dilemma Tree Hole</span>
          </div>
          <div class="loTiltie">
            <p>Keep your face to the sunshine and you cannot see the shadow.</p>
            <p>It's what sunflowers do.</p>
            <p>每天早上醒来把你的朝向太阳.</p>
            <p>你将永远不会害怕黑暗阴影.</p>
            <p>像向日葵一样永远面对阳光毫不退缩的勇气露出灿烂的笑容.</p>
          </div>
          <div class="enter">
            <span>进入</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tree">
      <div class="introudce wrap2">
        <div class="titleText top2">
          <div class="topTitle">
            <h3>困境碎片</h3>
            <span>Dilemma Fragment</span>
          </div>
          <div class="loTiltie">
            <p>There is no limit the goodness of life.</p>
            <p>It's grows more abundant with each new encounter.</p>
            <p>生命的美好没有界限.</p>
            <p>每一次相遇都会使这美好越发丰富.</p>
          </div>
          <div class="enter right">
            <span>进入</span>
          </div>
        </div>
        <div class="car">
          <img src="../../public/shouye/bg_frag.png" alt="">
        </div>
      </div>
    </div>
    <div class="line1 wrap2 line2"></div>
    <div class="constatr wrap1">
      <div class="conTitle">
        <h3>困境匹配</h3>
        <span>Dilemma Matching</span>
      </div>
     <div class="allImg">
        <div class="photoImg">
        <img src="../../public/shouye/bg_mat_image.png" alt="">
        <div class="btn">
          <span>困境匹配</span>
      </div>
    </div>
      <div class="photoImg">
        <img src="../../public/shouye/bg_mat_img.png" alt="">
        <div class="btn">
          <span>匹配倒计时</span>
        </div>
      </div>
      </div>
    </div>
    <div class="line1 wrap2 line3"></div>
    <Footer></Footer>
  </div>
      </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import Footer from '../views/Footer'
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  components: {
    Footer
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
.wrap1{
  width: 1100px;
  height: 100%;
  // background: red;
  margin: 0 auto;
}
.wrap2{
  width: 1440px;
  // height: 100%;
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
    background: rgba(250, 250, 250, 0.2);
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
  top:105px;
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
  // width: 100%;
  height:406px;
  margin-bottom: 77px;
  .text{
    margin-bottom: 43px;
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
  .wrap_img{
    // width: 347px;
    height: 313px;
    display: flex;
    justify-content: space-between;
    .img{
      position: relative;
      .outer{
        position: absolute;
        left: 18px;
        top: 18px;
        // position: relative;
        .title{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          margin: 0 0 20px 0;
      }
      }
    }
  }
}
.line1{
  height: 1px;
  background: red;
  margin-bottom: 130px;
}
.tree{
  width: 100%;
  height: 442px;
  margin-bottom: 76px;
  .introudce{
    display: flex;
    .car{
      width: 658px;
      height: 442px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .titleText{
      box-sizing: border-box;
      width: 780px;
      height: 442px;
      border: 1px solid rgba(221, 27, 27, 0.4);
      padding-left: 99px;
      padding-top: 77px;
      .topTitle{
        h3{
          font-weight: none;
          font-size: 25px;
          margin: 0 0 20px 0;
        }
        span{
          display:block;
          margin-bottom: 50px;
        }
      }
      .loTiltie{
        margin-bottom: 20px;
        p{
          margin: 0 0 14px 0;
        }
      }
      .enter{
        width: 103px;
        height: 32px;
        background: #6d65b7;
        text-align: center;
        line-height: 32px;
        color: #fff;
        border-radius: 24%;
      }
    }
    .top2{
      text-align: right;
      padding-right: 99px;
      position: relative;
      .right{
        position: absolute;
        right: 99px;
      }
    }
  }
}
.line2{
  margin-bottom: 80px;
}
.constatr{
  .conTitle{
    h3{
          font-weight: none;
          font-size: 25px;
          margin: 0 0 20px 0;
        }
        span{
          display:block;
          margin-bottom: 43px;
        }
  }
  .allImg{
    display: flex;
    justify-content: space-around;
    margin-bottom: 97px;
    .photoImg{
      width: 400px;
      height: 352px;
      margin: 0 50px;
      text-align: center;
      position: relative;
      border-radius: 5%;
      background-color: #50515c;
      img{
        // position: absolute;
        width: 100%;
        height: 65%;
        border-top-right-radius: 5%;
        border-top-left-radius: 5%;
      }
      .btn{
        width: 155px;
        height: 47px;
        line-height: 47px;
        position: absolute;
        left: 0;
        top: 65%;
        right: 0;
        bottom: 0;
        margin: auto;
        background: #242633;
        color: #fff;
        border-radius: 46%;
        cursor: pointer;
      }
    }
  }
}
.line3{
  margin: 0;
}
}
</style>
