import { useContext, useEffect } from "react"
import SearcherContext from "@/context/SearcherContext"
import CountriesContext from "@/context/CountriesContext"

export default function useSearcher() {
  const {globalCountries, setCountries} = useContext(CountriesContext)
  const {filter, finder} = useContext(SearcherContext)

  useEffect(() => {
    let finderLowerCase = finder.toLowerCase()

    setCountries(
      globalCountries
        .filter(country => filter !== "" ? country.region === filter : country)
        .filter(country => finder !== "" ? country.common.toLowerCase().includes(finderLowerCase) : country)
    ) 
      
  }, [filter, finder])

  // return { countries }
}