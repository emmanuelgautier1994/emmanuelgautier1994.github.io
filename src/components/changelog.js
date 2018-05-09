
import React from 'react'

import make from 'css/make'
import pick from 'languages'

import { t_a_center, p, h4 } from 'css/cascade'

import Slider from "react-slick"
import LogCell from "components/log-cell"

const font_style = {
  fontFamily: "'Quicksand', sans-serif"
}

const title_style = t_a_center.add(make(font_style)).style()
const title_text = pick({
  fr: "Quoi de neuf ?",
  en: "What's new?"
})

const padding = make({
  padding: '0em 1em',
})

const cell_style = padding.style()

const root_style = {
  padding: '0em 2em 5em 2em',
  fontFamily: "'Quicksand', sans-serif"
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function(props) {
  return (
    <div style={root_style} id="changelog">
      <div className='grid-x grid-padding-y align-middle'>
        <div className='cell auto'></div>
        <div className='cell small-12 medium-12' style={cell_style}>
          <h3 style={title_style}>{title_text}</h3>
          <Slider {...settings}>
            <LogCell
            version={pick({
              fr: "v5 Elegant Elephant",
              en: "v5 Elegant Elephant"
            })}
            date={pick({
              fr: "10 Mai 2018",
              en: "May 10 2018"
            })}
            content={pick({
              fr: "Nous avons complètement reconstruit le moteur de l'application !",
              en: "We rebuilt the app's engine from the ground up!"
            })
            } />
            <LogCell
            version={pick({
              fr: "v4 Elegant Elephant",
              en: "v4 Elegant Elephant"
            })}
            date={pick({
              fr: "10 Mai 2018",
              en: "May 10 2018"
            })}
            content={pick({
              fr: "Le fil d'Ariane se trouve maintenant à droite",
              en: "The breadcrumbs are now to the right"
            })
            } />
            <LogCell
            version={pick({
              fr: "v3 Elegant Elephant",
              en: "v3 Elegant Elephant"
            })}
            date={pick({
              fr: "10 Mai 2018",
              en: "May 10 2018"
            })}
            content={pick({
              fr:"Vous pouvez maintenant zoomer",
              en:"You can zoom"
            })
            } />
            <LogCell
            version={pick({
              fr: "v2 Elegant Elephant",
              en: "v2 Elegant Elephant"
            })}
            date={pick({
              fr: "10 Mai 2018",
              en: "May 10 2018"
            })}
            content={pick({
              fr: "Quelques améliorations",
              en: "Some improvements"
            })
            } />
            <LogCell
            version={pick({
              fr: "v1 Elegant Elephant",
              en: "v1 Elegant Elephant"
            })}
            date={pick({
              fr: "10 Mai 2018",
              en: "May 10 2018"
            })}
            content={pick({
              fr:"La première version d'archifiltre est en ligne ! Vous pouvez visualiser une arborescence d'un coup d'oeil !",
              en:"Archifiltre's first version is now live! You can visualize a file tree at a single glance!"
            })
            } />
          </Slider>
        </div>
        <div className='cell auto'></div>
      </div>
    </div>
  )
}

