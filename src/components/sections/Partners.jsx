import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { partnerCategories } from '../../data/partners';
import styles from './Partners.module.css';

function Partners() {
  return (
    <section className={`${styles.partners} section-padding`} id="partners">
      <div className="container">
        <SectionTitle label="TECHNOLOGY PARTNERS" title="Trusted Global Partnerships" />

        <div className={styles.grid}>
          {partnerCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{category.title}</h3>
              <div className={styles.pills}>
                {category.partners.map((partner) => (
                  <span key={partner} className={styles.pill}>
                    {partner}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling marquee of all partner names */}
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {[...partnerCategories.flatMap((c) => c.partners), ...partnerCategories.flatMap((c) => c.partners)].map(
              (name, i) => (
                <span key={i} className={styles.marqueeName}>
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
