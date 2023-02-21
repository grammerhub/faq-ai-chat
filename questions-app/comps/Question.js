import styles from './Question.module.css'

const Question = ({question}) => {
  return (
    <p className={styles.line}>Question: {question}</p>
  )
}

export default Question;