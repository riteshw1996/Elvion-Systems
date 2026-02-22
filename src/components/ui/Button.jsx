import styles from './Button.module.css';

function Button({ children, variant = 'primary', size = 'md', onClick, type = 'button', className = '', ...props }) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
