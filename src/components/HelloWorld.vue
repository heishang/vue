<template>
    <div id="app">
        
        <router-link to="FirstQuestion" tag="div">
          <img src="../assets/images/下载.png" alt="">
        </router-link>
        

    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    #app {
      box-sizing: border-box;
      background: url('../assets/images/1-2.png') no-repeat;
      background-size: 80%;
      width: 84%;
      height: 240px;
      // margin-left: 40px;
      position: absolute;
      left: 16%;
      top: 35%;
      img {
        width: 26%;
        position: absolute;
        top: 85%;
        left: 27%;
      }
    }
</style>



