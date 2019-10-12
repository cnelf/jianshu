import * as actionTypes from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/searchList.json').then((res) => {
      if (res.data.success) {
        let list = res.data.data
        dispatch(changeList(list))
      }
    }).catch(e => {
      console.log(e)
    })
  }
}