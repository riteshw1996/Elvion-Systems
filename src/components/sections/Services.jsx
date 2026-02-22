import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';
import styles from './Services.module.css';

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section className={`${styles.services} section-padding`} id="services">
      <div className="container">
        <SectionTitle label="OUR SERVICES" title="Comprehensive Technology Solutions" light />

        <div className={styles.tabs}>
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <service.Icon className={styles.tabIcon} />
              <span className={styles.tabLabel}>{service.shortTitle}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className={styles.detail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.detailContent}>
              <div className={styles.detailLeft}>
                <div className={styles.detailIconWrap}>
                  <active.Icon className={styles.detailIcon} />
                </div>
                <h3 className={styles.detailTitle}>{active.title}</h3>
                <p className={styles.detailDesc}>{active.description}</p>
                <ul className={styles.bulletList}>
                  {active.bullets.map((bullet) => (
                    <li key={bullet} className={styles.bulletItem}>
                      <FaCheckCircle className={styles.bulletIcon} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailRight}>
                <div className={styles.detailVisual}>
                  <active.Icon className={styles.visualIcon} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Services;
