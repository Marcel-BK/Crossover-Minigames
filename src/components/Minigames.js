import React from 'react'
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";

const Minigames = () => {
  return (
    <>
    <div className='container-fluid'>
        
        <Row className='lp-head py-3 mb-3'>
            <Link className='home-button mx-3' to={`/`}><i className='bi bi-house-door-fill'></i></Link>
            <h1 className='lp-header mx-auto'>CHOOSE A GAME</h1>
        </Row>

        <Row>

            <Link className="p-0 lp-card my-5 mx-auto" to={`/memory`}>
                <Card className="p-0">
                    <Card.Header className="p-0">
                    <div>
                        <h2 className="lp-title text-center py-2 my-1">Memory</h2>
                    </div>
                    </Card.Header>

                    <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                        <img className='mx-auto mt-3 lp-img' src='https://w7.pngwing.com/pngs/286/777/png-transparent-brain-training-brain-games-brain-drain-mind-games-free-brain-games-shapes-memory-game-find-two-of-the-same-brain-text-people-logo-thumbnail.png' alt='Memory Logo' />
                    </div>
                    </Card.Body>
                </Card>
            </Link>


            <Link className="p-0 lp-card my-5 mx-auto" to={`/tictactoe`}>
                <Card className="p-0">
                    <Card.Header className="p-0">
                    <div>
                        <h2 className="lp-title text-center py-2 my-1">TicTacToe</h2>
                    </div>
                    </Card.Header>

                    <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                        <img className='mx-auto mt-3 lp-img' src='https://cdn-icons-png.flaticon.com/512/566/566294.png' alt='Memory Logo' />
                    </div>
                    </Card.Body>
                </Card>
            </Link>


            <Link className="p-0 lp-card my-5 mx-auto" to={`/rockpaperscissors`}>
                <Card className="p-0">
                    <Card.Header className="p-0">
                    <div>
                        <h2 className="lp-title text-center py-2 my-1">Rock Paper Scissors</h2>
                    </div>
                    </Card.Header>

                    <Card.Body className="p-0">
                    <div className="d-flex align-items-center">
                        <img className='mx-auto mt-3 lp-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqMcGe1UX89sVkoNP2Zc6zi1je0s_v12gtw&usqp=CAU' alt='Memory Logo' />
                    </div>
                    </Card.Body>
                </Card>
            </Link>

        </Row>
    </div>
    </>
  )
}

export default Minigames