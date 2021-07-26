import styles from '../../styles/TrainingRecords.module.css';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { Firebase, firestore, auth } from '../../lib/firebaseClient';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuth } from '../../lib/auth';
import LandingPageNav from '../../components/LandingPageNav';
import LandingPageFooter from '../../components/LandingPageFooter';
import { useQuery } from '../../lib/useQuery';


function Trainingrecords() {
  const auth = useAuth();

  //QR States
  const liveLink = process.env.LINK || 'http://localhost:3000/trainingrecords/';
  const [qrCodeLink, setQrCodeLink] = useState({ download: null, href: null });
  const [urlLink, setUrlLink] = useState(null);

  // Profile State
  const [profile, setProfile] = useState({
    isProfile: false,
    certification: null,
  });

  // Router
  const router = useRouter();
  const query = useQuery();

  const { userid } = router.query;

  const usersRef = firestore.collection('profiles').doc(`${userid}-profile`);

  // User Hook
  const [user] = useAuthState(Firebase.auth());

  const checkUser = async () => {
    try {
      const response = await usersRef.get();
      if (response.exists) {
        const data = response.data();
        setProfile({ isProfile: true, certification: data.certification });
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const handleDownloadLink = () => {
    if (urlLink) {
      const canvas = document.getElementById('qr-code');
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      setQrCodeLink({ download: 'qr-code.png', href: pngUrl });
    }
    return;
  };
  const triggerAnnouncement = async() => {
    if ('scanned' in router.query) {
      // Trigger Function
      const messagesRef = firestore.collection('messages');
      const usersRef = firestore.collection('users').doc(`${userid}`);
     
      const response = await usersRef.get();
      if (response.exists) {
        const data = response.data();
        
        await messagesRef.add({
          text: `${data.name} has been pulled up by a cop. Contact ${data.name}.`,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
          uid: 'announcer-123',
          photoURL:'https://secure.gravatar.com/avatar/f6c1e857fe07f88e2cd14c35172603ac?d=https://content.invisioncic.com/s281895/monthly_2017_11/B_member_72239.png',
        });
        router.push(`/trainingrecords/${userid}`);
      } 
   
      router.push(`/trainingrecords/${userid}`);
    }
    return;
  }



  useEffect(() => {
    if (!auth) return;

    async function manageLoad() {
      // Check User
      try {
        await checkUser();
        await handleDownloadLink();
      } catch (error) {
        return;
      }
      // Get Download Link for Qr Code Maybe not for Training Records?
    }

    manageLoad();
  }, [auth, urlLink]);

  useEffect(() => {
    if (!auth) return;
    setUrlLink(`${liveLink}${userid}`);
  }, [profile.certification, auth]);

  // Check for scanned action from url param
  useEffect(() => {
    if (!query) return;
    triggerAnnouncement();
    
    return;
  }, [ query ]);



  return (
    // Conditional Renders
    <>
      {!profile.isProfile ? (
        <div>
          {!auth.user ? <LandingPageNav /> : <Navbar>Training Records</Navbar>}
          <div
            style={{
              height: '70vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1px black solid',
              margin: '2rem',
            }}>
            <img src='/assets/frown.svg' alt='frownface' width='15%' />
            <h1>The certificate #{userid} does not exist.</h1>
            <h2>Please scan a valid QR code.</h2>
          </div>
          <LandingPageFooter></LandingPageFooter>
        </div>
      ) : (
        <div>
          {!auth.user ? <LandingPageNav /> : <Navbar>Training Records</Navbar>}
          <div className={styles.bttbg}>
            <p className={styles.profiletext}>
              <a className={styles.link} href='https://www.google.com'>
                Profile:
              </a>
              &nbsp; Zane is 5'4", 20 years old and has mild ADHD. She sometimes
              experiences hearing difficulties.
              <div className={styles.qrcode}>
              
                  <>
                    <QRCode id='qr-code' value={`${urlLink}?scanned=true`} />
                    {user && qrCodeLink.download && user.uid === userid && (
                      <a
                        id='download-link'
                        download={qrCodeLink.download}
                        href={qrCodeLink.href}
                        >
                        {' '}
                        Save QR{' '}
                      </a>
                    )}
                  </>
             
              </div>
            </p>
            {/* Certificate */}
            {profile.certification ? (
              <main className={styles.certificate}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <img
                    style={{ width: '15%' }}
                    src='/assets/certificateicon.svg'
                    alt='certificateicon'
                  />
                </div>
                <div>
                  <div className={styles.certificatetitle}>
                    CERTIFICATE OF COMPLETION
                    <p className={styles.description}>Beyond The Talk awards</p>
                  </div>
                  <div className={styles.title}>
                    Zane Joe
                    <p className={styles.description}>
                      for completing the Self Awareness course on 7/10/2021
                    </p>
                  </div>
                  <div className={styles.spacedtext}>
                    <div>
                      President
                      <p>John Doe</p>
                    </div>
                    <div>
                      Tutor
                      <p>Lee Mark</p>
                    </div>
                  </div>
                </div>
                <a className={styles.print}>Print Certificate</a>
              </main>
            ) : (
              <div></div>
            )}

            <div>
              {/* Reason For Traffic Stop Form */}
              <form className={styles.trafficstop}>
                <h2 className={styles.topleft}>Officer Name:</h2>
                <label className={styles.topleft} htmlFor='officerName'></label>
                <input
                  className={styles.topleftinput}
                  type='text'
                  id='officerName'
                  name='officerName'></input>{' '}
                <br />
                <h2 className={styles.topleft}>Badge Number:</h2>
                <label className={styles.topleft} htmlFor='badgeNumber'></label>
                <input
                  className={styles.topleftinput}
                  type='text'
                  id='badgeNumber'
                  name='badgeNumber'></input>{' '}
                <br />
                <h2 className={styles.topleft}>Reason for Traffic Stop:</h2>
                <label
                  className={styles.topleft}
                  htmlFor='reasonForStop'></label>
                <textarea
                  className={styles.topleftinput}
                  style={{ width: '60%' }}
                  rows='5'
                  name='reasonForStop'></textarea>{' '}
                <br />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    padding: '0 2rem',
                  }}>
                  <button className={styles.submit} type='button'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Trainingrecords;
