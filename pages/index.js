import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingPageNav from '../components/LandingPageNav';
import HeroImage from '../components/HeroImage';
import Banner from '../components/Banner';
import LandingPageFooter from '../components/LandingPageFooter';
export default function Home() {
  return (
    <>
      <LandingPageNav />
      <main>
        <Banner />
        <HeroImage />
      </main>
      <LandingPageFooter />
    </>
  );
}
