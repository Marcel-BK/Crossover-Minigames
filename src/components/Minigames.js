import React from 'react'
import { Spinner, Card, Row, Button } from "react-bootstrap";

const Minigames = () => {
  return (
    <>
    <h1>Hello</h1>
    <Card className="p-0">
        <Card.Header className="p-0">
          <div>
            <h2 className="pl-id my-1">Memory</h2>
          </div>
        </Card.Header>

        <Card.Body className="p-0">
          <div className="d-flex align-items-center">
            <img className='mx-auto my-1 pl-img' src='https://media.bisafans.de/7810ef5//pokemon/artwork/001.png' alt='Picture' />
          </div>
        </Card.Body>

        <Card.Footer className="p-0">
          <h3 className="pl-name">Hi</h3>
        </Card.Footer>
    </Card>
    </>
  )
}

export default Minigames