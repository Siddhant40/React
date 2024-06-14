/* eslint-disable react/prop-types */
// import React from 'react'
import '../App.css'
function Col(props) {
  return (
    <botton  className='box' onClick={props.onClick} style={{backgroundColor:props.color}} >
      {props.color}
    </botton>
  )
}

export default Col
