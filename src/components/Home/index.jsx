import { Helmet } from "react-helmet"
import Searcher from "@/components/Searcher"
import Countries from "@/components/Countries"
import useCountries from "@/hooks/useCountries"

export default function Home ({ setShowDetail }) {
  const {countries} = useCountries()

  return (
    <>
      <Helmet>
        <title>Home | Country App</title>
      </Helmet>

      <Searcher />
      <Countries setShowDetail={setShowDetail}/>
    </>
  )
}