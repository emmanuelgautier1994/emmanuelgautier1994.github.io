
import React from 'react'

import HeroHeader from 'components/hero-header'
import Features from 'components/features'
import ChangeLog from 'components/changelog'
import Recall from 'components/recall'
import Footer from 'components/footer'

import { black_gradient } from 'css/cascade'


const folders_back_style = {
  background: 'url("imgs/stock-folders.jpg") no-repeat center'
}

const triangles_back_style = {
  background: '#626982'
}

const grey_back_style = {
  backgroundColor: '#424242'
}

const bg_style = black_gradient.style()

export default function(props) {
  return (
    <div>
      <div className='grid-x grid-padding-x grid-padding-y'>
        <div className='cell small-12'>
          <HeroHeader/>
        </div>
        <div className='cell small-12'>
          <Features/>
        </div>
      </div>

      <div className='grid-x'>
        <div className='cell' style={folders_back_style}>
          <div style={bg_style}>
            <div className='grid-x grid-padding-x grid-padding-y'>
              <div className='cell'>
                <Recall/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid-x grid-padding-x grid-padding-y'>
        <div className='cell'>
          <ChangeLog/>
        </div>
      </div>

      <div className='grid-x grid-padding-x grid-padding-y'>
        <div className='cell small-12' style={grey_back_style}>
          <Footer/>
        </div>
      </div>
    </div>
  )
}