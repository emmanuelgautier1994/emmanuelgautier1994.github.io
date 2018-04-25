


export default function make(style_obj) {
  const clone = a => Object.assign({},style_obj,a)
  return {
    add: a => {
      if (a.style) {
        return make(clone(a.style()))
      } else {
        return make(clone(a))
      }
    },
    style: ()=>clone({})
  }
}
