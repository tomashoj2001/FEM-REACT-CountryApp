import { useContext } from "react"
import { Link } from "wouter"
import { Helmet } from "react-helmet"

import CountriesContext from "@/context/CountriesContext"
import useData from "@/hooks/useData"
import Borders from "@/components/Detail/Borders"
import Error from "@/pages/Error"

import "@/components/Detail/index.css"
import useCountries from "@/hooks/useCountries"

export default function Detail({ params }) {
  const {countries} = useCountries()
  const country = decodeURI(params.country)
  const data = countries.find(c => c.common === country)

  if (data === undefined) return <Error search={params.country} />

  const {img, nativeNameCommon, currencies, languages} = useData(data)

  return (
    <>
      <Helmet>
        <title>{data.common} | Country App</title>
      </Helmet>

      <footer className="detail__footer container">
        <Link to="/" className="detail__btn">back</Link>
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
            ? <Borders borders={data.borders} countries={countries} />
            : null
          }

        </section>  
      </section>
    </>
  )
}