import { useContext } from "react"
import CountriesContext from "@/context/CountriesContext"
import Borders from "./Borders"
import "./index.css"

export default function Detail({country, setShowDetail}) {
  const {countries} = useContext(CountriesContext)
  
  const data = countries.find(c => c.common === country)
  
  let img = data.flags.svg || data.flags.png
  let nativeNameCommon = Object.keys(data.nativeName)
  let currencies = Object.keys(data.currencies)
  let languages = Object.values(data.languages)
  
  nativeNameCommon = data.nativeName[nativeNameCommon[0]].common
  currencies = data.currencies[currencies[0]].name
  languages = languages.join(', ')

  const handleClick = () => setShowDetail([false, ""])

  return (
    <>
      <footer className="detail__footer container">
        <button className="detail__btn" onClick={handleClick}>back</button>
      </footer>
      
      <section className="detail container">
        <img src={img} alt={`${country} flag`} className="detail__flag" />

        <section className="detail__data">
          <h2>{data.common}</h2>

          <section className="detail__container">
            <div className="details primary">
              <p>Native Name: <span>{nativeNameCommon}</span></p>
              <p>Population: <span>{data.population}</span></p>
              <p>Region: <span>{data.region}</span></p>
              <p>Sub Region: <span>{data.subregion}</span></p>
              <p>Capital: <span>{data.capital[0]}</span></p>
            </div>

            <div className="details secondary">
              <p>Top Level Domain: <span>{data.tld}</span></p>
              <p>Currencies: <span>{currencies}</span></p>
              <p>Languages: <span>{languages}</span></p>
            </div>
          </section>

          {
            data.borders
            ? <Borders borders={data.borders} countries={countries} setShowDetail={setShowDetail}/>
            : null
          }

        </section>  
      </section>
    </>
  )
}