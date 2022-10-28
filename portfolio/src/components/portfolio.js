import React from 'react'
import Card from 'react-bootstrap/Card';
import { Project } from './Project'

export const Portfolio = () => {
  return (
    <>
    <div>
       <Card className="text-center">
      <Card.Header>View my projects!</Card.Header>
      <Card.Body>
        <Project />
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
