import styles from './ElvionLogo.module.css';

function ElvionLogo({ height = 44, variant = 'full', dark = false }) {
  return (
    <div className={styles.logoWrap}>
      <img
        src="/images/logo.jpeg"
        alt="Elvion Systems"
        className={`${styles.logoImg} ${dark ? styles.logoDark : styles.logoLight}`}
        style={{ height: `${height}px` }}
      />
      {variant === 'full' && (
        <div className={`${styles.logoText} ${dark ? styles.textDark : ''}`}>
          <span className={styles.companyName}>Elvion Systems</span>
          <span className={styles.pvtLtd}>Private Limited</span>
        </div>
      )}
    </div>
  );
}

export default ElvionLogo;
