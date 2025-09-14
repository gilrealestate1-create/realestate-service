import { Link, NavLink } from 'react-router-dom'


export default function Header() {
    return (
        <div className="site-header">
            <div className="container inner">
                <Link to="/" className="brand">
                    real-estate services
                </Link>
            </div>
            <div className="nav">
                <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact Us</NavLink>
            </div>
        </div>
    )
}