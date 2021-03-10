<template>
  <div class="marry">
     <div class="title">
      <h3>亲爱的自己</h3>
      <span>DEAR SELF</span>
    </div>
    <div class="life">
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/jtkjkj_xh_img_01.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>生活困境</h4>
          <span>Live</span>
        </div>
        </div>
      </div>
      <div class="cub">
        <div class="cub-rocate">
          <img src="../assets/images/space/jtkjkj_xh_img_02.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>育儿困境</h4>
          <span>Child ReaRearing</span>
        </div>
        </div>
      </div>
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/jtkjkj_xh_img_03.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>养胎困境</h4>
          <span>Reproduction</span>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.marry{
  .title{
    h3{
      margin: 0;
      font-weight: normal;
      font-size: 25px;
    }
    span{
      font-size: 8px;
      color:#909090;
    }
  }
  .life{
    padding-top: 60px;
    display: flex;
    justify-content: space-around;
    .cub{
      width: 228px;
      height: 228px;
      transform: rotateZ(45deg);
      background: #fff;
      position: relative;
      .cub-rocate{
        transform: rotateZ(-45deg);
        position: absolute;
        left: -66px;
        top: -40px;
        text-align: center;
        .cub_all{
          width: 205px;
          height: 205px;
          border: 1px solid #fff;
          position: absolute;
          transform: rotateZ(45deg);
          top: 59px;
          left: 57px;
        }
        .introu{
          h4{
            margin: 0;
            font-weight: normal;
          }
          span{
            font-size: 8px;
            color:#909090;
          }
        }
      }
    }
  }
}
</style>
