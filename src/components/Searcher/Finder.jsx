export default function Finder({ searcher, setSearcher }) {
  const {finder} = searcher

  const handleChange = (e) => {
    setSearcher({...searcher, finder: e.target.value})
  }

  return (
    <input 
      className="searcher__input"
      type="text"
      value={finder}
      onChange={handleChange}
      placeholder="Search for a country..."
    />
  )
}