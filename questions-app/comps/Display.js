import QuestionResult from '/comps/QuestionResult'
const Display = (props) => {

  let results = [];

  for(let i = 0; i < props.questions.length; i++) {

    results.push(<QuestionResult key={i} question={props.questions[i]} answer={props.answers[i]} style={props.style}/>)

  }

  return (
    <section className={props.style.display}>
      {results.map((value, index) => {
        return results[index]
      })}
    </section>
  )
}

export default Display;