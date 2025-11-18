<template>
    <p v-highlight>This sentence is important!</p>
</template>
<script setup>
    // 在 <script setup> 中定义以 v 开头的变量，Vue 会自动将其注册为局部指令
    const vHighlight = {
        mounted: (el) => {
            // 注意：您需要确保项目中存在 .is-highlight CSS 类
            el.classList.add('is-highlight')
            el.style.backgroundColor = 'yellow'; // 临时演示效果
            el.style.padding = '5px';
        }
    }
</script>