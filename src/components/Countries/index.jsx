import { useContext } from "react"
import Country from "./Country"
import NotFound from "./NotFound"
import CountriesContext from "@/context/CountriesContext"
import "./index.css"
import useSearcher from "@/hooks/useSearcher"

export default function Countries ({ setShowDetail }) {
  const {countries} = useContext(CountriesContext)
  // const {countries} = useSearcher()
  
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