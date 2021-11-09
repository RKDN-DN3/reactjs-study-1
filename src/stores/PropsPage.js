import React,{ Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppProps from '../components/Props/AppProps' 
import todoCountApp from '../reducers/CountReducers'

let store = createStore(todoCountApp)

export default class PropsPage extends Component {
    render() {
        return(
            <Provider store = {store}>
                <AppProps />
            </Provider>
        )
    }
 }

