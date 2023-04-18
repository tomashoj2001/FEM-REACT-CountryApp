export default function useData(data) {  
  let img = data.flags.svg || data.flags.png
  let nativeNameCommon = Object.keys(data.nativeName)
  let currencies = Object.keys(data.currencies)
  let languages = Object.values(data.languages)
  
  nativeNameCommon = data.nativeName[nativeNameCommon[0]].common
  currencies = data.currencies[currencies[0]].name
  languages = languages.join(', ')

  return {img, nativeNameCommon, currencies, languages}
}