import Finder from "./Finder.jsx"
import Filter from "./Filter.jsx"
import "./index.css"

export default function Searcher({ searcher, setSearcher }) {
  return (
    <section className="searcher">
      <Finder searcher={searcher} setSearcher={setSearcher} />
      <Filter searcher={searcher} setSearcher={setSearcher} />
    </section>
  )
}