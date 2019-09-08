// 服务端webpack打包入口
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import routers from '../routers';
import { Provider } from 'react-redux';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { getStore } from '../store';

const store  = getStore();
const app = express();
app.use(express.static('public'));

const handleRoutes = (promises) => {
    return (routers) => {
        routers.map(route => {
            let { load } = route.component;
            if (load) {
                let promise = new Promise((resolve, reject) => {
                    load(store).then(res => {
                        resolve(res)
                    })
                })
                promises.push(promise)
            }
            if (route.routes && Array.isArray(route.routes)) {
                handleRoutes(promises)(route.routes)
            }
        })
    }
}

app.get('*', (req, res) => {
    let matchRet = matchRoutes(routers, req.path);
    let promises = [];

    // matchRet.forEach(item => {
    //     let { load } = item.route.component;
    //     if (load) {
    //         let promise = new Promise((resolve, reject) => {
    //             load(store).then(res => {
    //                 resolve(res)
    //             })
    //         })
    //         promises.push(promise)
    //     }
    // })

    handleRoutes(promises)(routers)

    Promise.all(promises)
        .then(() => {
            let context = { css: [] }
            let content = renderToString(
                <Provider store={ store }>
                    <StaticRouter location={ req.url } context={ context }>
                        {/* {
                            routers.map((temp, index) => {
                                return <Route key={ temp.key } {...temp}/>
                            })
                        } */}
                        {
                            renderRoutes(routers)
                        }
                    </StaticRouter>
                </Provider>
            );
            const cssStr = context.css.length ? context.css.join('\n') : '';
            console.log(cssStr)
            //拼接代码
            res.send(
                `
                    <html>
                        <head>
                            <title>服务端渲染</title>
                            <style>${cssStr}</style>
                        </head>
                        <body>
                            <div id="root">${ content }</div>
                            <script>
                                window._context = ${JSON.stringify(store.getState())}
                            </script>
                            <script src="/main.js"></script>
                        </body>
                    </html>
                `
            )
        })
})

app.listen(9090, () => {
    console.log(`service is start, port is 9090`)
})