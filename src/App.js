import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import { GlobalStyles } from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
