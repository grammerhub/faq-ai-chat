import Question from '/comps/Question'
import Answer from '/comps/Answer'

const Display = (props) => {


  return (
    <section className={props.style.display}>
      {props.questions.map((value, index) => {
        return <p key={index}>{value}</p>
      })}
      {/* <Answer answer={props.answer} style={props.style} /> */}
    </section>
  )
}

export default Display;