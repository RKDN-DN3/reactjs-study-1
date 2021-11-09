import React,{ Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import FormInput from '../components/FormInput/FormInput' 
import todoApp from '../reducers/ListReducer'

let store = createStore(todoApp)

export default class InputFormStore extends Component {
    render() {
        return( 
            <Provider store = {store}>
                <FormInput />
            </Provider>
        )
    }
 }







