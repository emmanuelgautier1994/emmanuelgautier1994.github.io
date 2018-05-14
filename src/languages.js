

const default_lang = 'en'

export default function(obj) {
  let lang = navigator.languages
  let key = default_lang
  for (let i = 0; i < lang.length; i++) {
    if (obj[lang[i]]) {
      key = lang[i]
    }
    break
  }
  return obj[key]
}
