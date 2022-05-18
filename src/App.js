import React from 'react';
import Wrapper from './Wrapper';
import ButtonBox from './ButtonBox';
import Button from './Button';
import AnswerScreen from './AnswerScreen';
import './App.css';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8 , 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]]
function App() {

  const buttonArr = btnValues.flat().map((button) => {
  return (
  <Button 
    key = {button} 
    className = {button === "=" ? "equals" : ""}
    value = {button}
    onClick = {() => console.log(`${button}`)
  }
    />) })
  // // console.log(buttonArr)

  // const buttonArr = btnValues.flat().map((btn, i) => {
  //   return (
  //     <Button
  //       key={i}
  //       className={btn === "=" ? "equals" : ""}
  //       value={btn}
  //       onClick={() => {
  //         console.log(`${btn} clicked!`);
  //       }}
  //     />
  //   );
  // })

  return (
    <div>
      <Wrapper>
        <AnswerScreen value = "0"/>
        <ButtonBox>
        {buttonArr}
        </ButtonBox>
      </Wrapper>

    </div>
  );
}

export default App;
