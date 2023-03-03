import styles from "./Answer.module.css";

const Answer = ({answer}) => {
  // if(!answer) {
  //   return <p>Waiting</p>
  // }
  return (
    <p className={styles.line}>{answer}</p>
  )
}

export default Answer;
