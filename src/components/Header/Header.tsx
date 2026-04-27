import { Container } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Raihan_Anwar_CV_2026_MT.pdf'
import { useAuth } from '../../contexts/AuthContext'

export function Header() {
  const [isActive, setActive] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const isHome = location.pathname === '/'

  function getSectionLink(section: string) {
    return isHome ? `#${section}` : `/#${section}`
  }

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  function handleLogout() {
    logout()
    navigate('/')
    closeMenu()
  }

  function handleLogin() {
    navigate('/login')
    closeMenu()
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to={getSectionLink('home')} className="logo" onClick={closeMenu}>
        <span>{"<Raihan "}</span>
        <span>{" Anwar/>"}</span>
      </HashLink>
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to={getSectionLink('home')} onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to={getSectionLink('about')} onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to={getSectionLink('project')} onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to={getSectionLink('contact')} onClick={closeMenu}>
          Contact
        </NavHashLink>
        {user?.role === 'Super Admin' && (
          <NavHashLink smooth to="/manage-users" onClick={closeMenu}>
            Manage Users
          </NavHashLink>
        )}
        <a href={Resume} download className="button">
          Resume
        </a>
        {user ? (
          <button onClick={handleLogout} className="button" style={{ marginLeft: '1rem', background: 'transparent', border: '1px solid var(--green)', color: 'var(--white)', cursor: 'pointer' }}>
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="button" style={{ marginLeft: '1rem', cursor: 'pointer' }}>
            Login
          </button>
        )}
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive)
        }}
      ></div>
    </Container>
  )
}
