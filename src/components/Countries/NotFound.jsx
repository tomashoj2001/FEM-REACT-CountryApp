import { useContext } from "react"
import SearcherContext from "@/context/SearcherContext"

export default function NotFound() {
  const {finder} = useContext(SearcherContext)
  return (
    <>
      <h2 className="not-found">
        <span>"{finder}"</span> was not found :(
      </h2>
    </>
  )
}