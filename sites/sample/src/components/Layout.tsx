import { type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header role="banner" style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(248, 250, 252, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <nav role="navigation" aria-label="Main navigation" className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}>
          <Link to="/" style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800, fontSize: '1.25rem',
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
          }} aria-label="Contoso Portal home">
            <span style={{ color: 'var(--color-primary)' }}>Contoso</span> Portal
          </Link>
          <ul style={{
            display: 'flex', gap: 'var(--spacing-xl)', listStyle: 'none',
            margin: 0, padding: 0,
          }}>
            {navLinks.map(link => {
              const isActive = location.pathname === link.to
              return (
                <li key={link.to}>
                  <Link to={link.to} style={{
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.9rem',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    textDecoration: 'none',
                    padding: '4px 0',
                    borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main" style={{ flex: 1 }}>
        {children}
      </main>

      <footer role="contentinfo" style={{
        background: 'var(--color-text)',
        color: 'rgba(255,255,255,0.7)',
        padding: 'var(--spacing-3xl) 0 var(--spacing-xl)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
            gap: 'var(--spacing-3xl)', marginBottom: 'var(--spacing-2xl)',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800,
                fontSize: '1.25rem', color: '#fff', marginBottom: 'var(--spacing-md)',
              }}>
                <span style={{ color: 'var(--color-accent)' }}>Contoso</span> Portal
              </p>
              <p style={{ maxWidth: '40ch', lineHeight: 1.7, fontSize: '0.9rem' }}>
                Connecting customers with enterprise services, support, and information — powered by Microsoft Power Pages.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-md)' }}>Navigation</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-md)' }}>Contact</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', fontSize: '0.9rem' }}>
                <li>info@contoso.com</li>
                <li>+1 (800) 555-0199</li>
                <li>Redmond, WA</li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 'var(--spacing-lg)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontSize: '0.8rem',
          }}>
            <p>&copy; {new Date().getFullYear()} Contoso Portal. All rights reserved.</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.75 }}>
              Built with Power Pages
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
