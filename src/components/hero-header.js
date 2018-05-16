
import React from 'react'
import CTA from 'components/cta'

import pick from 'languages'

import { t_a_center, h1, h4 } from 'css/cascade'


const sub_title_text = pick({
  fr:<span>Vos fichiers et dossiers, comme vous ne les avez jamais vus.</span>,
  en:<span>Your files and folders, as you've never seen them.</span>
})


const title_style = h1.add(t_a_center).style()

const sub_title_style = h4.add(t_a_center).style()

const cta_style = t_a_center.add({
  padding: '0.5em'
}).style()

const version_text = pick({
  fr:<span>version 5 Elegant Elephant</span>,
  en:<span>version 5 Elegant Elephant</span>
})

const changelog_text = pick({
  fr:<span>Quoi de neuf ?</span>,
  en:<span>What's new?</span>
})

const changelog_link = "#changelog"

const cta_subtitle_style = {
  fontSize: '0.8em',
  marginTop: '0.3em'
}

export default function(props) {
  return (
    <div className='grid-x'>
      <div className='cell small-12'>
        <div style={title_style}>
          archifiltre
        </div>
      </div>
      <div className='cell small-12'>
        <div style={sub_title_style}>
          {sub_title_text}
        </div>
      </div>
      <div className='cell small-12'>
        <div style={cta_style}>
          <CTA/>
          <span style={cta_subtitle_style}>
            {version_text} · <a href={changelog_link}>{changelog_text}</a>
          </span>
        </div>
      </div>
    </div>
  )
}