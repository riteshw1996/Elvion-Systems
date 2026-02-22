import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className={styles.button}
          onClick={() => animateScroll.scrollToTop({ duration: 600, smooth: true })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
