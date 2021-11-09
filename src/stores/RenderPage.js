import React,{ Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppRender from '../components/Render/AppRender' 
import todoCountApp from '../reducers/CountReducers'

let store = createStore(todoCountApp)

export default class RenderPage extends Component {
    render() {
        return(
            <Provider store = {store}>
                <AppRender />
            </Provider>
        )
    }
 }

