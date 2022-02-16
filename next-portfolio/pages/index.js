import Head from 'next/head';
import Image from 'next/image';
import Form from '../components/Form';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akshay Benny</title>
        <meta
          name='description'
          content='Developer portfolio of Akshay Benny'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}
