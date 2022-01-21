import React from 'react'
import {Card,Button, Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './CurationCard.module.css';
export default function CurationCard({upvotes,title,description,subject,author}) {
    return (
        <Card>
          <Container>
          <Row>
            <Col xs={3}>
            RWPPP
            </Col>
            <Col xs={9}>
              <Card.Header as="h2">
    <Card.Title>Top 450 DSA</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    
    <Card.Text>
        <Link to='/'>
            Computer Science
        </Link>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <Link to='/'>
            Author
        </Link>
    </Card.Text>
    
  </Card.Body>
            </Col>
            </Row>
</Container>  
</Card>
    )
}
