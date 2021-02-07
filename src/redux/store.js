  
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
const middlewares=[thunk]
middlewares.push(logger)
   middlewares.push(logger)


 const store=createStore(rootReducer,applyMiddleware(...middlewares))


 export  default store