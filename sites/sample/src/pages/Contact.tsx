import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

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
          }}>Get in Touch</p>
          <h1 className="animate-in animate-in-2" style={{ color: '#fff', marginBottom: 'var(--spacing-md)' }}>Contact Us</h1>
          <p className="animate-in animate-in-3" style={{
            color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem',
            maxWidth: '55ch', margin: '0 auto', lineHeight: 1.7,
          }}>
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: 'var(--spacing-4xl) 0' }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-3xl)',
        }}>
          {/* Form */}
          <div className="animate-in animate-in-1">
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Send us a message</h2>
            {submitted ? (
              <div style={{
                background: '#f0fdf4', border: '1px solid #bbf7d0',
                borderRadius: 'var(--radius-md)', padding: 'var(--spacing-xl)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 'var(--spacing-sm)' }} aria-hidden="true">{'\u2705'}</span>
                <h3 style={{ color: '#166534', marginBottom: 'var(--spacing-sm)' }}>Message sent!</h3>
                <p style={{ color: '#15803d', fontSize: '0.9rem' }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                  <div>
                    <label htmlFor="firstName" style={{
                      display: 'block', fontSize: '0.85rem', fontWeight: 600,
                      marginBottom: 'var(--spacing-xs)', color: 'var(--color-text)',
                    }}>First Name</label>
                    <input id="firstName" name="firstName" type="text" required style={{
                      width: '100%', padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)',
                      fontSize: '0.9rem', fontFamily: 'var(--font-body)',
                      outline: 'none', transition: 'border-color 0.2s',
                    }} />
                  </div>
                  <div>
                    <label htmlFor="lastName" style={{
                      display: 'block', fontSize: '0.85rem', fontWeight: 600,
                      marginBottom: 'var(--spacing-xs)', color: 'var(--color-text)',
                    }}>Last Name</label>
                    <input id="lastName" name="lastName" type="text" required style={{
                      width: '100%', padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)',
                      fontSize: '0.9rem', fontFamily: 'var(--font-body)',
                      outline: 'none', transition: 'border-color 0.2s',
                    }} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" style={{
                    display: 'block', fontSize: '0.85rem', fontWeight: 600,
                    marginBottom: 'var(--spacing-xs)', color: 'var(--color-text)',
                  }}>Email</label>
                  <input id="email" name="email" type="email" required style={{
                    width: '100%', padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)',
                    fontSize: '0.9rem', fontFamily: 'var(--font-body)',
                    outline: 'none', transition: 'border-color 0.2s',
                  }} />
                </div>
                <div>
                  <label htmlFor="company" style={{
                    display: 'block', fontSize: '0.85rem', fontWeight: 600,
                    marginBottom: 'var(--spacing-xs)', color: 'var(--color-text)',
                  }}>Company</label>
                  <input id="company" name="company" type="text" style={{
                    width: '100%', padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)',
                    fontSize: '0.9rem', fontFamily: 'var(--font-body)',
                    outline: 'none', transition: 'border-color 0.2s',
                  }} />
                </div>
                <div>
                  <label htmlFor="message" style={{
                    display: 'block', fontSize: '0.85rem', fontWeight: 600,
                    marginBottom: 'var(--spacing-xs)', color: 'var(--color-text)',
                  }}>Message</label>
                  <textarea id="message" name="message" rows={5} required style={{
                    width: '100%', padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)',
                    fontSize: '0.9rem', fontFamily: 'var(--font-body)',
                    outline: 'none', resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }} />
                </div>
                <button type="submit" style={{
                  padding: '14px 28px', borderRadius: 'var(--radius-md)',
                  background: 'var(--color-primary)', color: '#fff',
                  fontWeight: 600, fontSize: '0.95rem', border: 'none',
                  transition: 'background 0.2s', alignSelf: 'flex-start',
                  boxShadow: '0 4px 16px rgba(26, 86, 219, 0.3)',
                }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="animate-in animate-in-2">
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Contact information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
              {[
                { icon: '\uD83D\uDCE7', label: 'Email', value: 'info@contoso.com', href: 'mailto:info@contoso.com' },
                { icon: '\uD83D\uDCDE', label: 'Phone', value: '+1 (800) 555-0199', href: 'tel:+18005550199' },
                { icon: '\uD83D\uDCCD', label: 'Address', value: '1 Microsoft Way\nRedmond, WA 98052', href: undefined },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                  <span style={{
                    fontSize: '1.5rem', width: 48, height: 48,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(26, 86, 219, 0.08)', borderRadius: 'var(--radius-md)',
                    flexShrink: 0,
                  }} aria-hidden="true">{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: 2 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.value}</a>
                    ) : (
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', whiteSpace: 'pre-line' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Image */}
            <div style={{ marginTop: 'var(--spacing-xl)' }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Contoso headquarters building exterior"
                style={{
                  width: '100%', borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
