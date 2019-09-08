import App from './containers/App';
import Login from './containers/Login';
import Menu from './containers/Menu';

export default [
    {
        path: '/home',
        component: App,
        exact: false,
        key: 'App',
        routes: [
            {
                path: '/home/login',
                component: Login,
                exact: true,
                key: '/login'
            },
            {
                path: '/home/menu',
                component: Menu,
                exact: true,
                key: 'menu'
            },
        ]
    },
]

// export default (
//     <div>
//         <Route path="/" exact component={ App }/>
//         <Route path="/login" exact component={ Login }/>
//         <Route path="/menu" exact component={ Menu }/>
//     </div>
// )