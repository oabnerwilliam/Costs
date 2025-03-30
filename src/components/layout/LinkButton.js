import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text, color }) {
  return (
    <>
      <Link className={`${styles.btn} ${styles[color]}`} to={to}>{text}</Link>
    </>
  )
}

export default LinkButton
