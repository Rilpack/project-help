import { Button } from '../Button/Button'
import styles from './Header.module.scss'
import logo from '@/assets/images/svg/logo.svg'
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header_layout}>
      <div className={styles.header_container}>
        <div className={styles.header_logo_block} onClick={() => navigate("/")}>
          <img className={styles.logo} src={logo} />
          <div className={styles.header_logo_blocK_text}>
            <h1 className={styles.logo_text}>Project Help</h1>
            <span className={styles.logo_subtext}>Каждый листок — вклад в добро</span>
          </div>
        </div>
        <div className={styles.header_block_btns}>
          <Button typeStyle='light' text='Регистрация' />
          <Button typeStyle='dark' text='Войти' />
        </div>
      </div>
    </div>
  )
}