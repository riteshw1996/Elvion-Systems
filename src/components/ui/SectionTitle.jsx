import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

function SectionTitle({ label, title, light = false, centered = true }) {
  return (
    <motion.div
      className={`${styles.wrapper} ${centered ? styles.centered : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <span className={`${styles.label} ${light ? styles.light : ''}`}>{label}</span>
      <h2 className={`${styles.title} ${light ? styles.light : ''}`}>{title}</h2>
      <div className={styles.rule} />
    </motion.div>
  );
}

export default SectionTitle;
