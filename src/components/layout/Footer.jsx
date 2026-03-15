import { Link } from 'react-scroll';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
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
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.logo}>
              <ElvionLogo height={32} variant="full" />
            </div>
            <p className={styles.desc}>
              A turnkey system integrator with core expertise in ELV, IT Infrastructure,
              Infra Automation & Smart Solutions since 2025.
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/elvionsystems/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className={styles.socialLink} aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
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
                <a href="mailto:hitesh@elvionsystems.com">hitesh@elvionsystems.com</a>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href="tel:+919736256900">+91-97362-56900</a>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>207 A5 Tulip Lemon, Near Spaze Corporate Plaza, Sector 69, Gurugram, HR, 122101</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2025-{new Date().getFullYear()} Elvion Systems Pvt. Ltd. All rights reserved.</p>
          <p>Designed & Developed with precision.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
