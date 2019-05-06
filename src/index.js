import React from 'react'
import ReactDom from 'react-dom'
import getRouter from './router/index'

if (module.hot) {
  console.log('????')
  module.hot.accept()
}

ReactDom.render(
  getRouter(),
  document.getElementById('app'),
)