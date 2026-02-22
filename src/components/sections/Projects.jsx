import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={`${styles.projects} section-padding`} id="projects">
      <div className="container">
        <SectionTitle label="OUR PROJECTS" title="Delivering Results at Scale" />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderNum}>0{index + 1}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.progressWrap}>
                  <div className={styles.progressHeader}>
                    <span className={styles.progressLabel}>Progress</span>
                    <span className={styles.progressValue}>{project.progress}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <motion.div
                      className={styles.progressBar}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    />
                  </div>
                </div>

                <div className={styles.stats}>
                  {project.stats.map((stat) => (
                    <div key={stat.label} className={styles.statItem}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.ctaText}>Have a project in mind?</p>
          <Link to="contact" smooth duration={600} offset={-72} className={styles.ctaBtn}>
            Let's Talk <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
