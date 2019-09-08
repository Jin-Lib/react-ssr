import React from 'react';
import ReactDOM from 'react-dom';
import routers from '../routers';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';
import { renderRoutes } from 'react-router-config';

const store  = getClientStore();

// 注水
ReactDOM.hydrate(
    <Provider store={ store }>
        <BrowserRouter>
            {/* {
                routers.map(temp => {
                    return <Route {...temp}/>
                })
            } */}
            {
                renderRoutes(routers)
            }
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)