import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';
import styles from './Contact.module.css';

const contactInfo = [
  { Icon: FaEnvelope, label: 'Email', value: 'hitesh@elvionsystems.com', href: 'mailto:hitesh@elvionsystems.com' },
  { Icon: FaPhone, label: 'Phone', value: '+91-97362-56900', href: 'tel:+919736256900' },
  { Icon: FaMapMarkerAlt, label: 'Address', value: '207 A5 Tulip Lemon, Near Spaze Corporate Plaza, Sector 69, Gurugram, HR, 122101', href: null },
  { Icon: FaGlobe, label: 'Operations', value: 'PAN India with Global Partnerships', href: null },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = 'Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone || !/^\+?\d{10,}$/.test(formData.phone.replace(/[\s-]/g, ''))) newErrors.phone = 'Valid phone required';
    if (!formData.message || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Simulate form submission (replace with Formspree endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className={`${styles.contact} section-padding`} id="contact">
      <div className="container">
        <SectionTitle label="GET IN TOUCH" title="Let's Build Something Together" />

        <div className={styles.grid}>
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.infoText}>
              Ready to transform your infrastructure? Whether you need a complete system integration,
              smart building solution, or ongoing maintenance support — our team is here to help.
            </p>

            <div className={styles.infoItems}>
              {contactInfo.map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <item.Icon />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.infoValue}>{item.value}</a>
                    ) : (
                      <span className={styles.infoValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.mapWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7!2d77.03!3d28.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzM2LjAiTiA3N8KwMDEnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elvion Systems Office Location"
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.formCard}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  {/* Honeypot for spam */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Full Name *</label>
                    <input
                      type="text" name="name" placeholder="John Doe"
                      value={formData.name} onChange={handleChange}
                      className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                    />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Email Address *</label>
                      <input
                        type="email" name="email" placeholder="john@company.com"
                        value={formData.email} onChange={handleChange}
                        className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                      />
                      {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Phone Number *</label>
                      <input
                        type="tel" name="phone" placeholder="+91-XXXXX-XXXXX"
                        value={formData.phone} onChange={handleChange}
                        className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
                      />
                      {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Company Name</label>
                      <input
                        type="text" name="company" placeholder="Your Company"
                        value={formData.company} onChange={handleChange}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Service Interest</label>
                      <select
                        name="service" value={formData.service} onChange={handleChange}
                        className={styles.formSelect}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>{s.shortTitle}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Message *</label>
                    <textarea
                      name="message" placeholder="Tell us about your project requirements..."
                      value={formData.message} onChange={handleChange} rows="4"
                      className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? (
                      <span className={styles.spinner} />
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className={styles.successState}>
                  <FaCheckCircle className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
