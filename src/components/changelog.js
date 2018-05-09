
import React from 'react'

import make from 'css/make'
import pick from 'languages'

import { t_a_center, p, h4 } from 'css/cascade'

import Slider from "react-slick"
import LogCell from "components/log-cell"

const title_style_base = {
  fontFamily: "'Quicksand', sans-serif",
  margin: '0'
}

const title_style = t_a_center.add(make(title_style_base)).style()
const title_text = pick({
  fr: "Quoi de neuf ?",
  en: "What's new?"
})

const padding = make({
  padding: '0em 1em',
})

const cell_style = padding.style()

const root_style = {
  padding: '3em 2em 5em 2em',
  fontFamily: "'Quicksand', sans-serif"
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", transform: " scale(2) translate(-80%,0)"}}
      onClick={onClick}
    />
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", transform: " scale(2) translate(80%,0)"}}
      onClick={onClick}
    />
  );
}



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  // centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const v5_desc_fr = (
<span>Coucou<br />Hello<br />Salut<br />Ça va ?</span>
);

const v5_desc_en = (
<span>Coucou<br />Hello<br />Salut<br />Ça va ?</span>
);

export default function(props) {
  return (
    <div style={root_style} id="changelog">
      <div className='grid-x grid-padding-y align-middle'>
        <div className='cell auto'></div>
        <div className='cell small-10 medium-10' style={cell_style}>
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
              fr: v5_desc_fr,
              en: v5_desc_en
            })
            } />
            <LogCell
            version={pick({
              fr: "v4 Demanding Dolphin",
              en: "v4 Demanding Dolphin"
            })}
            date={pick({
              fr: "12 Avril 2018",
              en: "April 12 2018"
            })}
            content={pick({
              fr: "Le fil d'Ariane se trouve maintenant à droite",
              en: "The breadcrumbs are now to the right"
            })
            } />
            <LogCell
            version={pick({
              fr: "v3 Cheeky Cheetah",
              en: "v3 Cheeky Cheetah"
            })}
            date={pick({
              fr: "21 Mars 2018",
              en: "March 21 2018"
            })}
            content={pick({
              fr:"Vous pouvez maintenant zoomer",
              en:"You can zoom"
            })
            } />
            <LogCell
            version={pick({
              fr: "v2 Bonkers Bumblebee",
              en: "v2 Bonkers Bumblebee"
            })}
            date={pick({
              fr: "2 Mars 2018",
              en: "March 2 2018"
            })}
            content={pick({
              fr: "Quelques améliorations",
              en: "Some improvements"
            })
            } />
            <LogCell
            version={pick({
              fr: "v1 Abstract Antilope",
              en: "v1 Abstract Antilope"
            })}
            date={pick({
              fr: "15 Février 2018",
              en: "February 15 2018"
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

