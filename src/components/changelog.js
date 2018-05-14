
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

const v4_desc_fr = (
<span>
  Nouvelle version, <b>nouveau look</b> ! Déjà, l'application se met aux jolies couleurs de notre site web. C'est plus zen, plus bonsai. 
  Ensuite, et ça rend les choses plus claires, <b>le fil d'Ariane</b> déménage en regard des stalactites. Un niveau dans les stalactites = un 
  niveau dans le fil d'Ariane ! Enfin, la taille des fichiers ou répertoires est maintenant lisible à la verticale, sur une <b>réglette</b>, en bas des 
  stalactites.
</span>
);

const v4_desc_en = (
<span>
  New version, <b>new looks</b>! First, the app is now styled in the slick colors from our website. More zen, more bonsai.
  Then, <b>the breadcrumbs</b> have moved right next to the icicles. How neat is that? One level down the icicles = one level down 
  the breadcrumbs! Finally, you can now read a file or folder's size directly below the icicle, on a brand-new <b>ruler</b>!
</span>
);

const v3_desc_fr = (
<span>
  Prenez un nouveau départ : un <b>bouton Réinitialiser</b> vous permet de vous lancer dans une nouvelle partie de tri !<br />
  Des déboires lors de l'import ? Un <b>bouton Exporter les erreurs</b> sera là pour les détailler.
  N'hésitez pas à <a href="mailto:archifiltre@gmail.com">nous l'envoyer</a> !<br />
  Les anglophones sont désormais les bienvenus : <b>l'application a été traduite en anglais</b>, et la langue est détectée automatiquement.<br />
  Enfin, quelques <b>améliorations pour l'interface</b> : ces transitions agaçantes quand votre souris quitte les stalactites ont disparu,
   et l'application s'adapte un peu mieux à la taille de votre écran.
</span>
);

const v3_desc_en = (
<span>
  Re-start from scratch : you can now start a new sorting session with the <b>Reinit button</b>!<br />
  Any trouble during upload? An <b>Export errors button</b> will show up to provide details.
  Feel free to <a href="mailto:archifiltre@gmail.com">send it to us</a>!<br />
  English speakers, welcome! <b>The app has been translated to English</b>, and your language will be automatically detected.<br />
  Finally, some <b>UI enhancements</b>: these annoying transitions when your mouse leaves the icicles are gone, and the app 
  will better fit to your screen size.
</span>
);

const v2_desc_fr = (
<span>
  Allez au coeur de vos arborescences : vous pouvez maintenant <b>zoomer sur un sous-répertoire</b> en cliquant dessus !<br />
  Un chargement un peu long ? Au moins, vous ne serez plus perdu.e : <b>un écran de chargement</b> vous indique l'avancement des opérations.<br />
  Sauvegardez votre travail, et reprenez-le plus tard : en cliquant sur le <b>bouton Exporter</b>, vous obtenez un fichier de sauvegarde.
  La prochaine fois, déposez celui-ci plutôt que votre arborescence, et le chargement sera bien plus rapide !
</span>
);

const v2_desc_en = (
<span>
  Get to the bottom of things: you can now <b>zoom into a subfolder</b> by clicking it!<br />
  Waiting for a long upload? You won't get lost anymore: <b>the new loading screen</b> will update you on the progress.<br />
  Save your work, pick it up later: when you click the <b>Export button</b>, you get a save of your work. Next time around,
  upload that file, rather than you file tree; you'll pick up where you left off with next to no loading time!
</span>
);

const v1_desc_fr = (
<span>La première version d'archifiltre est en ligne !<br />Vous pouvez visualiser une arborescence en un seul coup d'oeil !</span>
);

const v1_desc_en = (
<span>Archifiltre's first version is now live! Visualize a file tree at a signle glance!</span>
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
              fr: "15 Mai 2018",
              en: "May 15 2018"
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
              fr: "14 Avril 2018",
              en: "April 14 2018"
            })}
            content={pick({
              fr: v4_desc_fr,
              en: v4_desc_en
            })
            } />
            <LogCell
            version={pick({
              fr: "v3 Cheeky Cheetah",
              en: "v3 Cheeky Cheetah"
            })}
            date={pick({
              fr: "28 Mars 2018",
              en: "March 28 2018"
            })}
            content={pick({
              fr: v3_desc_fr,
              en: v3_desc_en
            })
            } />
            <LogCell
            version={pick({
              fr: "v2 Bonkers Bumblebee",
              en: "v2 Bonkers Bumblebee"
            })}
            date={pick({
              fr: "15 Mars 2018",
              en: "March 15 2018"
            })}
            content={pick({
              fr: v2_desc_fr,
              en: v2_desc_en
            })
            } />
            <LogCell
            version={pick({
              fr: "v1 Abstract Antilope",
              en: "v1 Abstract Antilope"
            })}
            date={pick({
              fr: "1er Mars 2018",
              en: "March 1 2018"
            })}
            content={pick({
              fr: v1_desc_fr,
              en: v1_desc_en
            })
            } />
          </Slider>
        </div>
        <div className='cell auto'></div>
      </div>
    </div>
  )
}

