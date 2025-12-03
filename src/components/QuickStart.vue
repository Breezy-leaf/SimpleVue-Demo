<script setup>

</script>
<template>
    <div class="quickstart-container">
        <div class="setup-wrapper">
            <div class="setup">
                <div class="row">
                    <div class="startnum">1</div>
                    <h2>克隆项目地址</h2>   
                </div>
                <div class="text-content">
                    <div>git clone [项目地址]</div>
                    <span>或下载项目ZIP包解压</span>
                </div>
            </div>
            <div class="setup">
                <div class="row">
                    <div class="startnum">2</div>
                    <h2>安装项目依赖</h2>
                </div>
                <div class="text-content">
                    <div>npm i</div>
                    <span>将安装package.json中定义的所有依赖包</span>
                </div>
            </div>
            <div class="setup">
                <div class="row">
                    <div class="startnum">3</div>
                    <h2>安装项目路由</h2>
                </div>
                <div class="text-content">
                    <div>npm install vue-router</div>
                    <span>将安装vue-router</span>
                </div>
            </div>
            <div class="setup">
                <div class="row">
                    <div class="startnum">4</div>
                    <h2>启动开发服务器</h2>
                </div>
                <div class="text-content">
                    <div>npm run dev或npm run serve</div>
                    <span>在vscode中按下Ctrl+链接在浏览器查看该项目</span>    
                </div>
            </div>
            <div class="setup">
                <div class="row">
                    <div class="startnum">5</div>
                    <h2>探索项目</h2>
                </div>
                <div class="text-content">
                </div>
            </div>
            <div class="setup">
                <div class="row">
                    <div class="startnum">6</div>
                    <h2>修改代码，重写项目</h2>
                </div>
                <div class="text-content"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        .quickstart-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            min-height: 100vh;
            background-color: rgb(255, 255, 255);
            padding: 40px 20px;
        }

        .setup-wrapper {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
        }

        .setup {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            min-height: 80px;
            padding: 20px 0;
            border-bottom: 1px solid #f0f0f0;
        }

        .setup:last-child {
            border-bottom: none;
        }

        .row {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 12px;
        }

        .startnum {
            width: 55px;
            height: 55px;
            line-height: 55px;
            background-color: #42b983;
            color: white;
            text-align: center;
            border-radius: 50%;
            margin-right: 20px;
            flex-shrink: 0;
        }

        .row h2 {
            width: auto;
            margin: 0;
            text-align: left;
            font-weight: 600;
            font-size: 18px;
        }

        .text-content {
            width: 100%;
            padding-left: 75px; /* 55px + 20px */
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .text-content div {
            color: #333;
            font-weight: 500;
            font-family: 'Courier New', monospace;
            background-color: #f5f5f5;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
        }

        .text-content span {
            color: #666;
            font-size: 13px;
            line-height: 1.5;
        }
</style>