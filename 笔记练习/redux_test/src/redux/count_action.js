import {INCREMENT,DECREMENT} from './constant'
export const createDecrementAction = data => ({type:DECREMENT,data})
export const createIncrementAction = data => ({type:INCREMENT,data})