import Question from '/comps/Question';
import Answer from '/comps/Answer';
import styles from './Card.module.css';

const Card = ({question, answer}) => {
  return (<div className={styles.card}>
    <Question question={question}/>
    <Answer answer={answer}/>
  </div>)
}

export default Card;