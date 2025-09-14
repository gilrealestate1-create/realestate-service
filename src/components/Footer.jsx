// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={footer}>
      <div style={inner}>
        <p style={text}>
          Rights protection assistance. If you suffer financial loss, you may apply for <strong>Baidu Assistance</strong>.
          If you encounter brand or credential misuse, you may apply for <strong>Baidu Guarantee</strong> fraud compensation.
        </p>
        <p style={copyright}>
          © {new Date().getFullYear()} Real-Estate Services
        </p>
      </div>
    </footer>
  )
}

/* ---------- Inline Styles ---------- */
const footer = {
  background: '#0f172a', // dark navy
  color: '#e2e8f0',      // light gray
  padding: '32px 20px',
  marginTop: '40px',
};

const inner = {
  maxWidth: '1100px',
  margin: '0 auto',
  textAlign: 'center',
};

const text = {
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: '12px',
};

const copyright = {
  fontSize: '0.85rem',
  color: '#94a3b8', // lighter gray
};