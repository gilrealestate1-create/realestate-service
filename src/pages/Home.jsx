import Carousel from '../components/Carousel.jsx'

const slides = [
  { src: '/images/slide1.svg', alt: 'Professional Real Estate Services — Trusted agent for buying, selling, and renting homes.' },
  { src: '/images/slide2.svg', alt: 'Buy or Sell Homes — Skilled negotiation to achieve the best prices for your property.' },
  { src: '/images/slide3.svg', alt: 'Owner & Renter Services — Professional home management and leasing.' }
]

export default function Home() {
  return (
    <section className="home">
      <Carousel slides={slides} interval={6000} />
    </section>
  )
}