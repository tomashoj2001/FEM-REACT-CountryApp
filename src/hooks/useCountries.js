import { useContext, useEffect, useState } from "react"
import getCountries from "@/services/getCountries"
// import CountriesContext from "@/context/CountriesContext"

export default function useCountries() {
  const fetchedCountries = getCountries()
    .then(country => {
      // console.log(country)
      return country.sort((a, b) => {
        if (a.common < b.common) return -1
        if (a.common > b.common) return 1
        return 0
      })
    })
  // console.log(fetchedCountries)
  // return {fetchedCountries} 
}