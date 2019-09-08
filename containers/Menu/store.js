import axios from 'axios';
const get_list = "GET_LIST";

const getList = (payload = []) => {
    return {
        type: get_list,
        payload: payload
    }
}

const getListAsync = () => {
    return (dispath) => {
        return axios.get('http://localhost:9091/list')
            .then(res => {
                if (res.status === 200) {
                    if (res.data.data) {
                        return dispath(getList(res.data.data));
                    }
                }
            })
    }
}

const defaultState = [];

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case get_list:
            return [...action.payload];
        default:
            return state;
    }
}

export {
    getList,
    getListAsync
}

export default reducer;