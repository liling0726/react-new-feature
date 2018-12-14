import React from 'react'
export const themes = {
  light:{
    color:'#000',
    background:'#eee'
  },
  dark:{
    color:'#fff',
    background:'#222'
  }
}
export const ThemeContext = React.createContext(
  {theme:themes.dark}
)