# react-ssr
>Part1. 实现一个基础的React组件 ssr
>>SSR与CSR的区别
      + 客户端渲染 的弊端 :首屏渲染比较慢 不利于SEO 首屏的html加载是通过js渲染出来的
      + 服务端渲染 的优势 : 首屏渲染比较快 利于SEO  在服务端直接返回html
>>实现一个SSR
      ```
        import express from ‘express’;
        import { renderToString  } from ‘react-dom/server’;
        import App from ‘../‘;
        const app = express();
        app.get(‘/‘, (req, res) => {
            const content = renderToString(<App/>);
            res.send(`

                <html>
                    <head>
                        <title>服务端渲染</title>
                    </head>
                    <body>
                        <div id="root">${ content }</div>
                        <script src="/main.js"></script>
                    </body>
                </html>    
            `)
        })
        app.listen(9090);
      ```
