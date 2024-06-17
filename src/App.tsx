import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'

import { Router } from './routes/Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
