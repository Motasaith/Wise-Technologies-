import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: 'var(--bg)' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
