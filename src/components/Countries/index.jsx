import Country from "./Country"
import NotFound from "./NotFound"
import useSearcher from "@/hooks/useSearcher"
import "./index.css"

export default function Countries ({ countries, setShowDetail, searcher }) {
  if (!countries) {
    return <h1>Loading...</h1>
  }

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