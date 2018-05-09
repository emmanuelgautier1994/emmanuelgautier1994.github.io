import React from 'react'

import pick from 'languages'

const cell_style = {
  background: 'white',
  MozBoxShadow: "0px 10px 30px 0px rgba(0,0,0,0.3)",
  WebkitBoxShadow: "0px 10px 30px 0px rgba(0,0,0,0.3)",
  boxShadow: "0px 10px 30px 0px rgba(0,0,0,0.3)",
  borderRadius: '2em',
  padding: '1em 2em 1em 2em',
  margin: "3em 2em 3em 2em",
  fontSize: '0.9em',
  minHeight: '10em',
  fontFamily: "'Quicksand', sans-serif"
}

export default function(props) {
  return (
    <div style={cell_style}>
      <span style={{fontSize:'1.5em'}}><strong>{props.version}</strong> - {props.date}</span>
      <br />
      <span>{props.content}</span>
    </div>
  )
}