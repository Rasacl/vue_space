<template>
  <div class="child">
     <div class="title">
      <h3>亲爱的自己</h3>
      <span>DEAR SELF</span>
    </div>
    <div class="life">
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/xykjkj_teacher_img_01.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>教学困境</h4>
          <span>Teaching</span>
        </div>
        </div>
      </div>
      <div class="cub">
          <img src="../assets/images/logo.png" alt="" class="cub_img">
      </div>
      <div class="cub">
         <div class="cub-rocate">
          <img src="../assets/images/space/xykjkj_teacher_img_02.png" alt="">
        <div class="cub_all"></div>
        <div class="introu">
          <h4>工作困境</h4>
          <span>Work</span>
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
      width: 300px;
      height: 300px;
      background: #fff;
      border-radius: 50%;
      position: relative;
      .cub_img{
          // background: red;
          filter: drop-shadow(0px 0px rgb(163, 38, 157));
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
        // position: absolute;
        // left: -66px;
        // top: -40px;
        text-align: center;
        .cub_all{
          width: 270px;
          height: 270px;
          border-radius: 50%;
          border: 1px solid #fff;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
        }
        .introu{
          position: absolute;
          left: 0;
          right: 0;
          top: 234px;
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
