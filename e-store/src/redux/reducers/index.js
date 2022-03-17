import { combineReducers } from 'redux'
import { topMenu } from './topMenu'
import { product } from './product'

const rootReducer = combineReducers({
  topMenu: topMenu,
  product: product,
})

export default rootReducer
