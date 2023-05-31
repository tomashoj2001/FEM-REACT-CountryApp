export default function useSearcher(countries, searcher) {
  const { filter, finder } = searcher

  let finderLowerCase = finder.toLowerCase()
  let filteredCountries = countries
        .filter(country => filter !== "" ? country.region === filter : country)
        .filter(country => finder !== "" ? country.common.toLowerCase().includes(finderLowerCase) : country)

  return { filteredCountries }
}