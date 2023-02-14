import styles from "./Answer.module.css";

const Answer = ({answer}) => {
  console.log(answer)
  return (
    <p className={styles.line}> answer</p>
  )
}

export default Answer;