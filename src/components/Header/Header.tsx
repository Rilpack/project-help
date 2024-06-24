import styles from './Header.module.scss'
import logo from '@/assets/images/svg/logo.svg'

export const Header = () => {
  return (
    <div className={styles.header_layout}>
      <div className={styles.header_logo_block}>
        <img className={styles.logo} src={logo} />
        <div className={styles.header_logo_blocK_text}>
          <h1 className={styles.logo_text}>Project Help</h1>
          <span className={styles.logo_subtext}>Каждый листок — вклад в добро</span>
        </div>
      </div>
      <div className={styles.header_block_btns}>

      </div>
    </div>
  )
}