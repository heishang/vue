<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
    #app {
      width: 100%;
      height:800px;
      background-image: url('./assets/images/1-1.jpg'); 
      background-size: 100%;
    }
    router-view {
      background-color: black; 
    }
</style>

