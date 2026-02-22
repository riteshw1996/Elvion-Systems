import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import styles from './Hero.module.css';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            Turnkey System Integrator
          </motion.span>
          <motion.h1 className={styles.headline} variants={itemVariants}>
            Redefining <span className={styles.highlight}>Technology</span> Integration Since 2019
          </motion.h1>
          <motion.p className={styles.subheadline} variants={itemVariants}>
            Premier ELV, IT Infrastructure & Smart Building Solutions provider with PAN India operations and global technology partnerships.
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
              <span className={styles.statNum}>150+</span>
              <span className={styles.statLabel}>Professionals</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>95%</span>
              <span className={styles.statLabel}>Client Retention</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>PAN India</span>
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
                <button type="submit" className={styles.submitBtn}>
                  <FaPaperPlane /> Send Request
                </button>
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
