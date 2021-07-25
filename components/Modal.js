import styles from '../styles/Modal.module.css';

const Modal = ({ open, toggleModal, title, children }) => {
  if (!open) {
    return null;
  }

  return (
    <div>
      <button onClick={toggleModal}>{title}</button>
      <div className={styles.modal} onClick={toggleModal}>
        <div
          className={styles['modal-content']}
          onClick={(e) => e.stopPropagation()}>
          <div className={styles['modal-header']}>
            <h4 className={styles['modal-title']}>Modal Title</h4>
          </div>
          <div className={styles['modal-body']}>{children}</div>
          <div className={styles['modal-footer']}>
            <button className={styles['button']} onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
