## 一.项目的初始化

``` yarn ```

生成package.json
* 记录项目的依赖

### 1.git的初始化

### 2.markdown的初始化
22

## 二.搭建项目

   1. 安装KOA
```yarn add koa```

   2. 编写基本的app


```JS
const Koa = require('koa')

const app = new Koa()

app.use((ctx,next) => {
    ctx.body = "Hello World ggggggggggggggg"
})


app.listen(3000, () => {
  console.log('server is running at port 3000: http://localhost:3000')
})

  3. 安装nodemon 自动重启服务
     1. 编写package.json脚本
    
``` Json
    "scripts": {
    "serve": "nodemon ./src/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

    4. 安装dotenv 读取配置文件



### 三.鉴权
    1. 安装jsonwebtoken.

