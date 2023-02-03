import Question from '/comps/Question'
import Answer from '/comps/Answer'

const Display = (props) => {
  return (
    <section className={props.style.display}>
      <Question question={props.question} style={props.style} />
      <Answer answer={props.answer} style={props.style} />
    </section>
  )
}

export default Display;