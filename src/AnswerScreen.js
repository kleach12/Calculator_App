import "./AnswerScreen.css"
import { Textfit } from "react-textfit";
function AnswerScreen({value}) {
  return(
    <Textfit className="screen" mode="single" max={70}> {value} </Textfit>
  )
}

export default AnswerScreen