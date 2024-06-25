import styles from './Button.module.scss'

interface IButton {
  typeStyle: "dark" | "light",
  text: string
}

export const Button = ({ typeStyle, text }: IButton) => {
  return (
    <button className={typeStyle === 'light' ? styles.light_button : styles.dark_button}>
      {text}
    </button>
  )
}