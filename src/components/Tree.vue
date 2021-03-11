<template>
  <div class="tree">
    <div class="header">
      <Header></Header>
    </div>
    <div class="main">
      <div class="table">
        <div class="from">
          <el-form label-width="120px" label-position="left">
            <el-form-item label="困境树洞">
              <el-input type="textarea" placeholder="请把你的困境描述出来，为你找到相册的人"></el-input>
            </el-form-item>
            <el-form-item label="困境标签">
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                :disable-transitions="false"
                @close="handleClose(tag)"
              >
                {{ tag }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="showInput"
                >+</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button  type="primary">立即创建</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '../views/Header'
import Footer from '../views/Footer'
export default {
  data () {
    return {
      dynamicTags: ['职场', '职场新人', '职场PUA'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less" scoped>
.tree {
  width: 100%;
  .header /deep/ .head .logo {
    background: #242633;
  }
  .header /deep/ .head .nav {
    background: #10141b;
  }
  .main {
    width: 100%;
    height: 1088px;
    background: url(../assets/images/tree/tree_bgi.jpg) no-repeat;
    background-size: 100% 100%;
    position: relative;
    .table {
      width: 840px;
      height: 613px;
      background: rgba(250, 250, 250, .3);
      border-radius: 5%;
      position: absolute;
      left: 0;
      right: 0;
      top: 200px;
      bottom: 0;
      margin: auto;
      .from {
        position: relative;
        width: 100%;
        height: 100%;
        transform: translateY(-50%);
        .el-form {
          width: 582px;
          height: 482px;
          // background: red;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(15%);
          &/deep/.el-form-item__label {
            color: #cdd3d8;
            font-size: 15px;
          }
          .el-textarea {
            width: 460px;
            height: 250px;
            &/deep/.el-textarea__inner {
              width: 100%;
              height: 100%;
              background: rgba(250, 250, 250, 0);
            }
          }
          &/deep/.el-tag{
            &:first-child{
              margin-left: 0;
            }
             margin-left: 20px;
             width: 84px;
             height: 40px;
             line-height: 40px;
             text-align: center;
             border-radius: 50%;
             font-size: 15px;
             color: #cdd3d8;
             background-color: rgba(250, 250, 250, 0);
             border: 2px solid #fff;
          }
          .button-new-tag {
            width: 84px;
             margin-left: 20px;
             height: 40px;
             line-height: 40px;
             padding-top: 0;
             padding-bottom: 0;
              text-align: center;
             border-radius: 50%;
             font-size: 20px;
             color: #6b63b5;
             background-color: rgb(250, 250, 250);
             border: 2px solid #fff;
          }
          .input-new-tag {
            width: 90px;
            margin-left: 10px;
            vertical-align: bottom;
           }
           &/deep/.el-form-item__content{
             margin-left: 0;
            //  text-align: center;
             .el-button--primary{
               position: absolute;
               left: -120px;
               top: 90px;
               right: 0;
               bottom: 0;
               margin: auto;
               color: #fff;
               background-color: #6b63b5;
               font-size: 20px;
             width: 180px;
             height: 54px;
             border: none;
           }
           }
        }
      }
    }
  }
  .footer {
    background: #17171a;
    color: #808080;
  }
}
</style>
