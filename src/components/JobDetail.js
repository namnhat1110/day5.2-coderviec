import React, { useState, useEffect } from "react";
import { Container, Spinner, Jumbotron, Button, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const JobDetail = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function FetchJobsDetails() {
            const response = await fetch(`http://localhost:3001/jobs/${id}`)
            const json = await response.json()
            setJob(json)
        }
        FetchJobsDetails()
    }, [id])

    if (!job.title) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }

    return (
        <Container className="mt-5">
            {/* <Card style={{ height: '50vh' }}>
                <Row>
                    <Col lg="3">1 of 2</Col>
                    <Col lg="9">
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">${job.salary}</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>{job.benefits[0]}</li>
                                    <li>{job.benefits[1]}</li>
                                    <li>{job.benefits[2]}</li>
                                </ul>
                            </Card.Text>
                            <Card.Link href="#">{job.tags[0]}</Card.Link>
                            <Card.Link href="#">{job.tags[1]}</Card.Link>
                            <Card.Link href="#">{job.tags[2]}</Card.Link>

                        </Card.Body>
                    </Col>
                </Row>

            </Card> */}


            <Jumbotron>
                <Row>
                    <Col lg="3">1 of 2</Col>
                    <Col lg="9">
                        <div>
                            <h2>{job.title}</h2>
                            <Card.Link href="#">{job.tags[0]}</Card.Link>
                            <Card.Link href="#">{job.tags[1]}</Card.Link>
                            <Card.Link href="#">{job.tags[2]}</Card.Link>
                        </div>

                        <p>{job.description}</p>
                        <ul>
                            <li>{job.benefits[0]}</li>
                            <li>{job.benefits[1]}</li>
                            <li>{job.benefits[2]}</li>
                        </ul>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p></Col>

                </Row>

            </Jumbotron>
        </Container>
    )

};

export default JobDetail;