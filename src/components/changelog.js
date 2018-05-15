
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
  padding: '0em 2.5em',
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
<span>
  C'est notre deuxième grande version publique, et nous l'avons <em>blindée</em> de nouveautés !<br />
  Fer de lance de cette mouture, <b>le tableau de bord</b> ! Au-dessus des stalactites, une zone vous donne la fiche d'identité 
  du fichier ou répertoire actif. Dessus, vous pouvez <b>renommer</b>, <b>commenter</b> ou <b>taguer</b> l'élement.
  À l'avenir, ça va devenir central pour Archifiltre : soyez prêt.e.s !<br />
  Ce fut très demandé, <b>l'application est désormais accessible hors ligne</b> ! Du moment que vous y avez accédé une fois en étant 
  connecté.e à Internet, revenez à la même adresse sans avoir Internet, et elle se chargera quand même.<br />
  Plus de mauvaises surprises : si vous essayez de quitter la page, une <b>fenêtre de confirmation</b> vous retiendra, juste au cas où !<br />
  Un regret ? Vous pouvez maintenant revenir sur vos pas, soit avec les boutons fléchés, soit avec
  le <b>raccourci Ctrl+Z</b> !<br /><br />
  En vrac, quelques <b>améliorations de l'interface</b> :<br /><ul>
  <li>Pour être plus à l'aise avec le tableau de bord, cliquez une fois sur un rectangle pour le verrouiller.
  Pour zoomer dessus, il faudra désormais double-cliquer. Cliquez en dehors des stalactites pour déverrouiller.<br /></li>
  <li>Le retour à la racine est maintenant un bouton plutôt que du simple texte.<br /></li>
  <li>Une chouette animation vous distrait pendant les longs imports !<br /></li>
  <li>On nous a dit que le nom des fichiers et répertoires directement sur les rectangles était perturbant : c'est fini !<br /></li></ul>
  Enfin, ça se voit moins à l'extérieur, mais il y a <b>de très gros changements sous le capot</b> ! Pour les curieux, on a réécrit un module fait avec D3.js, 
  pour que notre application fonctionne entièrement avec React ; d'autre part, comme framework CSS, on est passés de Material Design Lite à Foundation.
  Il se peut que les performances de l'application soient un poil moins bonnes qu'avant sur certains gros répertoires, mais pas d'inquiétude, on 
  y travaille d'arrache-pied !<br />
</span>
);

const v5_desc_en = (
<span>
  Here comes our second major public release, and it is <em>stufed</em> with novelties!<br />
  The spearhead of which, <b>the dashboard</b>! Above the icicles, you'll notice a report card about the active file or folder. On it,
  you can <b>rename</b>, <b>comment</b> or <b>tag</b> the element. Brace yourselves: this will become central to Archifiltre in the future!<br />
  This one was requested a lot: <b>the app now works offline</b>! As long as you've visited the page once while online, you can come back anytime, including
  while offline, and the app will still load and work as usual!<br />
  No more bad surprises: if you try to leave the page, you will get a <b>confirmation dialog</b>, just in case.<br />
  Any regrets? You can now take anything back, using either the arrow buttons or the <b>Ctrl+Z</b> shortcut!<br /><br />
  Some stray <b>UI improvements</b>:<br /><ul>
  <li>For a better dashboard experience, click a rectangle once to lock it.
  Zooming into it will now require a double click. Click outside the icicles to unlock.</li>
  <li>"Back to root" is now a button rather than mere text.</li>
  <li>A nifty animation will now distract while you're waiting for large folders to import!</li>
  <li>We were told that sticking names right on the rectangles was confusing, so that's gone!</li></ul>
  Last, but not least, there are <b>huge changes under the hood</b>! If anyone's curious, we re-wrote a D3.js module to make the app work using only React, and
  changed CSS frameworks from Material Design Lite to Foundation. Performance could be a tiny bit inferior on some large folders, but don't worry, we're working
  hard on this!
</span>
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
        <div className='cell small-12 medium-12' style={cell_style}>
          <h3 style={title_style}>{title_text}</h3>
          <Slider {...settings}>
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
            })}
            isCurrent={true}
            />
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
            })}
            isCurrent={false}
            />
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
            })}
            isCurrent={false}
            />
            <LogCell
            version={pick({
              fr: "v1 Abstract Antilope",
              en: "v1 Abstract Antilope"
            })}
            date={pick({
              fr: "2 Mars 2018",
              en: "March 2 2018"
            })}
            content={pick({
              fr: v1_desc_fr,
              en: v1_desc_en
            })}
            isCurrent={false}
            />
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
            })}
            isCurrent={false}
            />
          </Slider>
        </div>
      </div>
    </div>
  )
}

