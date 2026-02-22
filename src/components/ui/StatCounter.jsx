import { useCountUp } from '../../hooks/useCountUp';
import styles from './StatCounter.module.css';

function StatCounter({ target, suffix = '', label }) {
  const { ref, count } = useCountUp(target, 2000);

  return (
    <div className={styles.counter} ref={ref}>
      <span className={styles.number}>
        {count}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default StatCounter;
