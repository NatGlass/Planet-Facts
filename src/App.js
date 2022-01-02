import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import Header from './components/header'
// pages //
import Mercury from './pages/mercury'
import Venus from './pages/venus'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Mercury />}></Route>
          <Route path="venus" element={<Venus />}></Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

