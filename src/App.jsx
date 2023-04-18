import { Route, Switch } from 'wouter'

import { CountriesProvider } from '@/context/CountriesContext'
import { SearcherProvider } from '@/context/SearcherContext'

import NavBar from '@/components/NavBar'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'

import './App.css'

function App() {
  return (
    <>
    <footer>
      <NavBar />
    </footer>

    <CountriesProvider>
      <SearcherProvider>

        <main className='container'>
          <Switch>
            <Route component={Home} path='/' />
            <Route component={Detail} path='/:country' />
          </Switch>
        </main>

      </SearcherProvider>
    </CountriesProvider >
    </>
  )
}

export default App