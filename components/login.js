import React, { useEffect } from 'react'
import styles from "../styles/component_styles/login.module.css"
import Image from 'next/image'
import Link from 'next/link'



function Title() {
  return (
    <div className={styles.container}>
      <div className={styles.prancheta}>
      <Image src="/Prancheta.png"
      width="259px"
      height="77.55"
      />
      </div>
      <h1 className={styles.title}> Bem Vindo ao Painel </h1>
      
      <span className={styles.block}>
      <input type="text" placeholder="Digite seu e-mail" className={styles.email} ></input>
      <input  type="text" placeholder="Digite sua Senha" className={styles.senha} ></input>
      </span>
      <Link href="/content">
      <button type="button" className={styles.botao}> Acessar </button>
      </Link>
    </div>
  )
}

export default Title