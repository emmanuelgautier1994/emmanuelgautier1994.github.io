
import React from 'react'

import pick from 'languages'

const button_text = pick({
  fr:<span>DÉCOUVREZ L'APPLICATION</span>,
  en:<span>DISCOVER THE APP</span>
})

const button_style = {
  background: 'rgb(33, 150, 243)',
  color: 'rgb(255, 255, 255)',
  boxShadow: 'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
  borderRadius: '0.2em',
  letterSpacing: '0.1em',
  padding: '0.6em 1em',
  fontWeight: '500',
  fontSize: '1em',
}

export default function(props) {
  return (
    <div className='grid-x'>
      <div className='cell'>
          <button style={button_style} onClick={() => window.location = 'https://archifiltre.io'}>
            {button_text}
          </button>
      </div>
    </div>
  )
}