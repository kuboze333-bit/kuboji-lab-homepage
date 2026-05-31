import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import LegalPage from './pages/LegalPage.jsx'

function getRouteFromHash() {
  const hash = window.location.hash || ''

  if (!hash.startsWith('#/')) {
    return { page: 'home' }
  }

  const path = hash.slice(2)
  const [, slug] = path.split('/')

  if (path.startsWith('legal/') && slug) {
    return { page: 'legal', slug }
  }

  return { page: 'home' }
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (route.page === 'legal') {
    return <LegalPage slug={route.slug} />
  }

  return <Home />
}
