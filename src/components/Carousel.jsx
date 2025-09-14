// src/components/Carousel.jsx
import { useEffect, useState, useRef } from 'react'

export default function Carousel({
  slides = [],
  interval = 5000,
  height = '50vh',     // 半个屏幕高度
}) {
  const [index, setIndex] = useState(0)
  const t = useRef(null)
  const n = slides.length || 0

  const next = () => setIndex(i => (i + 1) % n)
  const prev = () => setIndex(i => (i - 1 + n) % n)

  useEffect(() => {
    if (n <= 1) return
    clearTimeout(t.current)
    t.current = setTimeout(next, interval)
    return () => clearTimeout(t.current)
  }, [index, interval, n])

  if (!n) return null

  const wrap = {
    position: 'relative',
    width: '100%',            // 宽度始终填满
    height: typeof height === 'number' ? `${height}px` : height, // 半屏高
    overflow: 'hidden',
  }

  const track = {
    display: 'flex',
    width: `${n * 100}%`,
    height: '100%',
    transform: `translateX(-${index * (100 / n)}%)`,
    transition: 'transform .4s ease',
  }

  const slide = {
    flex: `0 0 ${100 / n}%`,
    width: `${100 / n}%`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000',       // 可选：给“留白”用背景色，便于看出缩放
  }

  // 核心：img 用 contain，宽高都受限于容器（100% x 50vh），按比例缩小
  const img = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',            // 让宽度尽量铺开（若受 maxHeight 限制，会留下左右留白）
    height: '100%',           // 让高度尽量填满（与 contain 一起工作，不变形）
    objectFit: 'contain',     // ★ 保持比例、不裁切
    objectPosition: 'center',
    display: 'block',
  }

  const btn = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    border: 'none', background: 'rgba(0,0,0,.35)', color: '#fff',
    fontSize: 20, width: 36, height: 36, borderRadius: 18, cursor: 'pointer'
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
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i+1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}