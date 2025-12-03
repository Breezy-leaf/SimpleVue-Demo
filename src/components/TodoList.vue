<script setup>
import { computed, ref } from 'vue';
const newEvent = ref('');
let id = 0;
const events = ref([{ id: id++, text: '学习Vue3', done: false },
                { id: id++, text: '学习Vue3',done:false },
                { id: id++, text: '学习Vue3' ,done:false}]);
                
const complateEvent = ref(false);
function addEvent() { 
  if (newEvent.value) { 
    events.value.push({ id: id++, text: newEvent.value, done: false })
    newEvent.value = ''
  }
}
function delateEvent(event) { 
  events.value = events.value.filter((t) => t.id !== event.id)
}
const filteredEvents = computed(() =>  { 
  return complateEvent.value?events.value.filter(t =>!t.done):events.value
})
</script>
<template>
  <div class="todolist-container">
    <p>待办事项Demo</p>
    <form @submit.prevent="addEvent">
      <input type="text" v-model="newEvent" placeholder="请输入待办事项">
      <button>添加</button>
    </form>
    <div class="event-list">
      <ul>
        <li v-for="event in filteredEvents" :key="event.id">
          <input type="checkbox" v-model="event.done">
          {{event.text}}
          <button @click="delateEvent(event)">删除</button>
        </li>
      </ul>  
    </div>
     <button @click="complateEvent=!complateEvent" class="hideButton">
      {{complateEvent?'showALL':'hideComplated'}}
    </button>
  </div>
</template>
<style scoped>
.todolist-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: linear-gradient(145deg, #f5f7fa 0%, #e4edf5 100%);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', 'PingFang SC', sans-serif;
}

p {
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

form {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
}

input[type="text"] {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e6ed;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fff;
}

input[type="text"]:focus {
  outline: none;
  border-color: #4da8da;
  box-shadow: 0 0 0 3px rgba(77, 168, 218, 0.2);
}

.event-list {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 14px 18px;
  border-bottom: 1px solid #f0f4f8;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}

li:hover {
  background: #f8fafd;
}

input[type="checkbox"] {
  appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid #4da8da;
  border-radius: 6px;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
}

input[type="checkbox"]:checked {
  background: #4da8da;
}

input[type="checkbox"]:checked::after {
  content: "✓";
  color: white;
  position: absolute;
  font-size: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

li input[type="checkbox"] + span {
  text-decoration: none;
  transition: color 0.2s;
}

li input[type="checkbox"]:checked + span {
  text-decoration: line-through;
  color: #7f8c8d;
  opacity: 0.8;
}

button {
  background: #4da8da;
  color: white;
  border: none;
  text-align: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(77, 168, 218, 0.3);
}

button:hover {
  background: #3a91c1;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(77, 168, 218, 0.4);
}

button:active {
  transform: translateY(0);
}

li button {
  background: #ff6b6b;
  padding: 6px 12px;
  font-size: 0.9rem;
  margin-left: auto;
  box-shadow: none;
}

li button:hover {
  background: #ff5252;
}

button[style*="complateEvent"] {
  width: 100%;
  margin-top: 1.2rem;
  padding: 12px;
  background: linear-gradient(to right, #4da8da, #556cd6);
  font-size: 1.1rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(77, 168, 218, 0.35);
}
/* 保持原有所有样式不变，在最后添加： */
.hideButton {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;
  max-width: 80%;
}
button[style*="complateEvent"]:hover {
  background: linear-gradient(to right, #3a91c1, #4a5ec9);
}
</style>