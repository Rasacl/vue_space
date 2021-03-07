<template>
  <div id="app">
  </div>
</template>

<style lang="less">
#app{
  position: relative;
  z-index: -1;
  background:
  url(../public/shouye/background.png) no-repeat;
}
#app::after{
  content: '';
  position: absolute;
  bottom: 0;
  top: 343px;
  height: 100%;
  width: 100%;
  background: url(../public/shouye/bg_content.png) no-repeat;
}
.el-main{
  height: 100%;
}
</style>
