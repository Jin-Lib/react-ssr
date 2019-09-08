import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import styles from './index.css';

class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.addClick = this.addClick.bind(this)
    }

    componentWillMount() {
        // 判断是否是服务端渲染环境
        if (this.props.staticContext) {
            this.props.staticContext.css = [];
            this.props.staticContext.css.push(styles._getCss())
        }
    }

    addClick() {
        this.setState((state) => {
            return {
                count: state.count+1
            }
        })
    }

    render() {
        const { count } = this.state;
        const { route } = this.props;
        return (<div className="AppPage">
            this is App Page! { count } <br/>
            <button onClick={this.addClick}>累加</button>
            {
                renderRoutes(route.routes)
            }
        </div>)
    }
}

export default App;