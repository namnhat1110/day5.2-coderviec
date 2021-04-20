import React, { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const JobsList = () => {
    const [jobList, setJobList] = useState([]);


    useEffect(() => {
        async function FetchJobs() {
            const response = await fetch('http://localhost:3001/jobs')
            const json = await response.json()
            console.log({ json })
            setJobList(json)
        }
        FetchJobs()
    }, [])

    return (
        <Container>
            <h1>All jobs here</h1>
            {jobList.map(j => {
                return (
                    <Card className="mb-3">
                        <Card.Body>
                            <Link as={Link} to={`/jobs/${j.id}`}>
                                <Card.Title>{j.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">${j.salary}</Card.Subtitle>
                                <Card.Text>
                                    <ul>
                                        <li>{j.benefits[0]}</li>
                                        <li>{j.benefits[1]}</li>
                                        <li>{j.benefits[2]}</li>
                                    </ul>
                                </Card.Text>
                                <Card.Link href="#">{j.tags[0]}</Card.Link>
                                <Card.Link href="#">{j.tags[1]}</Card.Link>
                                <Card.Link href="#">{j.tags[2]}</Card.Link>
                            </Link>
                        </Card.Body>
                    </Card>
                )
            })}

        </Container>
    )
}
export default JobsList