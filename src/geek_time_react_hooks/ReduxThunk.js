import { useDispatch } from 'react-redux'

function fetchData() {
  return dispatch => {
    dispatch({ type: 'FETCH_DATA_BEGIN' })
    fetch('/some-url')
      .then(res => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', data: res })
      })
      .catch(err => {
        dispatch({ type: 'FETCH_DATA_FAILURE', error: err })
      })
  }
}

function DataList() {
  const dispatch = useDispatch()
  // dispatch了一个函数由redux-thunk中间件去执行
  dispatch(fetchData())
}
