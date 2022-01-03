import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import Header from './components/header'
// pages //
import Mercury from './pages/mercury'
import Venus from './pages/venus'
import Earth from './pages/earth'
import Mars from './pages/mars'
import Jupiter from './pages/jupiter'
import Saturn from './pages/saturn'
import Uranus from './pages/uranus'
import Neptune from './pages/neptune'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Mercury />}></Route>
          <Route path="venus" element={<Venus />}></Route>
          <Route path="earth" element={<Earth />}></Route>
          <Route path="mars" element={<Mars />}></Route>
          <Route path="jupiter" element={<Jupiter />}></Route>
          <Route path="saturn" element={<Saturn />}></Route>
          <Route path="uranus" element={<Uranus />}></Route>
          <Route path="neptune" element={<Neptune />}></Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

