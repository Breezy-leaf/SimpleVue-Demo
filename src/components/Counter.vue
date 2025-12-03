<!-- <script>
export default {
    data() { 
        return {
            counter: 0
        }
    }, methods: {
        add() { 
            this.counter++;
        }, delate() { 
            this.counter--;
        }
    }
}
</script> -->
<script setup>
import { ref } from 'vue'
const counter = ref(0)
const add = () => { 
    counter.value++
}
const delate = () => { 
    counter.value--
}
</script>
<template>
    <div class="app-container">
        <div class="counter-container">
            <div class="main">
                <button @click="delate" class="delate">-</button>
                <div class="numCard">{{counter}}</div>
                <button @click="add" class="add">+</button>
            </div>
            <div class="ddouble-counter">
                <p>翻倍:{{counter*2}}</p>
            </div>
            <ul>
                <li>Vue2和Vue3的写法不同</li>
                <li>Vue3的写法使用ref()创建响应式变量，</li>
                <li>你可以取消注释，修改模版观察</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .app-container {
    display: flex;
    justify-content: center;
    min-height: 100vh;
     /* 可选：添加背景色 */
     background-color: #fff;
     
}

.counter-container {
  margin-top: 10px; /* 设置固定垂直位置（示例值） */
  width: 500px;
  height: 500px;
  background: #fff;
  border: 1px solid rgb(245,245,245);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.main{
    display: flex;
    flex-direction: row ;
    text-align: center;
    justify-content: center;
    margin-top: 50px;
}
.add{
    width: 100px;
    height: 100px;
    color: white;
    margin-top: 50px;
    margin-left: 10px;
    background-color: red;
    font-size: 65px;
    border: 0px;
}
.delate{
    width: 100px;
    height: 100px;
    color: white;
    margin-top: 50px;
    margin-right: 10px;
    background-color: red;
    font-size: 75px;
    border: 0px;
}
.numCard{
    width: 200px;
    height: 200px;
    background-color: lightblue;
    line-height: 200px;
    text-align: center;
    font-size: 80px;
    color: white;
}
.ddouble-counter{
    margin-top: 50px;
    text-align: center;
    font-size: 30px;
}
</style>