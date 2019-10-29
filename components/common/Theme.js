import React, { useState } from 'react'
import { ThemeProvider, createGlobalStyle  } from 'styled-components'
import { TopNav, baseTheme } from '../'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  p, h1, h2, h3, h4, h4, h6, span, ul, li {
    padding: 0;
    margin: 0;
    
  }

  h1, h2, h3, h4, h4, h6 {
    font-family: "Montserrat Subrayada", "sans-serif";
    font-weight: 400;
  }
  

  p, span, ul, li {
    font-family: "roboto", "sans-serif";
  }
`

const Theme = (props) => {
  const [ThemeName, setThemeName] = useState(baseTheme.themeName.main);

  const handleTheme = () => {
    ThemeName == baseTheme.themeName.main ?  setThemeName(baseTheme.themeName.secondary) :  setThemeName(baseTheme.themeName.main);
  }

  return (
    <ThemeProvider theme={{ mode: ThemeName }}>
      <TopNav
        handleTheme={handleTheme}
      />
      <GlobalStyle/>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme
