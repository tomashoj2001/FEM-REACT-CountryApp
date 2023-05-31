import { useContext } from "react"
// import SearcherContext from "@/context/SearcherContext"

export default function NotFound({ searcher }) {
  const {filter, finder} = searcher
  // const {finder} = useContext(SearcherContext)
  return (
    <>
      <h2 className="not-found">
        <span>"{finder}"</span> was not found {filter && 'in'} <span>{filter && filter}</span> :(
      </h2>
    </>
  )
}