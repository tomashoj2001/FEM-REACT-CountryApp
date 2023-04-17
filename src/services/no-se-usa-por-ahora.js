// import { useContext, useEffect } from "react"
// import SearcherContext from "../context/SearcherContext"
// import CountriesContext from "../context/CountriesContext"

// export default function getFilteredCountries() {
//   const {globalCountries, countries, setCountries} = useContext(CountriesContext)
//   const {filter, finder} = useContext(SearcherContext)
  
//   useEffect(() => {
//     let finderLowerCase = finder.toLowerCase()

//     if (filter !== "" && finder !== "") {
//       setCountries(globalCountries
//           .filter(country => country.region === filter)
//           .filter(country => country.common.toLowerCase().includes(finderLowerCase))
//         )

//       return
//     }

//     if (filter !== "") setCountries(globalCountries.filter(country => country.region === filter))

//     if (finder !== "") setCountries(globalCountries.filter(country => country.common.toLowerCase().includes(finderLowerCase)))

//   }, [filter, finder])

//   return {countries}
// }