<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <Header></Header>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  components: {
    Header
  }
}
</script>
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
.container{
  width: 1270px;
  height: 100%;
  margin: 0 auto;
  // background: red;
}
</style>
