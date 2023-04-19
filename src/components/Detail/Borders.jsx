export default function Borders ({ borders, countries, setShowDetail }) {
  const fullName = countries
    .filter(c => borders.includes(c.cca3))
    .map(c => c.common)

  const handleClick = (name) => setShowDetail([true, name])

  return (
    <section className="borders">
      <h2>Border Countries:</h2>
      
      <div className="borders__grid">
      {
        fullName.map(name => {
          return(
            <button onClick={() => handleClick(name)} className="detail__btn" key={name}>
              {name}
            </button>
          )
        })
      }
      </div>
    </section>
  )
}