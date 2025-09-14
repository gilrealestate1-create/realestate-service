// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={layout}>
      <Header />
      <main style={content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

/* Layout styles */
const layout = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',   // full viewport height
}

const content = {
  flex: 1,              // expand to push footer down
}