<template>
  <div class="cparents">
    <div class="title">
      <h3>亲爱的自己</h3>
      <span>DEAR SELF</span>
    </div>
    <div class="life">
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/jtkjkj_parents_img_01.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>教育困境</h4>
          <span>Education</span>
        </div>
        </div>
      </div>
      <div class="cub">
        <div class="cub-rocate">
          <img src="../assets/images/space/jtkjkj_parents_img_02.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>夫妻困境</h4>
          <span>Couple</span>
        </div>
        </div>
      </div>
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/jtkjkj_parents_img_03.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>婆媳困境</h4>
          <span>Relation</span>
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
.cparents{
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
