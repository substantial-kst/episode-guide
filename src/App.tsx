import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  ThemeContext,
  IThemeContext,
  themes,
  setTheme,
} from './context/ThemeContext'
import Page from './pages/Page/Page'
import './App.css'

const App: React.FC = props => {
  const [state, setState] = useState({
    currentTheme: themes.koth,
    setTheme: function(themeKey: string) {
      state.currentTheme = setTheme(themeKey)
      return state.currentTheme
    },
  })

  return (
    <ThemeContext.Provider value={state}>
      <Router>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route exact path="/:programId" component={Page} />
          <Route exact path="/:programId/browse/:season" component={Page} />
          <Route exact path="/:programId/search" component={Page} />
          <Route exact path="/:programId/:episodeId" component={Page} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
