import React from 'react'

export interface ThemeObj {
  themeKey: string
  color: string
  linkImg: string
  bgImg: string
  font: string
}

export const themes: Record<string, ThemeObj> = {
  default: {
    themeKey: 'default',
    color: '#333',
    bgImg: '',
    font: 'Heebo',
    linkImg: '',
  },
  koth: {
    themeKey: 'koth',
    color: '#ff1000',
    bgImg: '/images/koth/background.jpg',
    font: 'Hepta+Slab:600',
    linkImg: '/images/koth/link.jpg',
  },
  bburg: {
    themeKey: 'bburg',
    color: '#ff00ac',
    bgImg: '/images/bburg/background.jpg',
    font: 'Mali:700',
    linkImg: '/images/bburg/link.jpg',
  },
}

let currentTheme: ThemeObj = themes.koth

export const setTheme = (themeKey: string) => {
  if (themeKey in themes) {
    currentTheme = themes[themeKey]
  } else {
    currentTheme = themes.default
  }
  return currentTheme
}

export const ThemeContext = React.createContext({
  currentTheme,
  setTheme,
})
