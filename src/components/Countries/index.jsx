import { useContext } from "react"
import Country from "./Country"
import NotFound from "./NotFound"
import CountriesContext from "@/context/CountriesContext"
import "./index.css"

export default function Countries ({ setShowDetail }) {
  const {countries} = useContext(CountriesContext)
  
  return(
    <section className="countries">
      {
        countries.length > 0
          ? countries.map(country => <Country key={country.common} country={country} setShowDetail={setShowDetail} />)
          : <NotFound />
      }
    </section>
  )
}