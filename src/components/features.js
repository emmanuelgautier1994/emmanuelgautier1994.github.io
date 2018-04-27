
import React from 'react'

import make from 'css/make'
import pick from 'languages'

import { t_a_center, p, h4 } from 'css/cascade'


const title1_text = pick({
  fr:<span>Besoin d'y voir clair dans une arborescence ?</span>,
  en:<span>Need to see clearly in a file tree?</span>
})

const para11_text = pick({
  fr:
    <span>
      Faire du tri dans un gros dossier est un vrai casse-tête.
      Comment savoir tout ce qui se cache dans "divers" ?
      Comment identifier rapidement les fichiers qui prennent le plus de place ?
    </span>,
  en:
    <span>
      Sorting in a big folder is a real headache.
      How to know all that is hidden in "various"?
      How to quickly identify the files that take up the most space?
    </span>
})

const para12_text = pick({
  fr:
    <span>
      Avec <strong>archifiltre</strong>, prenez de la hauteur.
      Appréhendez une arborescence en entier, d'un seul coup d'œil.
    </span>,
  en:
    <span>
      With <strong>archifiltre</strong>, get high.
      Apprehend an entire tree at a glance.
    </span>
})


const title2_text = pick({
  fr:<span>Le tri, mais zen.</span>,
  en:<span>Sorting, but zen.</span>
})


const para2_text = pick({
  fr:
    <span>
      La pratique du <strong>yamadori [ヤマドリ]</strong>
      consiste à récolter un arbre nain dans la nature,
      à tailler ses branches et à l'entretenir pour en faire un
      bonsai. <strong>archifiltre</strong> vous permet
      la même chose avec une arborescence de fichiers.
      La prélever, l'examiner, et y faire du tri.
    </span>,
  en:
    <span>
      The practice of <strong>yamadori [ヤマドリ]</strong>
      is to harvest a dwarf tree in the wild,
      prune its branches and maintain it for a
      bonsai. <strong>archifiltre</strong> allows you
      the same thing with a file tree.
      Take it, examine it, and sort it.
    </span>
})


const padding = make({
  padding: '0em 1em',
})

const cell_style = padding.style()

const image_cell_style = padding.add(t_a_center).style()

const root_style = {
  padding: '2em 0em',
}

const title_style = h4.style()

const para_style = p.style()

export default function(props) {
  return (
    <div style={root_style}>
      <div className='grid-x grid-padding-y align-middle'>
        <div className='cell auto'></div>
        <div className='cell small-12 medium-6' style={cell_style}>
          <div style={title_style}>
            {title1_text}
          </div>
          <div style={para_style}>
            {para11_text}
          </div>
          <div style={para_style}>
            {para12_text}
          </div>
        </div>
        <div className='cell auto'></div>
        <div className='cell small-12 medium-4' style={image_cell_style}>
          <img src="imgs/folders.png" alt="folders"/>
        </div>
        <div className='cell auto'></div>
      </div>

      <div className='grid-x grid-padding-y align-middle'>
        <div className='cell auto medium-order-5'></div>
        <div className='cell small-12 medium-6 medium-order-4' style={cell_style}>
          <div style={title_style}>
            {title2_text}
          </div>
          <div style={para_style}>
            {para2_text}
          </div>
        </div>
        <div className='cell auto medium-order-3'></div>
        <div className='cell small-12 medium-4 medium-order-2' style={image_cell_style}>
          <img src="imgs/bonsai.png" alt="bonsai"/>
        </div>
        <div className='cell auto medium-order-1'></div>
      </div>
    </div>
  )
}

