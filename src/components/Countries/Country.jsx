export default function Country ({ country, setShowDetail }) {
  const img = country.flags.svg || country.flags.png

  const handleClick = () => setShowDetail([true, `${country.common}`])
  
  return (
    <section onClick={handleClick} className="card">
      <img src={img} alt={`${country.common} flag`} />
      <div className="card__info details">
        <h2>{country.common}</h2>
        <p>Population: <span>{country.population}</span></p>
        <p>Region: <span>{country.region}</span></p>
        <p>Capital: <span>{country.capital}</span></p>
      </div>
    </section>
  )
}