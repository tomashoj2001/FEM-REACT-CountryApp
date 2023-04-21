import { useContext, useEffect } from "react"
import getCountries from "@/services/getCountries"
import CountriesContext from "@/context/CountriesContext"

export default function useCountries() {
  const {countries, setGlobalCountries, setCountries} = useContext(CountriesContext)
  
  useEffect(() => {
    getCountries()
      .then(country => {
        setGlobalCountries(country)
        setCountries(country)
        console.log('useCountries-effect')
      })
  }, [])
  console.log('useCountries')
  return { countries }
}