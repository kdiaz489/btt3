import styles from '../styles/ProfileSettings.module.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';
const profilesettings = () => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie.includes('auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
          alt='profile picture'
          className={styles.avatar}
        />
        <a style={{ marginTop: '20px' }} href='google.com'>
          Click to Change
        </a>
        <h1>Zane</h1>

        {/* form container */}
        <div className={styles.formContainer}>
          <div>
            <p style={{ textAlign: 'end' }}>
              <span className={styles.required}>*</span> Required
            </p>
          </div>
          <form action=''>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='firstName'>
                First Name <span className={styles.required}>*</span>{' '}
              </label>
              <input
                className={styles.input}
                type='text'
                name='firstName'
                id='firstName'
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='lastName'>
                Last Name <span className={styles.required}>*</span>{' '}
              </label>
              <input
                className={styles.input}
                type='text'
                name='lastName'
                id='lastName'
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='email'>
                Email{' '}
              </label>
              <input
                className={styles.input}
                type='email'
                name='email'
                id='email'
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='phone'>
                Phone <span className={styles.required}>*</span>{' '}
              </label>
              <input
                className={styles.input}
                type='text'
                name='phone'
                id='phone'
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='location'>
                Location (City){' '}
              </label>
              <input
                className={styles.input}
                type='text'
                name='location'
                id='location'
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='dateofbirth'>
                Date of Birth{' '}
              </label>
              <input
                className={styles.input}
                type='date'
                name='dateofbirth'
                id='dateofbirth'
              />
            </div>
            <div className={styles.formGroup}>
              <p>
                Completion of the fields below is entirely voluntary. Any
                information that you do provide will be recorded and maintained
                for confidential purposes.
              </p>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='gender'>
                Gender{' '}
              </label>
              <select className={styles.input} name='gender' id='gender'>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
                <option value='gender-non'>Gender Non-Conforming</option>
                <option value='prefernot'>Prefer Not To Say</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='latinx'>
                Are you Latino/Hispanic?{' '}
              </label>
              <select
                className={styles.input}
                name='latinxhisp'
                id='latinxhisp'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='veteran'>
                Veteran Status{' '}
              </label>
              <select className={styles.input} name='veteran' id='veteran'>
                <option value='Veteran'>I am a veteran</option>
                <option value='Veteran'>I am not a veteran</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor='disability'>
                Disability Status{' '}
              </label>
              <select
                className={styles.input}
                name='disability'
                id='disability'>
                <option value=''>Option1</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className={styles.submitButton} type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default profilesettings;
