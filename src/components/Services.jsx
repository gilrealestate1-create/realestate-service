// src/components/Services.jsx
export default function Services() {
  const Section = ({ icon, title, points }) => (
    <div style={card}>
      <div style={badge}>{icon}</div>
      <h3 style={h3}>{title}</h3>
      <ul style={ul}>
        {points.map((p, i) => (
          <li key={i} style={li}>{p}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section style={wrap} aria-label="Our Services">
      <h2 style={h2}>How We Help</h2>

      <div style={grid}>
        <Section
          icon="🏠"
          title="Buy & Sell Homes"
          points={[
            "Price strategy and market comps",
            "Skilled negotiating to secure the best deal",
            "End-to-end guidance from offer to closing",
          ]}
        />
        <Section
          icon="🛠️"
          title="Rent & Full Management"
          points={[
            "100% rental management for owners",
            "Tenant placement and lease administration",
            "Repairs & maintenance coordination",
          ]}
        />
      </div>
    </section>
  );
}

/* ——— Inline styles ——— */
const wrap = {
  width: 'min(1100px, 92vw)',
  margin: '40px auto',
  fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
  color: '#0f172a',
};
const h2 = {
  fontSize: '2rem',
  margin: '0 0 20px',
  fontWeight: 800,
};
const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 16,
};
const card = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: 12,
  padding: '18px 18px 16px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
};
const badge = {
  width: 44,
  height: 44,
  borderRadius: 10,
  display: 'grid',
  placeItems: 'center',
  background: '#eff6ff',
  color: '#1d4ed8',
  fontSize: 22,
  marginBottom: 10,
};
const h3 = {
  margin: '6px 0 10px',
  fontSize: '1.15rem',
  fontWeight: 700,
};
const ul = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'grid',
  gap: 8,
};
const li = {
  fontSize: '.98rem',
  lineHeight: 1.4,
  color: '#334155',
};