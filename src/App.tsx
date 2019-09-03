import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeContext, themes, setTheme } from './context/ThemeContext'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Browse from './pages/Browse/Browse'
import Search from './pages/Search/Search'
import Detail from './pages/Detail/Detail'
import Basic from './layouts/Basic'

const App: React.FC = props => {
  const [state, setState] = useState({
    currentTheme: themes.default,
    setTheme: function(themeKey: string) {
      state.currentTheme = setTheme(themeKey)
      return state.currentTheme
    },
  })

  return (
    <ThemeContext.Provider value={state}>
      <Router>
        <Switch>
          <Route exact path="/:programId/search" component={Search} />
          <Route exact path="/:programId/browse/:season?" component={Browse} />
          <Route
            exact
            path="/:programId/detail/:episodeId"
            component={Detail}
          />
          <Route exact path="/:programId?" component={LandingPage} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
