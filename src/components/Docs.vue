<script setup>
// 这里不需要复杂的逻辑，只是静态文档展示
// 如果未来需要动态加载文档内容，可以在这里编写
</script>

<template>
  <div class="docs-container">
    <header class="doc-header">
      <h1>Git 上传与同步指南</h1>
      <p class="subtitle">从初始化到日常开发的完整操作手册</p>
    </header>

    <!-- 第一部分：标准流程 -->
    <section class="doc-section">
      <h2>一、新项目上传（标准流程）</h2>
      <p>如果是全新的空项目，按照以下步骤操作：</p>
      <div class="code-block">
        <pre>
# 1. 初始化本地仓库
git init

# 2. 将所有文件加入暂存区
git add .

# 3. 提交到本地仓库
git commit -m "项目初始化"

# 4. 关联远程仓库 (只需执行一次)
git remote add origin git@github.com:Breezy-leaf/SimpleVue-Demo.git

# 5. 推送到 GitHub
git push -u origin main
        </pre>
      </div>
    </section>

    <!-- 第二部分：常见报错 -->
    <section class="doc-section warning-section">
      <h2>二、常见报错解决方案</h2>
      
      <div class="error-item">
        <h3>1. 错误：remote origin already exists</h3>
        <p><strong>原因：</strong> 本地已经关联过一个叫 origin 的远程地址了。</p>
        <p><strong>解决：</strong> 修改现有的 origin 地址。</p>
        <div class="code-block">
          <pre>git remote set-url origin git@github.com:Breezy-leaf/SimpleVue-Demo.git</pre>
        </div>
      </div>

      <div class="error-item">
        <h3>2. 错误：! [rejected] ... (fetch first)</h3>
        <p><strong>原因：</strong> 远程仓库有本地没有的文件（如 README.md），产生冲突。</p>
        <p><strong>解决（方案 A - 强行覆盖）：</strong> 适用于个人新项目，不在乎远程文件。</p>
        <div class="code-block">
          <pre>git push -f origin main</pre>
        </div>
        <p><strong>解决（方案 B - 拉取合并）：</strong> 适用于协作，保留远程文件。</p>
        <div class="code-block">
          <pre>git pull origin main --allow-unrelated-histories</pre>
        </div>
      </div>
    </section>

    <!-- 第三部分：日常开发 -->
    <section class="doc-section">
      <h2>三、VS Code 日常开发同步流程</h2>
      <p>配置好之后，日常写代码只需要“三板斧”：</p>
      <ol class="workflow-list">
        <li>
          <span class="step">Step 1</span> <strong>写代码 & 保存</strong> (Ctrl+S)
        </li>
        <li>
          <span class="step">Step 2</span> <strong>暂存 & 提交</strong> (git add + git commit)
          <div class="code-block mini">
            <pre>git add .
git commit -m "完成了Docs页面"</pre>
          </div>
        </li>
        <li>
          <span class="step">Step 3</span> <strong>推送</strong> (git push)
          <div class="code-block mini">
            <pre>git push</pre>
          </div>
          <p class="tip">提示：也可以直接点击 VS Code 左侧源代码管理面板的“同步更改”按钮。</p>
        </li>
      </ol>
      <!-- AI太JB强了 -->
    </section>

    <!-- 第四部分：用户配置 -->
    <section class="doc-section">
      <h2>四、用户身份配置</h2>
      <p>为了让 GitHub 正确统计你的贡献（小绿点），需要配置用户信息：</p>
      <div class="code-block">
        <pre>
# 查看当前配置
git config --global user.name
git config --global user.email

# 修改配置 (Email 最好和 GitHub 注册邮箱一致)
git config --global user.name "Breezy-leaf"
git config --global user.email "你的邮箱@example.com"
        </pre>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 容器样式 */
.docs-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* 头部样式 */
.doc-header {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #42b983;
  padding-bottom: 20px;
}

.doc-header h1 {
  color: #42b983; /* Vue Green */
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  font-size: 1.1em;
}

/* 章节通用样式 */
.doc-section {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 25px;
  margin-bottom: 30px;
}

.doc-section h2 {
  border-left: 5px solid #42b983;
  padding-left: 15px;
  margin-top: 0;
  color: #2c3e50;
}

.doc-section h3 {
  color: #2c3e50;
  margin-top: 20px;
}

/* 代码块样式 */
.code-block {
  background-color: #282c34;
  color: #abb2bf;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 15px 0;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
}

.code-block.mini {
  padding: 10px;
  margin: 5px 0;
}

pre {
  margin: 0;
}

/* 报错章节特殊样式 */
.warning-section {
  border: 1px solid #e6a23c;
  background-color: #fdf6ec;
}

.warning-section h2 {
  border-left-color: #e6a23c;
  color: #e6a23c;
}

/* 列表样式 */
.workflow-list {
  list-style: none;
  padding: 0;
}

.workflow-list li {
  margin-bottom: 20px;
}

.step {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-right: 10px;
  font-weight: bold;
}

.tip {
  font-size: 0.9em;
  color: #666;
  background-color: #f0f9eb;
  padding: 8px;
  border-radius: 4px;
  border-left: 3px solid #67c23a;
  margin-top: 10px;
}

/* 响应式调整 */
@media (max-width: 600px) {
  .docs-container {
    padding: 10px;
  }
  
  .doc-section {
    padding: 15px;
  }
}
</style>