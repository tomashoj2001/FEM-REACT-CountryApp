import { Link } from "wouter"

export default function Country ({ country }) {
  const img = country.flags.svg || country.flags.png
  
  return (
    <Link to={`/${country.common}`} className="card">
      <img src={img} alt={`${country.common} flag`} />
      <div className="card__info details">
        <h2>{country.common}</h2>
        <p>Population: <span>{country.population}</span></p>
        <p>Region: <span>{country.region}</span></p>
        <p>Capital: <span>{country.capital}</span></p>
      </div>
    </Link>
  )
}