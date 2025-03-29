import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text, color }) {
  return (
    <>
      {
        color=="gold" ? (
          <Link className={styles.btnGold} to={to}>
            {text}
          </Link>
        ) : (
          <Link className={styles.btn} to={to}>{text}</Link>
        )
      }
    </>
  )
}

export default LinkButton
