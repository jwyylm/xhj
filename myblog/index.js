//入口模块
const express = require('express');
// 创建主应用
const app = express();

// 模板引擎的设置
app.set('view engine','html');
app.set('views',`${__dirname}/views`);
app.set('html',require('ejs').renderFile);

// 静态资源配置
app.use(express.static('static'));
// 监听服务器
app.listen(3000);

