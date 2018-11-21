<template>
    <div id="app">
        <div class="white">
            <span>第一题</span>
        </div>
        <router-link to="/Secondquestions" tag="div" >
          <img src="../assets/images/下载-1.png" alt="" @click.prevent="louter_link">
        </router-link>

        <!-- 主体框 -->
        <div class="Title">
        <header>题目一</header>
            <ul>
                <li>
                    <span class="li_span" @click="click_span($event)">A</span>
                    <span class="li_text">选我!选我！我是正确的</span>
                </li>
                <li>                    
                    <span class="li_span" @click="click_span($event)">B</span>                    
                    <span class="li_text">选我!选我！A在说谎</span>

                </li>
                <li>                    
                    <span class="li_span" @click="click_span($event)">C</span>
                    <span class="li_text">选我!选我！我是真的</span>

                </li>
                <li>                    
                    <span class="li_span" @click="click_span($event)">D</span>                    
                    <span class="li_text">C是骗子！</span>

                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import $ from 'jquery'
export default {
    date: {
        return:{
            length:[''],
        }
    },
    methods:{
        click_span (event){
            console.log(event);
            // $(event).addClass('li_span-active')
            // vue 项目避免操作dom元素

            // 获取当前触发:hover 的元素的长度

            this.length = [$(event).hover(function(event){
                return event;
            })].length;
        },

        louter_link(){
            if(this.length !== 1){
                // mui.alert( "请选择你的答案", "跳转错误" )
                alert('选择答案');
                // window.location.reload();
                return; 
            }else{
                this.length = [''];
                location.href='http://localhost:8080/#/Secondquestions'

            }
        }

    }
}
</script>
<style lang="less" scoped>
    // active 样式

    .li_span-active {
        background-color: #ffd400;
        color: #575757;
    }


    #app {
      box-sizing: border-box;
      background: url('../assets/images/下载-3.png') no-repeat;
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
    .white {
        background: url("../assets/images/下载-2.png") no-repeat ;
        background-size: 100%;
        width: 45%;
        height: 380px;
        position: absolute;
        bottom: 80%;
        left: 48%;
        span {
            position: absolute;
            bottom: 36%;
            left: 32%;
            color: red;
        }
    }
    .Title {
        header {
            color: #d3d3d3;
            box-sizing: border-box;
            font-weight: lighter;
            font-family: 'Microsoft YaHei';
        }
        position: absolute;
        bottom: 30%;
        left: 15%;
        ul {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 0;
            li {
                
                width: 100%;
                list-style: none;
            }
            .li_span {
                height: 12px;
                width: 12px;
                border: 1px solid #fff;
                border-radius: 50%;
                line-height: 12px;
                text-align: center;
                margin-right: 3%;
                font-size: 5%;
                font-family: 'Arial';
                display: inline-block;
                color: #fff;
                vertical-align: middle;
    
            }
            .li_span:hover {
                background-color: #ffd400;
                color: #575757;
            }
            .li_text {
                padding: 0;
                margin: 0;
                list-style: none;
                font-style: normal;
                text-decoration: none;
                border: none;
                color: #fff;
                box-sizing: border-box;
                font-weight: lighter;
                font-family: 'Microsoft YaHei';
            }
        }
    }
</style>
