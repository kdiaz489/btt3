import styles from '../styles/LandingPageFooter.module.css';

const LandingPageFooter = () => {
  return (
    <footer className={styles.footer}>
      {/* first row */}
      <div className={styles['social-links']}>
        <button>
          <img src='/assets/twitter.svg' alt='twitterbutton' />
        </button>
        <button>
          <img src='/assets/instagram.svg' alt='instagrambutton' />
        </button>
        <button>
          <img src='/assets/facebook.svg' alt='facebookbutton' />
        </button>
      </div>

      {/* second row */}
      <div className={styles.links}>
        <div className={styles['links-left']}>
          <a href='#'>Contact Us</a>
          <a href='#'>Terms and Conditions</a>
        </div>
        <div className={styles['links-right']}>
          <a href='#'>Careers</a>
          <a href='#'>News</a>
          <a href='#'>FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
