import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const RockPaperScissorClone = () => {
  const [userhand, setuserhand] = useState();
  const [aihand, setaihand] = useState();

  const hands = [
    { id: 0, type: "rock", text: "Rock" },
    { id: 1, type: "paper", text: "Paper" },
    { id: 2, type: "scissors", text: "Scissors" }
  ];

  const handleAiChoice = () => hands[Math.floor(Math.random() * hands.length)]

  const handleFight = (userhand) => () => {
    setuserhand(userhand)
    setaihand(handleAiChoice())
  }

  const determineWinner = () => {
    // Tie
    if(userhand.id && aihand.id) return "Both"

    // One Winner
    const userId = userhand.id;
    const aiID = aihand.id;

    switch(userId) {
      case 0: return aiID === 2 
      ? "user"
      : "ai"

      case 1: return aiID === 2 
      ? "ai"
      : "user"

      case 2: return aiID === 1 
      ? "user"
      : "ai"
    }

  }

  return (
    <>
    <div className='container-fluid'>
        
        <Row className='lp-head py-3 mb-3'>
            <Link className='home-button mx-3' to={`/`}><i className='bi bi-house-door-fill'></i></Link>
            <h1 className='lp-header mx-auto'>ROCK PAPER SCISSORS</h1>
        </Row>
      </div>
    <div>
      <div>Choose your weapon:</div>
      <br />
      {
        hands.map(x => <button key={x.id} onClick={handleFight(x)}>{x.text}</button>)
      }
        <br />
        <br />
      {
        userhand === undefined ? null : <div>User choosed: {userhand.text}</div>
      }
        <br />
        <br />
      {
        aihand === undefined ? null : <div>AI choosed: {aihand.text}</div>
      }
        <br />
        <br />
      {
        aihand === undefined && userhand === undefined 
        ? null 
        : <div>Result: {determineWinner()} wins</div>
      }
    </div>
    </>
  );
}

export default RockPaperScissorClone;
