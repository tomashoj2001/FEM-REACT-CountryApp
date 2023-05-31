import { useContext } from "react"
import Country from "./Country"
import NotFound from "./NotFound"
import CountriesContext from "@/context/CountriesContext"
import "./index.css"
import useSearcher from "../../hooks/useSearcher"

export default function Countries ({ countries, setShowDetail, searcher }) {
  if (!countries) {
    return <h1>Loading...</h1>
  }
  console.log(searcher)

  const { filteredCountries } = useSearcher(countries, searcher)
  
  return(
    <section className="countries">
      {filteredCountries.length > 0
          ? filteredCountries.map(country => <Country key={country.common} country={country} setShowDetail={setShowDetail} />)
          : <NotFound searcher={searcher} />
      }
    </section>
  )
}