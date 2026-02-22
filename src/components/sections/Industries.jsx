import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { industries } from '../../data/industries';
import styles from './Industries.module.css';

function Industries() {
  return (
    <section className={`${styles.industries} section-padding`} id="industries">
      <div className="container">
        <SectionTitle label="INDUSTRIES WE SERVE" title="Trusted Across Sectors" light />

        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className={styles.cardBg}>
                <div className={styles.iconBg}>
                  <industry.Icon />
                </div>
              </div>
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <p className={styles.cardDesc}>{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
