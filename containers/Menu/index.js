import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getListAsync } from './store';

class Menu extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            this is MenuList Page!
            <ol>
                {
                    this.props.list.map((temp) => {
                        return <li key={ temp.id }>{ temp.name }</li>
                    })
                }
            </ol>
        </div>)
    }
}

// 服务端拉取数据
Menu.load = (store) => {
    return store.dispatch(getListAsync())
}

export default connect(
    (state) => ({ list: state.MenuList }),
    { getListAsync }
)(Menu);