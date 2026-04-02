export default function Services() {
  const services = [
    {
      icon: '\uD83D\uDD27',
      title: 'Consulting & Advisory',
      description: 'Strategic technology consulting to help your organization navigate digital transformation, cloud adoption, and process optimization.',
      features: ['Digital strategy', 'Technology roadmapping', 'Process optimization', 'Change management'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    },
    {
      icon: '\u2601\uFE0F',
      title: 'Cloud Infrastructure',
      description: 'End-to-end Azure cloud services from architecture design through migration, management, and optimization.',
      features: ['Azure migration', 'Infrastructure as Code', 'Cost optimization', 'High availability'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    },
    {
      icon: '\uD83D\uDEE1\uFE0F',
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions including threat detection, identity management, and compliance frameworks.',
      features: ['Zero Trust architecture', 'Identity & Access', 'Threat detection', 'Regulatory compliance'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop',
    },
    {
      icon: '\uD83D\uDCCA',
      title: 'Data & Analytics',
      description: 'Unlock the power of your data with modern analytics platforms, AI/ML integration, and business intelligence solutions.',
      features: ['Power BI dashboards', 'Data warehousing', 'AI/ML integration', 'Real-time analytics'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      icon: '\u2699\uFE0F',
      title: 'Application Development',
      description: 'Custom application development using modern frameworks, low-code platforms, and Power Platform solutions.',
      features: ['Power Apps', 'Custom web apps', 'API development', 'Low-code solutions'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    },
    {
      icon: '\uD83C\uDF10',
      title: 'Managed Services',
      description: '24/7 monitoring, management, and support for your entire technology stack with guaranteed SLAs.',
      features: ['24/7 monitoring', 'Incident response', 'Patch management', 'Performance tuning'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    },
  ]

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
          }}>Our Expertise</p>
          <h1 className="animate-in animate-in-2" style={{ color: '#fff', marginBottom: 'var(--spacing-md)' }}>Services</h1>
          <p className="animate-in animate-in-3" style={{
            color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem',
            maxWidth: '55ch', margin: '0 auto', lineHeight: 1.7,
          }}>
            Comprehensive enterprise technology services designed to transform how your organization operates.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: 'var(--spacing-4xl) 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-xl)',
          }}>
            {services.map((service, i) => (
              <article key={i} className={`animate-in animate-in-${Math.min(i + 1, 5)}`} style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <img
                  src={service.image}
                  alt={`Visual representation of ${service.title} service`}
                  style={{ width: '100%', height: 220, objectFit: 'cover' }}
                />
                <div style={{ padding: 'var(--spacing-xl)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }} aria-hidden="true">{service.icon}</span>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{service.title}</h2>
                  <p style={{
                    fontSize: '0.9rem', color: 'var(--color-text-muted)',
                    lineHeight: 1.7, marginBottom: 'var(--spacing-lg)', flex: 1,
                  }}>{service.description}</p>
                  <ul style={{
                    listStyle: 'none', padding: 0, display: 'grid',
                    gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)',
                  }}>
                    {service.features.map((feat, j) => (
                      <li key={j} style={{
                        fontSize: '0.8rem', color: 'var(--color-text)',
                        display: 'flex', alignItems: 'center', gap: 6,
                      }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: 'var(--color-primary)', flexShrink: 0,
                        }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--color-primary)',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: 'var(--spacing-md)' }}>Need a custom solution?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-xl)', maxWidth: '45ch', margin: '0 auto var(--spacing-xl)' }}>
            Our team can tailor any service to fit your unique requirements.
          </p>
          <a href="/contact" style={{
            display: 'inline-flex', padding: '14px 32px',
            borderRadius: 'var(--radius-md)', background: '#fff',
            color: 'var(--color-primary)', fontWeight: 700,
            textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}>Contact Us</a>
        </div>
      </section>
    </>
  )
}
