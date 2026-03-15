import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import SectionTitle from '../ui/SectionTitle';
import { ProductIllustration } from '../ui/ProductIllustrations';
import { products } from '../../data/products';
import styles from './Products.module.css';

function Products() {
  return (
    <section className={`${styles.products} section-padding`} id="products">
      <div className="container">
        <SectionTitle label="OUR SOLUTIONS" title="Technology Products & Solutions" />

        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={styles.cardImage}>
                <ProductIllustration productId={product.id} />
              </div>
              <div className={styles.iconWrap}>
                <product.Icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{product.title}</h3>
              <p className={styles.cardDesc}>{product.description}</p>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-72}
                className={styles.cardLink}
              >
                Learn more <FaArrowRight className={styles.arrow} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
