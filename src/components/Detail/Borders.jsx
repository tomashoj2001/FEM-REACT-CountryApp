import { Link } from "wouter"

export default function Borders ({ borders, countries }) {
  const fullName = countries
    .filter(c => borders.includes(c.cca3))
    .map(c => c.common)

  return (
    <section className="borders">
      <h2>Border Countries:</h2>
      
      <div className="borders__grid">
      {
        fullName.map(name => {
          return(
            <Link to={`/${name}`} className="detail__btn" key={name}>
              {name}
            </Link>
          )
        })
      }
      </div>
    </section>
  )
}