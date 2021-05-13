import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/home.module.css"
import Login_in from "../components/login"
import Title from '../components/login'

const login = () => {
  return (
    <div className={styles.bg}>
    <div className={styles.container}>
    <Title />
    <div className={styles.bgimg}>
    <Image src="/Rectangle3.png"
    width="400"
    height="500"
    layout="responsive">

    </Image>
    <div className={styles.imgdiv}>
    <Image src='/image.png'
    width="414"
    height="413"
    layout="responsive"
    />
    </div>
    </div>
    </div>
      </div>
  )
}
      
export default login
