import { useState } from 'react';
import { areas } from '../../data/areas';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const path = window.location.pathname;
    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-container">
                    {/* Mobile Menu Toggle */}
                    <button
                        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="القائمة"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Logo */}
                    {
                        window.innerWidth < 992 && (
                            <div className="logo">
                                <div className="logo-text">
                                    <span className="logo-main">ونش انقاذ الجمهورية</span>
                                </div>
                            </div>
                        )
                    }

                    {/* Navigation Menu */}
                    <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
                        {/* Right side menu */}
                        <ul className="nav-menu nav-right">
                            <li className="nav-item">
                                <a href="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>الرئيسية</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className={`nav-link ${path === '/about' ? 'active' : ''}`}>من نحن</a>
                            </li>
                            <li className="nav-item">
                                <a href="/services" className={`nav-link ${path === '/services' ? 'active' : ''}`}>الخدمات</a>
                            </li>
                        </ul>
                        {
                            window.innerWidth > 992 && (
                                <div className="logo">
                                    <div className="logo-text">
                                        <span className="logo-main">ونش انقاذ الجمهورية</span>
                                    </div>
                                </div>
                            )
                        }
                        {/* Left side menu */}
                        <ul className="nav-menu nav-left">
                            <li className="nav-item mega-menu-parent"
                                onMouseEnter={() => {
                                    document.querySelector('.mega-menu').style.display = 'block';
                                }}
                                onMouseLeave={() => {
                                    document.querySelector('.mega-menu').style.display = 'none';
                                }}
                            >
                                <a href="/areas" className={`nav-link ${path === '/areas' ? 'active' : ''}`}>
                                    المناطق
                                    <span style={{ fontSize: '10px', marginRight: '5px' }}>▼</span>
                                </a>
                                <MegaMenu />
                            </li>
                            <li className="nav-item">
                                <a href="/articles" className={`nav-link ${path === '/articles' ? 'active' : ''}`}>المقالات</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className={`nav-link ${path === '/contact' ? 'active' : ''}`}>اتصل بنا</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const MegaMenu = () => {
    return (
        <div className="mega-menu">
            <div className="mega-menu-container-inner">
                {areas.map((gov, index) => (
                    <div key={index} className="mega-menu-column">
                        <Link to={`/areas?filter=${gov.name}`} className="mega-menu-title"
                            onClick={() => {
                                document.querySelector('.mega-menu').style.display = 'none';
                            }}
                        >
                            ونش انقاذ {gov.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;

