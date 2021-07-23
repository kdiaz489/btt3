import styles from '../styles/Modal.module.css';
const Modal = () => {
  return (
    <div>
      <div className={styles.modal}>
        <div className={styles['modal-content']}>
          <div className={styles['modal-header']}>
            <h4 className={styles['modal-title']}></h4>
          </div>
          <div className={styles['modal-body']}>This is modal content</div>
          <div className={styles['modal-footer']}>
            <button className={styles['button']}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
