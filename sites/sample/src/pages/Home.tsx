export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'var(--color-hero-gradient)',
        color: '#fff',
        padding: 'var(--spacing-4xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 800px 600px at 70% 40%, rgba(26, 86, 219, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>
            <p className="animate-in animate-in-1" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: 'var(--color-accent)', fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: 'var(--spacing-md)',
            }}>
              Enterprise Portal
            </p>
            <h1 className="animate-in animate-in-2" style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: '#fff', marginBottom: 'var(--spacing-lg)',
              lineHeight: 1.1,
            }}>
              Your gateway to{'\n'}
              <span style={{ color: 'var(--color-accent)' }}>Contoso services</span>
            </h1>
            <p className="animate-in animate-in-3" style={{
              fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7, marginBottom: 'var(--spacing-xl)',
              maxWidth: '50ch',
            }}>
              Access enterprise solutions, get expert support, and explore our comprehensive service catalog &mdash; all in one place.
            </p>
            <div className="animate-in animate-in-4" style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <a href="/services" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '14px 28px', borderRadius: 'var(--radius-md)',
                background: 'var(--color-primary)', color: '#fff',
                fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                boxShadow: '0 4px 16px rgba(26, 86, 219, 0.3)',
              }}>
                Explore Services
              </a>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '14px 28px', borderRadius: 'var(--radius-md)',
                background: 'transparent', color: '#fff',
                fontWeight: 500, fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'border-color 0.2s, background 0.2s',
              }}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'var(--spacing-2xl) 0',
      }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--spacing-xl)', textAlign: 'center',
        }}>
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Expert Support' },
            { value: '50+', label: 'Service Offerings' },
          ].map((stat, i) => (
            <div key={i} className={`animate-in animate-in-${i + 1}`}>
              <p style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800,
                fontSize: '2rem', color: 'var(--color-primary)',
                letterSpacing: '-0.02em',
              }}>{stat.value}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: 4 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section style={{ padding: 'var(--spacing-4xl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: 'var(--color-primary)', fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: 'var(--spacing-sm)',
            }}>What we offer</p>
            <h2>Featured Services</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-md)', maxWidth: '50ch', marginLeft: 'auto', marginRight: 'auto' }}>
              Comprehensive enterprise solutions designed to accelerate your digital transformation.
            </p>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--spacing-lg)',
          }}>
            {[
              {
                icon: '\uD83D\uDD27',
                title: 'Consulting & Advisory',
                description: 'Strategic guidance to align technology with your business goals. Our experts partner with you from planning through execution.',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
              },
              {
                icon: '\u2601\uFE0F',
                title: 'Cloud Infrastructure',
                description: 'Scalable, secure cloud platforms built on Azure \u2014 from migration to optimization, we handle the complexity.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
              },
              {
                icon: '\uD83D\uDEE1\uFE0F',
                title: 'Security & Compliance',
                description: 'Enterprise-grade security posture with continuous monitoring, threat detection, and regulatory compliance management.',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop',
              },
            ].map((service, i) => (
              <article key={i} className={`animate-in animate-in-${i + 1}`} style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <img
                  src={service.image}
                  alt={`Visual representation of ${service.title}`}
                  style={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
                <div style={{ padding: 'var(--spacing-lg)' }}>
                  <span style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)', display: 'block' }} aria-hidden="true">{service.icon}</span>
                  <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'var(--color-primary)',
        padding: 'var(--spacing-3xl) 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: 'var(--spacing-md)' }}>Ready to get started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)', maxWidth: '45ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Let us help you build the future of your enterprise. Reach out today.
          </p>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '14px 32px', borderRadius: 'var(--radius-md)',
            background: '#fff', color: 'var(--color-primary)',
            fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none',
            transition: 'transform 0.2s',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}>
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
