import { useContext, useEffect } from "react"
import getCountries from "@/services/getCountries"
import CountriesContext from "@/context/CountriesContext"

export default function useCountries() {
  const {countries, setGlobalCountries, setCountries} = useContext(CountriesContext)
  
  useEffect(() => {
    getCountries()
      .then(country => {
        const sortedCountries = country.sort((a, b) => {
          if (a.common < b.common) return -1
          if (a.common > b.common) return 1
          return 0
        })
        setGlobalCountries(sortedCountries)
        setCountries(sortedCountries)
      })
  }, [])

  return { countries }
}