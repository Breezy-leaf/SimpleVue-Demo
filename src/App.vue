<script setup>
import QuickStart from './components/QuickStart.vue';
import Counter from './components/Counter.vue';
import Docs from './components/Docs.vue';
import TodoList from './components/TodoList.vue';
import { ref } from 'vue';
const currentExample = ref('QuickStart');
</script>
<template>
  <header>
    <img src="./assets/vue.svg" alt="图标" class="logo">
    <h1>这是一个模仿的Vue示例项目</h1>
  </header>
  <main>
    <div class="nav-example">
      <div  @click="currentExample = 'QuickStart'" :class="{active:currentExample==='QuickStart'}">
        快速开始
      </div>
      <!-- 点击此按钮时，被渲染为： class="active" -->
      <div @click="currentExample='Counter'" :class="{active:currentExample==='Counter'}">
        计算器
      </div>
      <div @click="currentExample='TodoList'" :class="{active:currentExample==='TodoList'}">
        Todo列表
      </div>
      <div @click="currentExample = 'Docs'" :class="{active:currentExample ==='Docs'}">
        文档
      </div>
    </div>
    <QuickStart v-if="currentExample ==='QuickStart'"></QuickStart>
    <Counter v-if="currentExample ==='Counter'"></Counter>
    <TodoList v-if="currentExample ==='TodoList'"></TodoList>
    <Docs v-if="currentExample ==='Docs'"></Docs>
  </main>
</template>
<style scoped>
header{
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
h1 {
  color: #42b983;
  font-size: 2rem;
  margin-top: 1rem;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.nav-example{
  display: flex;
  max-width: 800px; /* 改为 max-width 更灵活 */
  /* 设置max-width，浏览器无论缩小或放大盒子最大就是800px */
  /* width: 100%; */
  height: 60px; 
  align-items: center;
  justify-content: space-around; /* 均匀分布间距 */
  margin: 0 auto;
  /* auto使盒子外距离相等 */
  padding: 0 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.nav-example > div {
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}
.nav-example > div.active {
  background-color: #42b983;
  color: white;
}
</style>