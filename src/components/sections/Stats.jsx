import { motion } from 'framer-motion';
import StatCounter from '../ui/StatCounter';
import { stats } from '../../data/stats';
import styles from './Stats.module.css';

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.pattern} />
      <div className="container">
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.id}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
