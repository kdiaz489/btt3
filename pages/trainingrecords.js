import styles from '../styles/TrainingRecords.module.css';
function trainingrecords() {
  return (
    <div>
      {/* Nav bar */}
      <div className={styles.navbar}>
        <div>
          <img
            className={styles.backarrow}
            src='https://image.flaticon.com/icons/png/512/507/507257.png'></img>
        </div>
        <div>
          <h1 className={styles.title2}>Training Records</h1>
        </div>
        <div>
          <a href=''>
            <img
              className={styles.menuicon}
              src='https://pics.freeicons.io/uploads/icons/png/15211315791553239378-512.png'></img>
          </a>
        </div>
      </div>

      <div className={styles.bttbg}>
        <p className={styles.description}>
          <a className={styles.link} href='https://www.google.com'>
            Profile:
          </a>
          &nbsp; Zane is 5'4", 20 years old and has mild ADHD. She sometimes
          experiences hearing difficulties.
          <img
            className={styles.qrcode}
            src='https://www.dummies.com/wp-content/uploads/324172.image0.jpg'></img>
        </p>
        {/* Certificate */}
        <main className={styles.certificate}>
          <div>
            <p className={styles.title}>
              CERTIFICATE OF COMPLETION
              <p className={styles.description}>Beyond The Talk awards</p>
            </p>
            <div className={styles.title}>
              Zane Joe
              <p className={styles.description}>
                for completing the Self Awareness course on 7/10/2021
              </p>
            </div>
            <div>
              <p className={styles.inlineleft}>
                <h2> President </h2>
                <h2>John Doe</h2>
              </p>
              <p className={styles.inlineright}>
                <h2> Tutor </h2>
                <h2>Lee Mark</h2>
              </p>
            </div>
          </div>
        </main>
        <div>
          <p className={styles.print}>Print Certificate</p>{' '}
          <p className={styles.print}>Print QR Code</p>
          {/* Reason For Traffic Stop Form */}
          <form className={styles.trafficstop}>
            <h2 className={styles.topleft}>Officer Name:</h2>
            <label className={styles.topleft} for='officerName'></label>
            <input type='text' id='officerName' name='officerName'></input>{' '}
            <br />
            <h2 className={styles.topleft}>Badge Number:</h2>
            <label className={styles.topleft} for='badgeNumber'></label>
            <input type='text' id='badgeNumber' name='badgeNumber'></input>{' '}
            <br />
            <h2 className={styles.topleft}>Reason for Traffic Stop:</h2>
            <label className={styles.topleft} for='reasonForStop'></label>
            <textarea rows='5' cols='60' name='reasonForStop'></textarea> <br />
            <button className={styles.bottomright} type='button'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default trainingrecords;
