// src/pages/Home.jsx
import Carousel from '../components/Carousel.jsx'

const slides = [
  {
    // backyard + green grass + bbq（接近主题的占位）
    src: "/images/slide1.png",
    alt: 'Backyard with green grass and BBQ grill'
  },
  {
    // house / negotiation（占位）
    src: '/images/slide2.png',
    alt: 'Buy or Sell Homes — negotiation and planning'
  },
  {
    // home maintenance（占位）
    src: '/images/slide3.png',
    alt: 'Owner & Renter Services — maintenance and repairs'
  }
]

export default function Home() {
  return (
    <section className="home">
      <Carousel slides={slides} interval={6000} />
    </section>
  )
}