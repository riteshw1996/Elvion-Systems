import { motion } from 'framer-motion';
import { FaMicrochip, FaGlobe, FaUserShield, FaHandshake, FaShieldAlt, FaCogs, FaComments, FaChartLine, FaFlag, FaEye } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import styles from './About.module.css';

const strengths = [
  { Icon: FaMicrochip, title: 'Tech-Driven & Future-Focused' },
  { Icon: FaGlobe, title: 'Global Technology Tie-Ups' },
  { Icon: FaUserShield, title: 'Experienced & Certified Professionals' },
  { Icon: FaHandshake, title: 'High Client Retention Rate' },
  { Icon: FaShieldAlt, title: 'EH&S Compliance' },
  { Icon: FaCogs, title: 'End-to-End Capabilities' },
  { Icon: FaComments, title: 'Transparent Communication' },
  { Icon: FaChartLine, title: 'Strong Project Management' },
];

function About() {
  return (
    <section className={`${styles.about} section-padding`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle label="ABOUT US" title="Who We Are" centered={false} />
            <p className={styles.description}>
              Established in 2025, Elvion Systems Private Limited is a turnkey system integrator
              with core expertise in ELV, IT Infrastructure, Infra Automation, and Smart Solutions.
              With Global operations and technology partnerships, we deliver everything
              from Fire Alarm Systems to intelligent building integration.
            </p>
            <p className={styles.cin}>CIN: U46599HR2025PTC135246</p>

            <div className={styles.missionVision}>
              <motion.div
                className={styles.mvBlock}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className={styles.mvIcon}>
                  <FaFlag />
                </div>
                <div>
                  <h4 className={styles.mvTitle}>Our Mission</h4>
                  <p className={styles.mvText}>
                    To empower clients through innovative, integrated technologies like IoT and AI —
                    delivering intelligent systems that solve real-world problems and drive digital transformation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.mvBlock}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className={styles.mvIcon}>
                  <FaEye />
                </div>
                <div>
                  <h4 className={styles.mvTitle}>Our Vision</h4>
                  <p className={styles.mvText}>
                    To become a globally recognized leader in smart infrastructure and system integration,
                    known for excellence, innovation, and value creation across industries.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.blockquote
              className={styles.motto}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &ldquo;We serve value, not just services.&rdquo;
            </motion.blockquote>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.strengthsTitle}>Our Strengths</h3>
            <div className={styles.strengthsGrid}>
              {strengths.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={styles.strengthCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                >
                  <div className={styles.strengthIcon}>
                    <item.Icon />
                  </div>
                  <span className={styles.strengthLabel}>{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
