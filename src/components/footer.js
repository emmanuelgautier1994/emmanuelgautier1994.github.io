
import React from 'react'
import CTA from 'components/cta'

import make from 'css/make'
import { white } from 'css/cascade'

const grid_style = {
  height: '3em'
}


const logo_style = white.add({
  letterSpacing: '0.25em',
  fontVariantLigatures: 'none',
  fontSize: '0.85em',
  fontWeight: '400'
}).style()

const link_style = make({
  color: '#9e9e9e',
  fontSize: '0.85em',
}).style()


export default function(props) {
  return (
    <div className='grid-x'>
      <div className='cell auto'></div>
      <div className='cell small-6'>
        <div className='grid-x align-middle' style={grid_style}>
          <div className='cell small-12 large-3'>
            <div style={logo_style}>
              archifiltre
            </div>
          </div>
          <div className='cell small-4 large-3'>
            <a href="https://twitter.com/archifiltre" style={link_style}>Twitter</a>
          </div>
          <div className='cell small-4 large-3'>
            <a href="https://github.com/jeanbaptisteassouad/cheapExp" style={link_style}>GitHub</a>
          </div>
          <div className='cell small-4 large-3'>
            <a href="https://entrepreneur-interet-general.etalab.gouv.fr/defi/2017/09/26/archemse/" style={link_style}>EIG</a>
          </div>
        </div>
      </div>
      <div className='cell auto'></div>
    </div>
  )
}