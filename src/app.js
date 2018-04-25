

import React from 'react'
import ReactDOM from 'react-dom'

import Main from 'components/main'

const app = () => {
  let root_div = document.createElement('div')
  root_div.setAttribute('id','root')

  if (document.body !== null) {
    document.body.appendChild(root_div)
  }

  ReactDOM.render(<Main/>,root_div)
}

window.onload = app

