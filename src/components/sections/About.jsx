import { motion } from 'framer-motion';
import { FaCogs, FaHandshake, FaProjectDiagram } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import styles from './About.module.css';

const values = [
  {
    Icon: FaCogs,
    title: 'Technical Excellence',
    description: '150+ certified professionals delivering precision-engineered solutions across ELV, IT, and smart building domains.',
  },
  {
    Icon: FaHandshake,
    title: 'Client-First Approach',
    description: '95% client retention through transparent, accountable partnerships and dedicated project ownership.',
  },
  {
    Icon: FaProjectDiagram,
    title: 'End-to-End Delivery',
    description: 'From consulting and design to deployment, commissioning, and ongoing AMC support — we cover the full lifecycle.',
  },
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
              Founded in 2019, Elvion Systems Pvt. Ltd. is a premier turnkey system integrator
              specializing in ELV, IT Infrastructure, and Smart Building Solutions. With PAN India
              operations and global technology partnerships, we deliver comprehensive technology
              solutions that transform spaces into intelligent, connected environments.
            </p>
            <p className={styles.description}>
              Our tech-driven, future-focused approach combines deep domain expertise with
              cutting-edge technology to serve clients across Smart Cities, Government Infrastructure,
              Education, Healthcare, Corporate, and Hospitality sectors.
            </p>

            <div className={styles.values}>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className={styles.valueItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={styles.iconCircle}>
                    <value.Icon />
                  </div>
                  <div>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDesc}>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderContent}>
                  <span className={styles.placeholderIcon}>&#9670;</span>
                  <span className={styles.placeholderText}>Elvion Systems</span>
                  <span className={styles.placeholderSub}>Building Smarter Spaces</span>
                </div>
              </div>
              <div className={styles.frameDecor} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
