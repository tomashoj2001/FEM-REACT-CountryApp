const filterData = apiResponse => {
  let data = []
  
  apiResponse.forEach(country => {
    const {borders, capital, cca3, currencies, flags, languages ,name, population, region, subregion, tld} = country
    const {common, nativeName} = name
    
    data.push({borders, capital, cca3, currencies, flags, languages, common, nativeName, population, region, subregion, tld})
  })

  return data
}

export default function getCountries() {
  const apiURL = "https://restcountries.com/v3.1/all"

  return fetch(apiURL)
    .then(res => res.json())
    .then(filterData)
}