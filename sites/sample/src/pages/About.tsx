export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'var(--color-hero-gradient)',
        color: '#fff',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <p className="animate-in animate-in-1" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
            color: 'var(--color-accent)', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)',
          }}>Our Story</p>
          <h1 className="animate-in animate-in-2" style={{ color: '#fff', marginBottom: 'var(--spacing-md)' }}>About Contoso</h1>
          <p className="animate-in animate-in-3" style={{
            color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem',
            maxWidth: '55ch', margin: '0 auto', lineHeight: 1.7,
          }}>
            For over two decades, we've been helping enterprises harness the power of technology to drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: 'var(--spacing-4xl) 0' }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)', alignItems: 'center',
        }}>
          <div className="animate-in animate-in-1">
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: 'var(--color-primary)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)',
            }}>Our Mission</p>
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Empowering enterprises through technology</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 'var(--spacing-md)' }}>
              At Contoso, we believe technology should be an accelerator, not a barrier. Our mission is to simplify complex technology landscapes and deliver solutions that drive measurable business outcomes.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              Founded in Redmond, Washington, we've grown from a small consulting firm to a global technology partner, serving Fortune 500 companies across industries including finance, healthcare, manufacturing, and retail.
            </p>
          </div>
          <div className="animate-in animate-in-2">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop"
              alt="Modern Contoso office space with open floor plan and collaborative work areas"
              style={{
                width: '100%', borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{
        background: 'var(--color-surface)',
        padding: 'var(--spacing-4xl) 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: 'var(--color-primary)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)',
            }}>What Drives Us</p>
            <h2>Our Values</h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--spacing-xl)',
          }}>
            {[
              { icon: '\uD83C\uDFAF', title: 'Client-First', description: 'Every decision starts with understanding our clients\u2019 unique challenges and goals.' },
              { icon: '\uD83D\uDE80', title: 'Innovation', description: 'We continuously explore emerging technologies to deliver cutting-edge solutions.' },
              { icon: '\uD83E\uDD1D', title: 'Integrity', description: 'Transparency and honesty are the foundation of every relationship we build.' },
              { icon: '\uD83C\uDF31', title: 'Growth', description: 'We invest in our people and our partners, fostering continuous learning and development.' },
            ].map((value, i) => (
              <div key={i} className={`animate-in animate-in-${i + 1}`} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 'var(--spacing-md)' }} aria-hidden="true">{value.icon}</span>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{value.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: 'var(--spacing-4xl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: 'var(--color-primary)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)',
            }}>Leadership</p>
            <h2>Meet Our Team</h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--spacing-xl)',
          }}>
            {[
              { name: 'Sarah Chen', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
              { name: 'Marcus Rivera', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
              { name: 'Priya Patel', role: 'VP of Cloud Services', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
            ].map((person, i) => (
              <div key={i} className={`animate-in animate-in-${i + 1}`} style={{ textAlign: 'center' }}>
                <img
                  src={person.image}
                  alt={`Portrait of ${person.name}, ${person.role}`}
                  style={{
                    width: 160, height: 160, borderRadius: '50%',
                    objectFit: 'cover', margin: '0 auto var(--spacing-md)',
                    border: '3px solid var(--color-border)',
                  }}
                />
                <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>{person.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
