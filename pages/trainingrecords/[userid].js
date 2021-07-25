import styles from '../../styles/TrainingRecords.module.css';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { Firebase, firestore } from '../../lib/firebaseClient';
import { useRouter } from 'next/router';
import { runTransaction } from "firebase/firestore";


function Trainingrecords() {

  //QR States
  const liveLink = process.env.LINK || 'http://localhost:3000/trainingrecords/';
  const [qrCodeLink,setQrCodeLink] = useState({download: null, href: null});
  const [urlLink, setUrlLink] = useState(null);

  // Profile State
  const [profile,setProfile] = useState({isProfile: false, certification: null});
  

  // Router
  const router = useRouter();
  const { userid } = router.query;
  const usersRef = firestore.collection('profiles').doc(`${userid}-profile`);

  
  const checkUser = async () => {
    try {
      const response = await usersRef.get();
      if(response.exists) {
        console.log('here you go');
      }
      else {
        console.log('no');
      }
    }
    catch(error) {
      console.log('what happened');
      return;
    }
  }

  const handleDownloadLink = () => {
    if (urlLink) {
      const canvas = document.getElementById("qr-code");
      const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
      setQrCodeLink({download: "qr-code.png", href:pngUrl});
    }
    return;
  }
  

  useEffect(() => {
    async function manageLoad() {
    // Check User
      await checkUser();
    // Get Download Link for Qr Code Maybe not for Training Records?
      await handleDownloadLink();
    }

    manageLoad();

   

  },[]);
  
  return (
    // Conditon Renders
    !profile.isProfile? 
    <div>
      Profile does not exist....
    </div>
    :
    <div>
      {/* Nav bar */}
      <div className={styles.navbar}>
        <div>
          <a href=''>
            <img
            className={styles.backarrow}
            src='https://image.flaticon.com/icons/png/512/507/507257.png'></img></a>
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
        <p className={styles.profiletext}>
          <a className={styles.link} href='https://www.google.com'>
            Profile:
          </a>
          &nbsp; Zane is 5'4", 20 years old and has mild ADHD. She sometimes
          experiences hearing difficulties.
          <div className={styles.qrcode}>
          <QRCode id="qr-code" value={urlLink} />
          {qrCodeLink.download && 
          <a id="download-link" download={qrCodeLink.download} href={qrCodeLink.href}> Save QR as Image </a>
          }
          </div>
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
            <div className={styles.spacedtext}>
              <p>President
              <p>John Doe</p>
              </p>
              <p>Tutor
              <p>Lee Mark</p>
              </p>
            </div>
          </div>
        </main>
        <div>
          <a className = {styles.print}>Print Certificate</a>{' '}
          {/* Reason For Traffic Stop Form */}
          <form className={styles.trafficstop}>
            <h2 className={styles.topleft}>Officer Name:</h2>
            <label className={styles.topleft} for='officerName'></label>
            <input className={styles.topleftinput} type='text' id='officerName' name='officerName'></input>{' '}
            <br />
            <h2 className={styles.topleft}>Badge Number:</h2>
            <label className={styles.topleft} for='badgeNumber'></label>
            <input className={styles.topleftinput} type='text' id='badgeNumber' name='badgeNumber'></input>{' '}
            <br />
            <h2 className={styles.topleft}>Reason for Traffic Stop:</h2>
            <label className={styles.topleft} for='reasonForStop'></label>
            <textarea className={styles.topleftinput} rows='5' cols='34' name='reasonForStop'></textarea> <br />
            </form>
          <button className = {styles.submit} type='button'>
              Submit
            </button>
        </div>
      </div>
    </div>
  );
}

export default Trainingrecords;
