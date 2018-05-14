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
  fontSize: '0.8em',
  minHeight: '10em',
  fontFamily: "'Quicksand', sans-serif"
}

const current_version_text = pick({
  fr: "Version actuelle",
  en: "Current version"
})

const current_version = (<span style={{color: '#08c37d'}}>• {current_version_text}</span>);

export default function(props) {
  let version = (props.isCurrent ? current_version : (<span></span>));

  return (
    <div style={cell_style}>
      <span style={{fontSize:'1.5em'}}><strong>{props.version}</strong> - {props.date} {version}</span>
      <br />
      <span>{props.content}</span>
    </div>
  )
}