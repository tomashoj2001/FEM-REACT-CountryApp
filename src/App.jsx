import { useState, useEffect} from 'react'

// import { CountriesProvider } from '@/context/CountriesContext'
// import { SearcherProvider } from '@/context/SearcherContext'

import NavBar from '@/components/NavBar'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

import './App.css'
// import useCountries from './hooks/useCountries'
import getCountries from './services/getCountries'

function App() {
  const [showDetail, setShowDetail] = useState([false, ""])  
  const [countries, setCountries] = useState()
  const [searcher, setSearcher] = useState({
    filter: "",
    finder: ""
  })

  useEffect(() => {
    async function fetchData() {
      const fetchCountries = await getCountries()
      setCountries(fetchCountries)
    }
    fetchData()
  }, [])

  return (
    <>
    <header>
      <NavBar setShowDetail={setShowDetail} />
    </header>
    <main className='container'>
      {
        showDetail[0]
          ? <Detail country={showDetail[1]} countries={countries} setShowDetail={setShowDetail} />
          : <Home countries={countries} setShowDetail={setShowDetail} searcher={searcher} setSearcher={setSearcher} />
      }
    </main>
    </>
  )
}

export default App