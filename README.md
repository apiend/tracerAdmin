### TracerAdmin

> tracer admin


 

#### 兼容性怎么样

这完全取决于 Babel 配置

如果你需要兼容 IE 8 以下版本浏览器，建议你不要用，因为 Vue 不支持，改成 jQuery 或许还可以

另外不支持 Proxy 等特性的机器也要小心，无论是 Babel 还是 polyfill ，Proxy 都是没有实现的，有很多类似 proxy-polyfill 的 polyfill ，也只能通过 Object.defineProperty() 方法来模拟以下 getter 和 setter ，其他牛逼的特性，支持不来

 

#### 有哪些已有的坑

1. vue-router 不能用 gulp-uglify 混淆压缩，会报回调已达最大值的错误，所以 build 脚本把 vue-router 略过了，只编译其他 lib 和 项目代码，开发的时候，为了良好的调试体验，可以考虑引入未混淆的 vue-router ，上生产环境的话，还是建议 vue-router.min ，减少 http 压力

2. VueRouter 的路由模式要注意

3. 还没发现……

#### 如何运行编译？

1. 开发环境

    ```bash
    npm run dev
    ```

    `./prepro-server` 是试生产环境下的 node 服务器，有需要可以通过

    ```bash
    node ./prepro-server/index.js
    ```

    开启服务，如果需要 php 模板作为入口，请在 Apache 、 Nginx 等服务器配置好 php 运行时，并将根目录下的 `index.html` 作为项目入口

    `./prepro-server` 下还有一个 `proxy-map.js` 脚本，用来配置反向代理，默认是开启并使用的，如果不需要，可以无视它

2. 生产环境

    ```bash
    npm run build
    ```

    ~~build 完之后，记得修改入口脚本的引入路径~~

    build 完之后，dist 目录下的所有文件即为部署物料，打包部署即可

有啥问题可以联系我试试，不一定有回复
 