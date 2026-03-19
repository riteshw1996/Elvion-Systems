import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGoogle, FaStar, FaTimes } from 'react-icons/fa';
import { services } from '../../data/services';
import ElvionLogo from '../ui/ElvionLogo';
import styles from './Footer.module.css';

const quickLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'services', label: 'Services' },
  { to: 'products', label: 'Products' },
  { to: 'industries', label: 'Industries' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

function Footer() {
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    if (!showReviews) return;
    const handleEsc = (e) => { if (e.key === 'Escape') setShowReviews(false); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [showReviews]);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.logo}>
              <ElvionLogo height={48} variant="full" dark />
            </div>
            <p className={styles.desc}>
              A turnkey system integrator with core expertise in ELV, IT Infrastructure,
              Infra Automation & Smart Solutions since 2025.
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/elvionsystems/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedin /></a>
              <button onClick={() => setShowReviews(true)} className={styles.socialLink} aria-label="Google Reviews"><FaGoogle /></button>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-72}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="services"
                    smooth
                    duration={600}
                    offset={-72}
                    className={styles.footerLink}
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:info@elvionsystems.com">info@elvionsystems.com</a>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href="tel:+919736256900">+91-97362-56900</a>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>207, A5 Tulip Lemon, Sector 69, Gurugram, Haryana, 122101</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2025-{new Date().getFullYear()} Elvion Systems Pvt. Ltd. All rights reserved.</p>
          <p>Designed & Developed by Walia's</p>
        </div>
      </div>

      {showReviews && (
        <div className={styles.reviewsOverlay} onClick={() => setShowReviews(false)}>
          <div className={styles.reviewsModal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.reviewsClose} onClick={() => setShowReviews(false)} aria-label="Close">
              <FaTimes />
            </button>
            <div className={styles.reviewsGoogleIcon}>
              <FaGoogle />
            </div>
            <h3 className={styles.reviewsTitle}>Our Google Reviews</h3>
            <div className={styles.reviewsStars}>
              {[...Array(5)].map((_, i) => <FaStar key={i} className={styles.star} />)}
            </div>
            <p className={styles.reviewsSubtext}>Scan the QR code to see our reviews and share your experience</p>
            <img src="/images/qr_google.png" alt="Scan to review Elvion Systems on Google" className={styles.reviewsQr} />
            <p className={styles.reviewsCta}>Point your phone camera at the QR code</p>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
