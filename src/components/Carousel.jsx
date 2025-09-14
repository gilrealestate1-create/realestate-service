import { useEffect, useState, useRef } from 'react'

export default function Carousel({ slides = [], interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const t = useRef(null)
  const n = slides.length || 0

  const next = () => setIndex(i => (i + 1) % n)
  const prev = () => setIndex(i => (i - 1 + n) % n)

  useEffect(() => {
    if (n <= 1) return
    if (t.current) clearTimeout(t.current)
    t.current = setTimeout(next, interval)
    return () => clearTimeout(t.current)
  }, [index, interval, n])

  if (!n) return null

  // inline styles (tiny & readable)
  const wrap = { position: 'relative', width: '100%', overflow: 'hidden' }
  const track = {
    display: 'flex',
    width: `${n * 100}%`,
    transform: `translateX(-${index * (100 / n)}%)`,
    transition: 'transform .4s ease',
  }
  const slide = { flex: `0 0 ${100 / n}%`, width: `${100 / n}%` }
  const img = { display: 'block', width: '100%', height: 'auto' }
  const btn = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    border: 'none', background: 'rgba(0,0,0,.35)', color: '#fff',
    fontSize: '20px', width: 36, height: 36, borderRadius: 18, cursor: 'pointer'
  }
  const dotsWrap = {
    position: 'absolute', bottom: 10, left: 0, right: 0,
    display: 'flex', justifyContent: 'center', gap: 8
  }
  const dot = (active) => ({
    width: 10, height: 10, borderRadius: 9999,
    border: '2px solid rgba(255,255,255,.8)',
    background: active ? 'rgba(255,255,255,.9)' : 'transparent',
    cursor: 'pointer'
  })

  return (
    <div style={wrap} aria-label="carousel">
      <div style={track}>
        {slides.map((s, i) => (
          <div key={i} style={slide}>
            <img src={s.src} alt={s.alt || `slide ${i+1}`} style={img} />
          </div>
        ))}
      </div>

      {n > 1 && (
        <>
          <button style={{ ...btn, left: 8 }} onClick={prev} aria-label="Previous">‹</button>
          <button style={{ ...btn, right: 8 }} onClick={next} aria-label="Next">›</button>

          <div style={dotsWrap}>
            {slides.map((_, i) => (
              <button
                key={i}
                style={dot(i === index)}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}