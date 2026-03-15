import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { phases } from '../../data/projectApproach';
import styles from './ProjectApproach.module.css';

function ProjectApproach() {
  return (
    <section className={`${styles.approach} section-padding`} id="approach">
      <div className="container">
        <SectionTitle label="PROJECT APPROACH" title="Our 6-Phase Delivery Model" />

        <div className={styles.timeline}>
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={styles.phaseCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.phaseHeader}>
                <div className={styles.phaseNumber}>
                  <phase.Icon className={styles.phaseIcon} />
                  <span className={styles.number}>{phase.id}</span>
                </div>
                {index < phases.length - 1 && <div className={styles.connector} />}
              </div>
              <h3 className={styles.phaseTitle}>{phase.title}</h3>
              <ul className={styles.phaseItems}>
                {phase.items.map((item) => (
                  <li key={item} className={styles.phaseItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectApproach;
