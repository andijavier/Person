import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUrl } from '../store/action'

function SearchList (props) {
  const dispatch = useDispatch()
  const data = props.data
  const num = props.num

  function goToUrl() {
    dispatch(setUrl(data.link))
  }

  return (
    <>
      <tr>
        <th scope="row">{num}</th>
        <td style={{ cursor: 'pointer' }} onClick={goToUrl}>{data.title}</td>
        <td style={{ cursor: 'pointer' }} onClick={goToUrl}>{data.link}</td>
      </tr>
    </>
  )
}

export default SearchList