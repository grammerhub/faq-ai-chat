import Question from '/comps/Question';
import Answer from '/comps/Answer';
import styles from './Display.module.css';

const Display = ({questions, answers}) => {

  return (
    <section className={styles.display}>
      {questions.map((value, index) => {
        return <p key={index}>{value}</p>
      })}
      <Answer answer={answers.pred} />
    </section>
  )
}

export default Display;