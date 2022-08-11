import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticate } from '../../utils/localstorage'

type Props = {
  children: JSX.Element
}

const PrivateRoute = (props: Props) => {
  if(!isAuthenticate()) {
    console.log(!isAuthenticate())
    return <Navigate to="/login" /> 
  }
  return props.children
}

export default PrivateRoute