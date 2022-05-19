import theme from '@laboriosi/evalu8-tokens/theme.json'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~components/GlobalStyle'
import Routes from '~routes'
import '@laboriosi/evalu8-fonts/fonts.css'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>
  )
}

export default App
