import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'




export default function Home() {

  

  return (
    <>
    <Head>
      <meta name="keywords" content="ninjas"/>
      <title>Ninja List | Home</title>
    </Head>
    <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>Laboris cupidatat est consequat labore exercitation eu laboris anim anim. Quis ad ea veniam aliquip nulla. Tempor labore eu dolore magna anim velit Lorem. Eiusmod dolore labore ipsum anim mollit voluptate eu exercitation sunt velit do. Voluptate consectetur ex reprehenderit non est labore cillum amet aute fugiat ipsum nisi sunt. Ipsum sunt exercitation ut laborum sit ad exercitation quis eu. Commodo aute dolor ut elit reprehenderit ex adipisicing in consequat sunt dolor.</p>
    <Link legacyBehavior href="/ninjas">
      <a className={styles.btn}>See Ninja Listing</a>
    </Link>
    
    </div>
    </>
  )
}
