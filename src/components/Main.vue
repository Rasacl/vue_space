<template>
  <div class="main">
    <div class="logo">
      <div class="logoN">
        <img src="../../public/shouye/bear hug.png" alt="">
      </div>
      <div class="logoT"><img src="../../public/shouye/text.png" alt=""></div>
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
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
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
  margin: 0 auto;
}
.logoT{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 22px;
}
.photo{
  display: flex;
  // align-items: center;
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
</style>
