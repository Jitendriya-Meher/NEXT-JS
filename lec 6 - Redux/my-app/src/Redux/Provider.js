"use client"

import React from 'react'
import { Provider } from 'react-redux'
import store from "./Store"

const provider = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default provider