import {createStore} from 'redux';
import reducer from './Reducer/reducer';

export default () =>{

    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );
}