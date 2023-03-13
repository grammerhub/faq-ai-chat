import Card from './Card';
import styles from './Display.module.css';

const Display = ({log}) => {

  return (
    <section className={styles.display}>
      {log.map((value, index) => {
        return <Card key={index} question={value.question} answer={value.answer}/>
      })}
    </section>
  )
}

export default Display;