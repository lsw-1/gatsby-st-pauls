import React from 'react'
// import { Link } from 'gatsby'
import styles from './index.module.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../res/images/Logo@4x.png'
import Facebook from '../res/svg/facebook.svg'
import Instagram from '../res/svg/instagram.svg'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`bageri`, `bröd`, `lokalt`]} />
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="" />
          <div className={styles.info}>
            <p>Saktpaulsgatan 24 - Stockholm, Södermalm</p>
            <p>Öppettider Vardagar 07.00-19.00 Helger 08.00-19.00</p>
          </div>
          <div className={styles.iconWrapper}>
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
