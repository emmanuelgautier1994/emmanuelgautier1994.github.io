
import make from 'css/make'


export const t_a_center = make({
  textAlign: 'center'
})

export const h1 = make({
  letterSpacing: '0.16em',
  fontSize: '3.2em'
})

export const h3 = make({
  fontSize: '2em',
  padding: '0.5em 0em'
})

export const h4 = make({
  fontSize: '1.4em',
  padding: '1em 0em'
})

export const p = make({
  lineHeight: '24px',
  margin: '0 0 16px',
  fontSize: '0.8em'
})


export const white = make({
  color: 'white'
})

export const black_gradient = make({
  // height:inherit;
  backgroundRepeat: 'no-repeat',
  background: '-webkit-linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.05))',
  background: '-moz-linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.05))',
  background: '-ms-linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.05))',
  background: '-o-linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.05))',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.05))'
})