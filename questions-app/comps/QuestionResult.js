import Question from '/comps/Question'
import Answer from '/comps/Answer'

const QuestionResult = (props) => {
  return (
    <section>
      <Question question={props.question} style={props.style}/>
      <Answer answer={props.answer} style={props.style} />
    </section>
  )
}

export default QuestionResult;