import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import styles from './Hero.module.css';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_KEY = 'fb79b864-e6e8-40a2-b44f-109f2ac81a86';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Hero() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || 'Callback requested',
          from_name: 'Elvion Systems Website',
          subject: `Callback Request from ${formData.name}`,
          replyto: formData.email,
          botcheck: false,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError('Failed to send. Please try again or email us at info@elvionsystems.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgOverlay} />
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.left}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.badge} variants={itemVariants}>
            Turnkey System Integrator | Est. 2025
          </motion.span>
          <motion.h1 className={styles.headline} variants={itemVariants}>
            Integrating <span className={styles.highlight}>Innovation</span> with Infrastructure
          </motion.h1>
          <motion.p className={styles.subheadline} variants={itemVariants}>
            We serve value, not just services. Elvion Systems is a turnkey system integrator with core expertise in ELV, IT Infrastructure, Infra Automation & Smart Solutions — with Global operations and technology partnerships.
          </motion.p>
          <motion.div className={styles.buttons} variants={itemVariants}>
            <Link to="services" smooth duration={600} offset={-72} className={styles.btnPrimary}>
              Explore Our Services <FaArrowRight />
            </Link>
            <Link to="contact" smooth duration={600} offset={-72} className={styles.btnOutline}>
              Contact Us
            </Link>
          </motion.div>
          <motion.div className={styles.quickStats} variants={itemVariants}>
            <div className={styles.stat}>
              <span className={styles.statNum}>100+</span>
              <span className={styles.statLabel}>Professionals</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>95%</span>
              <span className={styles.statLabel}>Client Retention</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>Global</span>
              <span className={styles.statLabel}>Operations</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Request a Callback</h3>
            <p className={styles.formSubtitle}>Get in touch with our experts</p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <textarea
                  name="message"
                  placeholder="Brief Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  className={styles.textarea}
                />
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? <span className={styles.spinner} /> : <><FaPaperPlane /> Send Request</>}
                </button>
                {error && <p className={styles.errorMsg}>{error}</p>}
              </form>
            ) : (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>&#10003;</span>
                <p>Thank you! We'll get back to you shortly.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
