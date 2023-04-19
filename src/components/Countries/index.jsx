import "./index.css"
import Country from "./Country"
import useCountries from "@/hooks/useCountries"

export default function Countries ({ setShowDetail }) {
  const {countries} = useCountries()
  
  return(
    <section className="countries">
      {
        countries.map(country => <Country key={country.common} country={country} setShowDetail={setShowDetail} />)
      }
    </section>
  )
}