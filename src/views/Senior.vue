<template>
  <div class="child">
     <div class="title">
      <h3>亲爱的自己</h3>
      <span>DEAR SELF</span>
    </div>
    <div class="life">
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/zckjkj_leader_img_01.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>知识焦虑困境</h4>
          <span>Anxiety</span>
        </div>
        </div>
      </div>
      <div class="cub">
          <img src="../assets/images/logo.png" alt="" class="cub_img">
      </div>
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/zckjkj_leader_img_02.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>管理困境</h4>
          <span>Management</span>
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
.child{
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
      .cub_img{
          // background: red;
          filter: drop-shadow(0px 0px rgb(163, 38, 157));
          transform: rotateZ(-45deg);
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
      .cub-rocate{
        // width: 100%;
        // height: 100%;
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
